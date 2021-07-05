let gulp = require('gulp'),
    pug = require('gulp-pug');
    // stylus = require('gulp-stylus'),
    browserSync = require('browser-sync');



gulp.task('pug', function () {
    return gulp.src('src/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('src'))
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
    gulp.watch('src/*.html').on("change", browserSync.reload);
});

gulp.task('watch', function () {
    gulp.watch('src/*.pug', gulp.parallel('pug'));
});




gulp.task('default', gulp.parallel('watch', 'server'));