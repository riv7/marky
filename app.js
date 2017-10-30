var gulp = require('gulp');
var webserver = require('gulp-webserver');

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

gulp.src('build/editor')
    .pipe(webserver({
        host: server_ip_address,
        port: server_port,
        livereload: false,
        fallback: 'index.html',
        directoryListing: false,
        open: true,
        proxies: [{
            source: '/api',
            target: 'http://marky-server-marky.192.168.99.100.nip.io/api'
        }]
    }));