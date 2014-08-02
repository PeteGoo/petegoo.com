var gulp = require('gulp'),
    less = require('gulp-less')
    clean = require('gulp-clean')
    minifyCSS = require('gulp-minify-css')
    uglify = require('gulp-uglify');

gulp.task('less', function () {
  gulp.src('./less/petegoo.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'));
});

gulp.task('compress', function() {
  gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('scripts'))
});

gulp.task('clean', function() {
  return gulp.src(['./css'], {read: false})
    .pipe(clean());
});

gulp.task('default', ['clean'], function() {
    gulp.start('less', 'compress');
});