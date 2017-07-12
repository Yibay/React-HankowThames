
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: {
		// entry 中，必须用 ./ 开头
		main: './src/script/index.js'
	},
	output: {
		// 打包生成文件的 根路径
		path: __dirname + '/dist/static/',
		// 生成html文件中，引用此 js时，前置路径
		// webpack publicPath 配合 koa-static, 把静态文件都匹配路由，暴露出去
		//   而 html等，页面入口，不被暴露
		publicPath: '',
		filename: 'js/[name].js'
	},
	plugins: [
		new htmlWebpackPlugin({
			// 通过../ 使html 生成在 打包文件根路径的上层
			filename: '../index.html',
			template: 'src/views/index.html'
		})
	]
}