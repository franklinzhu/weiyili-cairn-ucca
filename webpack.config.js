const webpck = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dist_dir = path.resolve(process.cwd(), 'dist');
// const src_dir = path.resolve(__dirname, 'src');

module.exports = {
	entry: './src/index.js',
	output: {
		path: dist_dir,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/preset-env',
						'@babel/react',
						{
							plugins: ['@babel/plugin-proposal-class-properties']
						}
					]
				}
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: [{
				  loader: 'file-loader',
				  options: {
					name: '[name].[ext]',
					outputPath: 'static/imgs',
					publicPath: 'static/imgs'
				  }
				}]
			},
			{
				test: /\.(obj|fbx|dae|mtl)$/,
				use: [{
				  loader: 'file-loader',
				  options: {
					name: '[name].[ext]',
					outputPath: 'static/models',
					publicPath: 'static/models'
				  }
				}]
			}
		]
	},
	resolve:{
		alias:{
			 'BootStrap': path.join(__dirname, './node_modules/bootstrap/dist/css/bootstrap.css')
		}
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		// new CleanWebpackPlugin(['dist'])
		new ExtractTextPlugin({
      filename: 'main.css'
    })
	]
};
