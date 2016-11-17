var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var browserifycss = require('browserify-css')
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');

gulp.task('build', function () {
  return browserify('./source/app.js')
        .transform(browserifycss, {global: true})
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('marky.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('serve', function() {
  gulp.src('build')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('default', ['build', 'serve']);
