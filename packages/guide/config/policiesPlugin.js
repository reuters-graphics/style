const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const VirtualModulesPlugin = require('webpack-virtual-modules');
const glob = require('glob');
const Ajv = require('ajv').default;

const POLICIES_DIR = path.resolve(__dirname, '../content/policies/');

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

const policies = {};

const guideFiles = glob.sync('**/*.md', { cwd: POLICIES_DIR });

for (const file of guideFiles) {
  const filePath = path.resolve(POLICIES_DIR, file);
  const contents = fs.readFileSync(filePath);
  const data = matter(contents);
  if (!validMetadata(data)) continue;

  const relativePath = path.relative(POLICIES_DIR, filePath);
  const fileSlug = relativePath.replace('.md', '').replace('/', '-');
  policies[fileSlug] = data;
}

const virtualModules = new VirtualModulesPlugin({
  'node_modules/Policies.js': `module.exports = ${JSON.stringify(policies)};`,
});

module.exports = virtualModules;
