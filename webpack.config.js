var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  // main entry point
  entry: [
    './app/index.js'
  ],
  // location to output created file
  output: {
    // dirname is name of currently executing script's directory (root)
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  /* loader specifies what transformations to make on code. first arg is a reg
  expression saying run transformation on any .js file; 2nd arg says to exclude
  files in node_modules; 3rd arg says the transformation to make is called
  "babel-loader" */
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
