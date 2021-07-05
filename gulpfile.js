let gulp = require('gulp'),
    pug = require('gulp-pug'),
    stylus = require('gulp-stylus'),
    browserSync = require('browser-sync');

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });
    gulp.watch('app/*.html').on("change", browserSync.reload);
});


gulp.task('pug', function () {
    return gulp.src('app/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app'))
});

gulp.task('cssstyl', function () {
    gulp.src('./css/style.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('css/style.css',['cssstyl']);
    gulp.watch('css/**/*.css',['concatCss']);
   	gulp.watch('dist/all.css',['cssmin']);
    gulp.watch('app/*.pug', gulp.parallel('pug'));
    
});




gulp.task('default', gulp.parallel('watch', 'server'));