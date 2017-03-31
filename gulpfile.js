const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;
const runSequence = require('run-sequence');

const src = {
    js: './*.js',
    html: './index.html',
    css: './css/**/*.css'
};

// Browser Sync - Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
          middleware: function (req, res, next) {
              res.setHeader('Access-Control-Allow-Origin', '*');
              next();
          }
        }
    });

    gulp.watch(src.html).on('change', reload);
    gulp.watch(src.css).on('change', reload);
    gulp.watch(src.js).on('change', reload);
});

gulp.task('default', function (cb) {
	return runSequence('browser-sync', cb)
});