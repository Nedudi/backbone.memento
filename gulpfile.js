var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('minify', function () {
  return gulp.src('./backbone.memento.js')
  .pipe(uglify({
    preserveComments: 'some'
  }))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./'));
});
