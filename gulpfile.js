//引入
let gulp = require('gulp');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let rename = require('gulp-rename');
let pump = require('pump');
let babel = require('gulp-babel');
let sass = require('gulp-sass');

gulp.task('compileSass',function(){
    //匹配文件
    gulp.src(['./src/sass/*.scss'])//返回一个文件流
    //编译scss->css
    .pipe(sass({outputStyle:'compact'}).on('error',sass.logError))//得到css文件流
    //输出到硬盘
    .pipe(gulp.dest('./src/css/'))     
});
gulp.task('autoSass',cb=>{
    //监听文件修改，如果有修改，则执行compileSass任务
    gulp.watch('./src/sass/*.scss',['compileSass']);
});