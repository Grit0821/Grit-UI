const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    "grit-ui": './lib/index.tsx' // grit-ui 表示打包输出 chunkName
  },
  output: {
    path: path.resolve(__dirname ,'dist/lib'),
    library: 'GritUI',
    libraryTarget:'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'GritUI',
      template: 'index.html'
    })
  ]
}