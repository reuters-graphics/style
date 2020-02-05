const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const portfinder = require('portfinder');

portfinder.basePort = 3000;

const config = (env, argv, port) => (merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    disableHostCheck: true,
    port: port,
    open: true,
    contentBase: path.resolve(__dirname, '../'),
    historyApiFallback: {
      rewrites: [
        { from: /^\/.*\/app.js/, to: '/app.js' },
        {
          from: /^\/statics\/.*/,
          to: (context) => context.parsedUrl.pathname.replace('/statics/', '/'),
        },
      ],
    },
  },
  module: {
    rules: [{
      test: /scss.*\.scss$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      }, {
        loader: 'resolve-url-loader',
        options: {},
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      }],
    }, {
      test: /\.scss$/,
      exclude: [/scss.*\.scss$/, /node_modules\/*/],
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: true,
        },
      }, {
        loader: 'resolve-url-loader',
        options: {},
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      }],
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: { sourceMap: true },
      }],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
}));

module.exports = (env, argv) =>
  portfinder.getPortPromise()
    .then(port => config(env, argv, port));
