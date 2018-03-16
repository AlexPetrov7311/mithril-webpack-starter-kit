const webpack = require("webpack");
const path = require('path');
module.exports = {
    entry: [ './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'bin'),
      filename: 'app.js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader'
              }
            }
          ]
    },
    devServer: {
        hot: true,
        inline:true,
        port: 8080
      },
  };