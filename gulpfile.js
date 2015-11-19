var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

gulp.task('default', ['minify']);

gulp.task('minify', function() {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest('dist'))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});