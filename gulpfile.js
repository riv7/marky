var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var browserifycss = require('browserify-css')
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');
var less = require('gulp-less');

gulp.task('fonts-viewer', function() {
    return gulp.src('./lib/bootstrap-3.3.7/fonts/**/*')
        .pipe(gulp.dest('./build/viewer/fonts'));
});

// Compiles LESS > CSS
gulp.task('css-viewer', ['fonts-viewer'], function(){
    return gulp.src('styles/marky.less')
        .pipe(less())
        .pipe(gulp.dest('./build/viewer/css'));
});

gulp.task('fonts-editor', function() {
    return gulp.src('./lib/bootstrap-3.3.7/fonts/**/*')
        .pipe(gulp.dest('./build/editor/fonts'));
});

// Compiles LESS > CSS
gulp.task('css-editor', ['fonts-editor'], function(){
    return gulp.src('styles/marky.less')
        .pipe(less())
        .pipe(gulp.dest('./build/editor/css'));
});

gulp.task('build-editor', ['css-editor'], function () {
  return browserify('./source/editor/app.js')
        .transform(browserifycss, {global: true})
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('markyEditor.js'))
        .pipe(gulp.dest('./build/editor'));
});

gulp.task('build-viewer', ['css-viewer'], function () {
  return browserify('./source/viewer/app.js')
        .transform(browserifycss, {global: true})
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('markyViewer.js'))
        .pipe(gulp.dest('./build/viewer'));
});

gulp.task('serve-viewer', ['build-viewer'], function() {
  gulp.src('build/viewer')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('serve-editor', ['build-editor'], function() {
  gulp.src('build/editor')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('default', ['serve-editor']);
