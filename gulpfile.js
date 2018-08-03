var gulp = require('gulp'),
// 	less = require('gulp-less');


// gulp.task('testLess',function(){
// 	gulp.src('src/less/index.less')
// 		.pipe(less())
// 		.pipe(gulp.dest('src/css'));
// })

// gulp.task('default',['testLess']);

gulp.task("copy-index",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("dist"));
})