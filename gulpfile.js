var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');

gulp.task('sass',function(){
	return gulp.src("./sass/*.scss").pipe(sass()).pipe(rename({"suffix" : ".min"}))
	//.pipe(cssnano())
	.pipe(gulp.dest('dist/css'));
})

//压缩图片
gulp.task('img',function(){
	return gulp.src('./img/*').pipe(imagemin()).pipe(gulp.dest('dist/image'));
})
gulp.task('photo',function(){
	return gulp.src('./shop/photo/*').pipe(imagemin()).pipe(gulp.dest('dist/photo'));
})

gulp.task('watch',function(){
	gulp.watch('./sass/*.scss',['sass']);
	gulp.watch('./img/*',['img']);
	gulp.watch('./shop/photo/*',['photo']); 
})