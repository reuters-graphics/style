const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const VirtualModulesPlugin = require('webpack-virtual-modules');
const glob = require('glob');
const Ajv = require('ajv').default;

const TIP_SHEETS_DIR = path.resolve(__dirname, '../content/tip-sheets/');

const SCHEMA = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    description: { type: 'string' },
    categories: {
      type: 'array',
      items: { type: 'string' },
    },
  },
  required: ['title', 'description'],
};

const validMetadata = ({ data }) => {
  const ajv = new Ajv();
  return ajv.validate(SCHEMA, data);
};

const tipSheets = {};

const tipSheetsFiles = glob.sync('**/*.md', { cwd: TIP_SHEETS_DIR });

for (const file of tipSheetsFiles) {
  const filePath = path.resolve(TIP_SHEETS_DIR, file);
  const contents = fs.readFileSync(filePath);
  const data = matter(contents);
  if (!validMetadata(data)) continue;

  const relativePath = path.relative(TIP_SHEETS_DIR, filePath);
  const fileSlug = relativePath.replace('.md', '').replace('/', '-');
  tipSheets[fileSlug] = data;
}

const virtualModules = new VirtualModulesPlugin({
  'node_modules/TipSheets.js': `module.exports = ${JSON.stringify(tipSheets)};`,
});

module.exports = virtualModules;
