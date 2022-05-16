const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    "grit-ui": './lib/index.tsx' // grit-ui 表示打包输出 chunkName
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'GritUI',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'GritUI',
      template: 'index.html'
    })
  ],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  }
}