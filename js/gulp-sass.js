//grabs our .scss files and turns them into .css

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('../sass-css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../sass-css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
