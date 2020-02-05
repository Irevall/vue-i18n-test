const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf|png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'media/[name].[hash:7].[ext]',
            esModule: false,
          }
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Template',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    }
  },
};
