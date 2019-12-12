import alias from 'rollup-plugin-alias';
import babel from 'rollup-plugin-babel';
import dsv from 'rollup-plugin-dsv';
import path from 'path';
import pkg from '../package.json';
import resolve from 'rollup-plugin-node-resolve';

const babelOpts = {
  babelrc: false,
  exclude: 'node_modules/**',
  presets: [
    ['@babel/preset-env', { modules: false }],
  ],
};

export default {
  input: path.resolve(__dirname, '../src/index.js'),
  output: {
    file: path.resolve(__dirname, '../dist/index.js'),
    format: 'es',
  },
  external: [
    ...Object.keys(pkg.dependencies),
  ],
  plugins: [
    dsv({
      processRow(row, id) {
        const trimmedRow = {};
        Object.keys(row).forEach(key => {
          const value = row[key].trim();
          trimmedRow[key.trim()] = isNaN(+value) ? value : +value;
        });
        return trimmedRow;
      },
    }),
    alias({
      resolve: ['.js'],
    }),
    babel(babelOpts),
    resolve({
      preferBuiltins: true,
      extensions: ['.js'],
      modulesOnly: true,
    }),
  ],
};
