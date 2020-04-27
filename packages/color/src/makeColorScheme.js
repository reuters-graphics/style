function createColorValues({ hex, rgbArray }) {
  const [red, green, blue] = rgbArray;
  return {
    hex,
    rgbArray,
    rgb: `rgb(${red}, ${green}, ${blue})`,
    rgba: (alpha = 255) => `rgba(${red}, ${green}, ${blue}, ${alpha})`,
    rgbaArray: (alpha = 255) => [
      red,
      green,
      blue,
      alpha,
    ],
  };
}

function createColorAliasObjects(color) {
  const values = createColorValues(color);
  const objects = color.aliases.map((alias) => {
    const colorObject = {};
    colorObject[alias] = values;
    return colorObject;
  });
  return Object.assign({}, ...objects);
}

function createColorScheme(scheme) {
  const aliasObjects = scheme.map(color => createColorAliasObjects(color));
  const aliasScheme = Object.assign({}, ...aliasObjects);

  const colorScheme = Object.assign({}, aliasScheme, {
    all: scheme.map(color =>
      Object.assign({
        variables: color.variables,
      }, createColorValues(color))
    ),
  });

  colorScheme.first = () => colorScheme.all[0];
  colorScheme.last = () => colorScheme.all[colorScheme.all.length - 1];

  return colorScheme;
}

export default createColorScheme;
