var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.src('build/editor')
    .pipe(webserver({
        livereload: true,
        fallback: 'index.html',
        directoryListing: false,
        open: true,
        proxies: [{
            source: '/api',
            target: 'http://marky-server-marky.192.168.99.100.nip.io/api'
        }]
    }));