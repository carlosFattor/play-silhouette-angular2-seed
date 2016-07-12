var gulp = require("gulp");
var typescript = require('gulp-typescript');
var del = require('del');
var path = require('path');

gulp.task('clean', function(){
    return del('./public/javascripts')
});

gulp.task('build:index',['clean'], function(){
  return gulp.src('./ui/app/**/**/*.ts')
    .pipe(typescript('./ui/tsconfig.json'))
    .js
    .pipe(gulp.dest(path.resolve('./public/javascripts')))
});

gulp.task('watch', function() {
  gulp.watch('./ui/app/**/*.ts', ['build:index'])
})


gulp.task('default', ['watch']);