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


// 自动刷新页面
// 文件有修改，自动刷新页面
var browserSync = require('browser-sync');

gulp.task('server',function(){
    // 启动一个自动刷新的服务器
    browserSync({
        //创建一个静态服务器
        // server:'./src',

        // 指定端口
        port:2001,

        // 代理服务器
        // 用browserSync代理php服务器
        //  * 识别php
        //  * 自动刷新
        proxy:'http://localhost:2000',

        // 监听文件修改
        files:['./src/**/*.html','./src/css/*.css']
    });

    // 监听sass修改
    gulp.watch('./src/sass/*.scss',['compileSass']);
});