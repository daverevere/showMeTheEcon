'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const gulpif = require('gulp-if');
const gutil = require('gulp-util');
const cssmin = require('gulp-cssmin');

const sourcemaps = require('gulp-sourcemaps');
const production = process.env.NODE_ENV === 'production';


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

gulp.task('less', function() {
  return gulp.src('public/css/less/main.less')
    .pipe(plumber())
    .pipe(less().on('error', function(err){
        gutil.log(err);
        this.emit('end');
    }))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(concat('styles.css'))
    // .on('error',console.error.bind(console))
    .pipe(gulpif(production, cssmin()))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  gulp.watch('public/css/less/**/*.less', ['less']);
});

gulp.task('default', [ 'browser-sync','watch','less']);

