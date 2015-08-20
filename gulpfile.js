var gulp = require('gulp'),
    merge = require('merge-stream'),
    babel = require('gulp-babel');

gulp.task('default', function() {
  var index = gulp.src('index.es6')
    .pipe(babel())
    .pipe(gulp.dest('.'));

  var methane = gulp.src('lib/methane.es6')
    .pipe(babel())
    .pipe(gulp.dest('./lib'));

  var readers = gulp.src('lib/readers/*.es6')
    .pipe(babel())
    .pipe(gulp.dest('./lib/readers'));

  return merge(index, methane, readers);
});
