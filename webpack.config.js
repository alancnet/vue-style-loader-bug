const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const shadowMode = true

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: { shadowMode }
      },
      {
        test: /\.css$/,
        loader: [
          {
            loader: 'vue-style-loader', // <-- Change to @alancnet/vue-style-loader to fix
            options: { shadowMode }
          },
          'css-loader'
        ]
      },

    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}