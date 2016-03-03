'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');


gulp.task('browser-sync', ['nodemon'], () => {
  browserSync.init(null, {
        injectChanges: true,
    proxy: {
            target: "localhost:2000",
            ws: true
        },
        files: ["./public/**/*.*"],
        browser: "google chrome",
        port: 2001,
        reloadDelay: 500
  });
});

gulp.task('nodemon', (cb) => {
  var started = false;
  return nodemon({
    script: 'index.js',
        ignore: ["public/**/*.*", '/gulpfile.js', "src/**/*.*"]
  }).on('start',  () =>{
    // to avoid nodemon being started multiple times
    if (!started) {
      cb();
      started = true; 
    } 
  });
}); 



gulp.task('default', ['browser-sync']);
