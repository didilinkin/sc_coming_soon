# coming_soon项目

## 目录介绍
    项目目录:coming_soon/
    |
    |--node_modules/            插件安装包(不进行版本管理,自行安装)
    |
    |--app/                     开发源码
    |   |
    |   |--css/                 css文件(不需要Sass编译,流向build文件夹)
    |   |
    |   |--fonts/               图标字体包(不需要修改,流向build文件夹)
    |   |
    |   |--img/                 图片源文件(未经过Gulp插件无损压缩的源文件)
    |   |
    |   |--js/                  js脚本(jQuery库的脚本,独立出来防止污染)
    |   |
    |   |--jsx/                 React开发的组件
    |   |
    |   |--sass/                Sass样式文件(Gulp自动控制编译)
    |   |
    |   |--index.html           HTML页面
    |
    |--backup/                  测试代码备份(未版本管理,用于放置测试代码)
    |
    |--build/                   打包完成的项目目录(Gulp 与 Webpack同时管理)
    |   |
    |   |--css/                 Sass编译文件+图标css文件(无处理)
    |   |
    |   |--fonts/               图标字体文件(无处理)
    |   |
    |   |--img/                 经过Gulp无损压缩的图片文件
    |   |
    |   |--js                   经过Webpack打包的React文件 与 经过Gulp压缩的js文件
    |   |
    |   |--index.html           HTML页面(Gulp未处理)
    |
    |--.gitignore               非git管理内容标注
    |
    |--gulpfile.js              Gulp构建-入口文件
    |
    |--package.json             npm配置记录
    |
    |--.editorconfig            编辑器统一格式
    |
    |--README.md                项目描述文件
    |
    |--webpack.config.js        打包任务(包含React与jsx文件转译)
    |
    |--server.js                将server部分分离到一个单独到的文件配置

***

# 环境配置说明
1 使用Git clone 本项目地址
2 在项目目录下 执行命令行 `npm install` 安装环境依赖
3 Webpack命令说明
    `npm run testBuild` 执行webpack默认程序 并打包React jsx文件
    (每次修改完jsx文件后,执行这句命令打包jsx;暂未改好webpack热加载功能,webpack-dev-server服务器功能是可以使用的)
    建议配合 `gulp server`命令 （双开命令行,一个负责打包webpack,另外一个Gulp负责打开服务器监听[监听sass,js,html]并自动处理）
4 Gulp命令说明
    必须执行任务:
        `cssto` 将不需要编译的css文件输出
        `fontsto` 将不需要处理的fonts文件夹输出
        `imagemin` 图片处理任务(只需处理一次)
        `connect` 开启Node服务器
    其他任务:
        `server` 配合webpack命令的任务  监听 编译 刷新Node服务器
