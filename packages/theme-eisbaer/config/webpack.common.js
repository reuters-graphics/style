const path = require('path');

module.exports = {
  entry: {
    app: [
      '@babel/polyfill',
      'whatwg-fetch',
      path.join(__dirname, '../guide/app.js'),
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      SCSS: path.resolve(__dirname, '../scss'),
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
              '@babel/plugin-syntax-dynamic-import',
            ],
          },
        },
      },
      {
        test: /\.md$/,
        use: [
          '@politico/markdown-react-loader',
        ],
      },
      {
        test: /\.jpg$/,
        use: {
          loader: 'base64-image-loader',
        },
      },
    ],
  },
};
