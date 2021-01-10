const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const VirtualModulesPlugin = require('webpack-virtual-modules');
const glob = require('glob');
const Ajv = require('ajv').default;

const GUIDES_DIR = path.resolve(__dirname, '../content/guides/');

const SCHEMA = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    description: { type: 'string' },
  },
  required: ['title', 'description'],
};

const validMetadata = ({ data }) => {
  const ajv = new Ajv();
  return ajv.validate(SCHEMA, data);
};

const GUIDES = {};

const guideFiles = glob.sync('**/*.md', { cwd: GUIDES_DIR });

for (const file of guideFiles) {
  const filePath = path.resolve(GUIDES_DIR, file);
  const contents = fs.readFileSync(filePath);
  const data = matter(contents);
  if (!validMetadata(data)) continue;

  const relativePath = path.relative(GUIDES_DIR, filePath);
  const fileSlug = relativePath.replace('.md', '').replace('/', '-');
  GUIDES[fileSlug] = data;
}

const virtualModules = new VirtualModulesPlugin({
  'node_modules/Guides.js': `module.exports = ${JSON.stringify(GUIDES)};`,
});

module.exports = virtualModules;
