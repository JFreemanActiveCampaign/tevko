// Include gulp
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    imagemin = require('gulp-imagemin');

// autoprefix Task
gulp.task('autoprefixer', function() {
    gulp.src('css/*.css')
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('css'));
});

//browser sync Task
gulp.task('browser-sync', function() {
    browserSync.init(['css/*.css', '*.php','js/*.js']);
});

//image optimization

gulp.task('imagemin', function() {
  return gulp.src('img/*.{png,jpg,gif}')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('img'));
});

// Default Task
gulp.task('default',["imagemin","autoprefixer"], function(){
    gulp.watch('img/*.{png,jpg,gif}', ["imagemin"]);
    gulp.watch('css/*.css', ["autoprefixer"]);
    gulp.start('browser-sync');
});