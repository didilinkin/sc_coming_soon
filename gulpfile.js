var gulp = require('gulp'), 						// gulp
    util = require('gulp-util'),                    // gulp常用的工具库——gulp-util
	// 压缩任务
	htmlmin = require('gulp-htmlmin'),				// HTML压缩——gulp-htmlmin
	imagemin = require('gulp-imagemin'),			// 图片压缩
	pngquant = require('imagemin-pngquant'),		// PNG图片压缩
	// CSS预处理任务
	sass = require('gulp-sass'), 					// sass编译——gulp-sass
	autoprefixer = require('gulp-autoprefixer'),	// 给css添加浏览器前缀——gulp-autoprefixer
	sourcemaps = require('gulp-sourcemaps'),		// gulp-sourcemaps原始地址
	// 特殊任务
	livereload = require('gulp-livereload'),		// 自动刷新——gulp-livereload
	watchPath = require('gulp-watch-path'),		    // watch监控——gulp-watch-path
	connect = require('gulp-connect');				// gulp 服务器插件

    // 服务器
    gulp.task('connectDev', function () {
      connect.server({
        name: 'Dev',
        root: ['build'],
        port: 8000,
        livereload: true
      });
    });

    // Sass编译任务
	gulp.task('sass', function () {
		return gulp.src('./app/sass/*.sass')
			// 输出格式 + 错误输出
			.pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
			// 输出位置
			.pipe(gulp.dest('./build/css'))
			// 添加LiveReload插件
			livereload.listen();
	});

    // HTML输出 / 修改路径
    gulp.task('html', function () {
      return gulp.src('./app/*.html')
        // 压缩
        // .pipe(htmlmin({collapseWhitespace: true}))
        // 更改位置
        .pipe(gulp.dest('./build/'))
        .pipe(connect.reload());
    });

    // JS输出(暂不需要,未进行配置)
    // gulp.task('js', function () {
    //   return gulp.src('./app/js/*.js')
    //     // 更改位置
    //     .pipe(gulp.dest('./build/js/'))
    //     .pipe(connect.reload());
    // });

    // 图片压缩
	gulp.task('imagemin',function(){
		gulp.src('./app/img/*.{png,jpg,gif,ico}')
			.pipe(imagemin({
				progressive: true,
				svgPlugins: [{removeViewBox: false}],
				use: [pngquant()]
			}))
			.pipe(gulp.dest('./build/img/'));
	});


    // 在命令行使用 gulp watch 启动此任务
	gulp.task('watch', function() {
	    // 监听Sass文件修改，当文件被修改则执行 sass 任务
	    gulp.watch('app/sass/*.sass', ['sass']);
		// 监听HTML文件修改，当HTML文件被修改则执行 HTML 任务
		gulp.watch('app/*.html', ['html']);
	});

	gulp.task('default', ['sass','watch','imagemin'])
