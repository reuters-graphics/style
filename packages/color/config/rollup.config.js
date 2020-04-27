import alias from 'rollup-plugin-alias';
import babel from 'rollup-plugin-babel';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';

const babelOpts = {
  babelrc: false,
  exclude: 'node_modules/**',
  presets: [
    ['@babel/preset-env', { modules: false }],
  ],
};

const plugins = [
  alias({ resolve: ['.js'] }),
  babel(babelOpts),
  resolve({
    preferBuiltins: true,
    extensions: ['.js'],
    modulesOnly: true,
  }),
];

export default [{
  input: path.resolve(__dirname, '../src/index.js'),
  output: {
    file: path.resolve(__dirname, '../dist/index.js'),
    format: 'es',
  },
  plugins,
}, {
  input: path.resolve(__dirname, '../src/schemes/categorical/index.js'),
  output: {
    file: path.resolve(__dirname, '../dist/categorical/index.js'),
    format: 'es',
  },
  plugins,
}, {
  input: path.resolve(__dirname, '../src/schemes/sequential/index.js'),
  output: {
    file: path.resolve(__dirname, '../dist/sequential/index.js'),
    format: 'es',
  },
  plugins,
}, {
  input: path.resolve(__dirname, '../src/schemes/diverging/index.js'),
  output: {
    file: path.resolve(__dirname, '../dist/diverging/index.js'),
    format: 'es',
  },
  plugins,
}];
