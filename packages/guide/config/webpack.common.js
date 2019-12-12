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
        test: /\.md$/,
        loader: '@politico/markdown-react-loader',
      }, {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [virtualPostsPlugin],
};
