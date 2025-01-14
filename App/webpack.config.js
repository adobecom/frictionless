const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '../'),
   filename: 'scripts.js',
   publicPath: '/'
 },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
   port: 8080,
//    watchContentBase: true
 },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     }
   ]
 },
 devServer: {
  historyApiFallback: true,
},
 plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}