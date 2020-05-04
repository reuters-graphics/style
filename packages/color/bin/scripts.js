const recursiveReadSync = require('recursive-readdir-sync');
const fs = require('fs');
const path = require('path');
const parse = require('csv-parse/lib/sync');
const hexRgb = require('hex-rgb');
const stringifyObject = require('stringify-object');

const createAlias = (schemeName, variable) => {
  return variable
    .replace(`$${schemeName}-`, '') // Replace leading scheme name...
    .replace('$', '') // ... any leftover SCSS...
    .replace(/-\w/g, m => m[1].toUpperCase()); // ... and slugify!
};

const makeSchemes = (type = 'categorical') => {
  const SCHEMES_DIR = path.resolve(__dirname, '../schemes/', type);
  const WRITE_DIR = path.resolve(__dirname, '../src/schemes/', type);

  const schemes = {};

  recursiveReadSync(SCHEMES_DIR).forEach((file) => {
    const filePath = path.resolve(SCHEMES_DIR, file);
    const relativePath = path.relative(SCHEMES_DIR, filePath);
    const schemeName = relativePath.replace('.csv', '');

    const contents = fs.readFileSync(filePath);
    const scheme = parse(contents, { columns: true, ltrim: true });

    schemes[schemeName] = scheme.map(m => {
      const rgb = hexRgb(m.hex);
      m.variables = m.variables.trim().split(' ');
      m.aliases = m.variables.map(variable => createAlias(schemeName, variable));
      m.rgbArray = [rgb.red, rgb.green, rgb.blue];
      return m;
    });
  });

  let IMPORTS = 'import makeColorScheme from \'./../../makeColorScheme\';\n\n';
  let EXPORTS = '';

  Object.keys(schemes).forEach((schemeName) => {
    const slugScheme = schemeName.replace(/-\w/g, m => m[1].toUpperCase());
    const writePath = path.resolve(WRITE_DIR, `${slugScheme}.js`);

    fs.mkdirSync(path.dirname(writePath), { recursive: true });

    const schemeObj = stringifyObject(schemes[schemeName], {
      indent: '  ',
      singleQuotes: true,
    });

    fs.writeFileSync(writePath, `export default ${schemeObj}`);

    IMPORTS += `import ${slugScheme}Scheme from './${slugScheme}';\n`;
    EXPORTS += `export const ${slugScheme} = makeColorScheme(${slugScheme}Scheme);\n`;
  });

  const mainPath = path.resolve(WRITE_DIR, 'index.js');

  if (!fs.existsSync(path.dirname(mainPath))) fs.mkdirSync(path.dirname(mainPath));

  fs.writeFileSync(mainPath, `${IMPORTS}\n${EXPORTS}`);
};

makeSchemes('categorical');
makeSchemes('sequential');
makeSchemes('diverging');
makeSchemes('thematic');
