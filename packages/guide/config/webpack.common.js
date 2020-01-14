const path = require('path');
const virtualPostsPlugin = require('./snippetsPlugin');

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
        test: /\.(png|svg|jpg|gif)$/,
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
          '@politico/markdown-react-loader',
        ],
      },
    ],
  },
  plugins: [virtualPostsPlugin],
};
