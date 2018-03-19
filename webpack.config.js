const webpack = require("webpack");
const path = require('path');
module.exports = {
    entry: [ './src/index.tsx'],
    output: {
      path: path.resolve(__dirname, 'bin'),
      filename: 'app.js'
    },
    module: {
        rules: [
            // {
            //   test: /\.js$/,
            //   exclude: /(node_modules|bower_components)/,
            //   use: {
            //     loader: 'babel-loader'
            //   }
            // },
            // ts-loader: convert typescript (es6) to javascript (es6),
            // babel-loader: converts javascript (es6) to javascript (es5)
            {
              'test': /\.tsx?$/,
              'loaders': ['babel-loader','ts-loader'],
              'exclude': /(node_modules|bower_components)/
            },
            // babel-loader for pure javascript (es6) => javascript (es5)
            {
              'test': /\.(jsx?)$/,
              'loaders': ['babel-loader'],
              'exclude': /(node_modules|bower_components)/
            }
          ]
    },
    devServer: {
        hot: true,
        inline:true,
        port: 8080
      },
  };