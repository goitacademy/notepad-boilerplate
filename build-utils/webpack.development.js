const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', minify: false })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    watchContentBase: true,
    publicPath: '/',
    hot: false,
    historyApiFallback: true,
    noInfo: true,
    quiet: true,
    stats: 'errors-only',
    clientLogLevel: 'warning',
    compress: true,
    open: true,
    port: env.port
  }
});
