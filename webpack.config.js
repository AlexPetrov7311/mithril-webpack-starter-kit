const webpack = require("webpack");
const TSLintPlugin = require('tslint-webpack-plugin');
const path = require('path');
module.exports = {
    entry: [ './src/index.tsx'],
    output: {
      path: path.resolve(__dirname, 'bin'),
      filename: 'app.js'
    },
    module: {
        rules: [
            {
              test: /\.ts|tsx|js$/,
              enforce: 'pre',
              loader: 'tslint-loader',
              exclude: /(node_modules|bower_components)/,
              options: {
                tsConfigFile: 'tslint.json'
              }
            },
            // ts-loader: convert typescript (es6) to javascript (es6),
            // babel-loader: converts javascript (es6) to javascript (es5)
            {
              test: /\.ts|tsx?$/,
              loaders: ['babel-loader','ts-loader'],
              exclude: /(node_modules|bower_components)/
            },
            // babel-loader for pure javascript (es6) => javascript (es5)
            {
              test: /\.(js|jsx?)$/,
              loaders: ['babel-loader'],
              exclude: /(node_modules|bower_components)/
            }
          ]
    },
    // plugins: [
    //   new TSLintPlugin({
    //     files: ['./src/**/*.ts']
    //   })
    // ],
    devServer: {
        hot: true,
        inline:true,
        port: 8080
      },
  };