const babel = require('@babel/core');

module.exports = function(source) {
  // Escape backticks (essential) and newlines (cosmetic)
  const safeString = source
    .replace(/`/g, '\\`')
    .replace(/\n/g, '\\n')
    .replace(/\${/g, '\$\\{'); // eslint-disable-line no-useless-escape
  // Create Markdown component w/out JSX
  const component = `React.createElement(
    ReactMarkdown,
    {source: mustache.render(\`${safeString}\`, props.context || {}), ...props},
    null
  )`;

  const module = `const React = require('react');
const ReactMarkdown = require('react-markdown');
const mustache = require('mustache');
module.exports = function(props) { return ${component}; };`;

  return babel.transformSync(module, {
    presets: ['@babel/preset-env'],
  }).code;
};
