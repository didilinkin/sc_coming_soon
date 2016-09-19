var path = require('path');
// 配置变量
var ROOT_PATH = path.resolve(__dirname); //当前文件路径
var REACT_PATH = path.resolve(ROOT_PATH,'app/jsx'); //jsx项目文件夹
var REACT_BUILD_PATH = path.resolve(ROOT_PATH,'build/js'); //打包后的文件夹

module.exports = {
  entry: path.resolve(__dirname, 'app/jsx/app.jsx'),
  output: {
    path:'build/js',//我这里的路径是在lib文件夹下
    publicPath:"http://localhost:8080/build",
    filename: 'build.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015','react']
      }
    },
    ]
  },
    // 补全后缀名
	resolve: {
		extensions: ['', '.js', '.jsx','.css']
	}
};
