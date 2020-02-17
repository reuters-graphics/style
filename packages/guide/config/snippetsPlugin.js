const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const VirtualModulesPlugin = require('webpack-virtual-modules');
const recursiveReadSync = require('recursive-readdir-sync');

const SNIPPETS_DIR = path.resolve(__dirname, '../content/snippets/');

const snippets = {};

recursiveReadSync(SNIPPETS_DIR).forEach((file) => {
  const filePath = path.resolve(SNIPPETS_DIR, file);
  const relativePath = path.relative(SNIPPETS_DIR, filePath);
  const contents = fs.readFileSync(path.resolve(SNIPPETS_DIR, file));
  snippets[relativePath.replace('.md', '').replace('/', '-')] = matter(contents);
});

const virtualModules = new VirtualModulesPlugin({
  'node_modules/Snippets.js': `module.exports = ${JSON.stringify(snippets)};`,
});

module.exports = virtualModules;
