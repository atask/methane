var gulp = require('gulp'),
    merge = require('merge-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    eslint = require('gulp-eslint');

gulp.task('default', function() {
  var index = gulp.src('index.es6')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'));

  var methane = gulp.src('lib/methane.es6')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./lib'));

  var readers = gulp.src('lib/readers/*.es6')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./lib/readers'));

  return merge(index, methane, readers);
});

gulp.task('lint', function() {
  var index = gulp.src('index.es6')
    .pipe(eslint())
    .pipe(eslint.format());

  var methane = gulp.src('lib/methane.es6')
    .pipe(eslint())
    .pipe(eslint.format());

  var readers = gulp.src('lib/readers/*.es6')
    .pipe(eslint())
    .pipe(eslint.format());

  return merge(index, methane, readers);
});
