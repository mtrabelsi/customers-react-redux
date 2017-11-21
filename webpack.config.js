var HtmlWebpackPlugin =  require('html-webpack-plugin')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
process.traceDeprecation = true

module.exports = {
  entry : './src/app.js',
  output : {
    path : './dist',
    filename : 'app.bundle.js'
  },
  plugins : [new HtmlWebpackPlugin({
    title : 'Webtrekk task',
    hash : true,
    template :'./template/template.html'
  }), new ExtractTextWebpackPlugin('app.bundle.css')],
  module : {
    rules : [{
      test : /\.css$/,
      use : ExtractTextWebpackPlugin.extract({
        fallback : 'style-loader',
        use: 'css-loader'
      })
    },{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react','es2015']
      }
    }]
  }
}
