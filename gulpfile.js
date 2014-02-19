// Include gulp
var gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    imagemin = require('gulp-imagemin');

// autoprefix Task
gulp.task('autoprefix', function() {
    gulp.src('css/*.css')
    .pipe(prefix())
    .pipe(gulp.dest('css'));
});

//browser sync Task
gulp.task('browser-sync', function() {
    browserSync.init(['css/*.css', '*.php','js/*.js']);
});

//image optimization

gulp.task('images', function() {
  return gulp.src('img/*.{png,jpg,gif}')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('img'));
});

// Default Task
gulp.task('default', function(){
    gulp.run('autoprefix');
    gulp.run('browser-sync');
    gulp.run('images');

    // Watch For Changes To Our CSS
    gulp.watch('./css/*.css', function(){
        gulp.run('autoprefix');
    });

    //watch for changes to our images
    gulp.watch('img', function(){
        gulp.run('images');
    });
});