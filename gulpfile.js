var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyHtml = require("gulp-minify-html");

gulp.task('sass', function () {
    return gulp.src('./src/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['sass', 'html'], function () {
    gulp.watch(['./src/**/*.scss'], ['sass']);
    gulp.watch(['./src/*.html'], ['html']);
});

gulp.task('html', function () {
    gulp.src('./src/*.html') // path to your files
        .pipe(minifyHtml())
        .pipe(gulp.dest('dist'));
});
