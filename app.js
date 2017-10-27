var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.src('build/editor')
    .pipe(webserver({
        livereload: true,
        fallback: 'index.html',
        directoryListing: false,
        open: true,
        proxies: [{
            source: '/v1',
            target: 'http://localhost:8080/v1'
        }]
    }));