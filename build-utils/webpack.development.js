const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
  devServer: {
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
