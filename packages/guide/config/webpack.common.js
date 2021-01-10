const path = require('path');
const tipSheetsPlugin = require('./tipSheetsPlugin');
const policiesPlugin = require('./policiesPlugin');

module.exports = {
  entry: {
    app: [
      '@babel/polyfill',
      'whatwg-fetch',
      path.join(__dirname, '../pages/app.js'),
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Components: path.resolve(__dirname, '../pages/components/'),
      Theme: path.resolve(__dirname, '../pages/theme/'),
      Content: path.resolve(__dirname, '../content'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  browsers: 'last 2 versions',
                },
              }],
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/proposal-class-properties',
            ],
          },
        },
      }, {

      }, {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            outputPath: 'images',
          },
        }],
      }, {
        test: /\.md$/,
        use: [
          path.resolve(__dirname, 'loaders/markdown-image-loader.js'),
          path.resolve(__dirname, 'loaders/markdown-react-loader.js'),
        ],
      },
    ],
  },
  plugins: [
    tipSheetsPlugin,
    policiesPlugin,
  ],
};
