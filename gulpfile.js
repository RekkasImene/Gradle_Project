var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

gulp.task('task1',function(){

	return gulp.src("./css/**").
	pipe(concat('all.css')). 
	pipe(cleanCSS()).
	pipe(gulp.dest('./dist'))

});

gulp.task('task2',function(){

	return gulp.src("./js/*.js").
	pipe(concat('all.js')). 
	pipe(uglify()).
	pipe(gulp.dest('./dist'))

});

gulp.task('task3',function(){

	return gulp.src("./js/vendor/*.js").
	
	pipe(gulp.dest('./dist'))

});
gulp.task('task3',function(){

	return gulp.src("./js/vendor/*.js").
	
	pipe(gulp.dest('./dist'))

});

