const recursiveReadSync = require('recursive-readdir-sync');
const fs = require('fs');
const path = require('path');
const parse = require('csv-parse/lib/sync');

const makeSchemes = (type = 'categorical') => {
  const SCHEMES_DIR = path.resolve(__dirname, '../schemes/', type);

  const schemes = {};

  recursiveReadSync(SCHEMES_DIR).forEach((file) => {
    const filePath = path.resolve(SCHEMES_DIR, file);
    const relativePath = path.relative(SCHEMES_DIR, filePath);
    const contents = fs.readFileSync(filePath);
    const scheme = parse(contents, { columns: true, ltrim: true });
    schemes[relativePath] = scheme.map(m => {
      m.variables = m.variables.trim().split(' ');
      return m;
    });
  });

  let IMPORTS = '';

  Object.keys(schemes).forEach((k) => {
    const script = k.replace('.csv', '.scss');
    let SCSS = `// ${type}/${k}\n`;
    Object.keys(schemes[k]).forEach((c) => {
      schemes[k][c].variables.forEach((v) => {
        SCSS += `${v}: ${schemes[k][c].hex};\n`;
      });
    });
    const parsedPath = path.parse(script);
    const writePath = path.resolve(
      __dirname,
      '../scss/',
      type,
      path.join(parsedPath.dir, '_' + parsedPath.base)
    );

    fs.mkdirSync(path.dirname(writePath), { recursive: true });

    fs.writeFileSync(writePath, SCSS);

    IMPORTS += `@import "${script.replace('.scss', '')}";\n`;
  });

  const mainPath = path.resolve(__dirname, `../scss/${type}/_all.scss`);

  if (!fs.existsSync(path.dirname(mainPath))) fs.mkdirSync(path.dirname(mainPath));

  fs.writeFileSync(mainPath, IMPORTS);
};

makeSchemes('categorical');
makeSchemes('sequential');
makeSchemes('diverging');
makeSchemes('thematic');

const mainPath = path.resolve(__dirname, '../scss/_all.scss');
fs.writeFileSync(mainPath, `
@import 'categorical/all';
@import 'sequential/all';
@import 'diverging/all';
@import 'thematic/all';
`);
