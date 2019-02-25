const path = require('path');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode = 'production' }) =>
  webpackMerge(
    {
      mode,
      context: path.resolve(__dirname, 'src'),
      entry: './index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
          },
          {
            test: /\.html$/,
            use: 'html-loader'
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: '[path]/[name].[ext]',
                  limit: 5000
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new CleanWebpackPlugin('dist'),
        new FriendlyErrorsWebpackPlugin(),
        new WebpackBar()
      ]
    },
    modeConfig(mode)
  );
