const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      loader: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }],
  },
  devServer: {
    contentBase: path.join(__dirname, './public'),
    publicPath: '/public/'
  },
};