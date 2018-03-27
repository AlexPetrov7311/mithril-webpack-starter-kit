const webpack = require("webpack");
const TSLintPlugin = require('tslint-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');


module.exports = function (env) {
  var build = env && env.build || 'poduction';
  var staticFolder = 'prodbuild';
  return {
    entry: [ './src/index.tsx'],
    output: {
      path: path.resolve(__dirname, (build == 'production' ? staticFolder : 'bin') ),
      filename: 'app.js'
    },
    module: {
        rules: [
            {
              test: /\.ts|tsx$/,
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
            },
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                use: [{loader:'css-loader?sourceMap'}, {loader:'sass-loader', options: {
                  sourceMap: true
                }}]  
              })
              
            },  
            {test: /\.(woff|woff2|ttf|eot|svg)$/, loader: 'file-loader?name=./fonts/[hash].[ext]'},
            {test: /\.(png|jpeg|jpg)$/, loader: 'file-loader?name=./images/[hash].[ext]'}
          ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: '[name].min.css',
      })
    ],
    devServer: {
        hot: true,
        inline:true,
        port: 8080
      },
  };
};