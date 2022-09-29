// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', async function (cb) {
    gulp
        .src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(
            gulp.dest(function (f) {
                return f.base;
            })
        );
    cb();
});

/*
gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch('*.scss', gulp.series('sass'));
    cb();
  })
);
*/

gulp.task('watch', () => {
    gulp.watch('./src/**/*.scss', async (done) => {
        gulp.series(['sass'])(done);
        done()
    });
});


gulp.task('default', gulp.series(['watch', 'sass']));