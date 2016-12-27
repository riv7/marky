var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var browserifycss = require('browserify-css')
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');

gulp.task('build_editor', function () {
  return browserify('./source/editor/app.js')
        .transform(browserifycss, {global: true})
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('markyEditor.js'))
        .pipe(gulp.dest('./build/editor'));
});

gulp.task('build_viewer', function () {
  return browserify('./source/viewer/app.js')
        .transform(browserifycss, {global: true})
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('markyViewer.js'))
        .pipe(gulp.dest('./build/viewer'));
});

gulp.task('serve_viewer', function() {
  gulp.src('build/viewer')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('serve_editor', function() {
  gulp.src('build/editor')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('default', ['build', 'serve']);
