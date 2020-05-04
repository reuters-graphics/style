function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function createColorValues(_ref) {
  var hex = _ref.hex,
      rgbArray = _ref.rgbArray;

  var _rgbArray = _slicedToArray(rgbArray, 3),
      red = _rgbArray[0],
      green = _rgbArray[1],
      blue = _rgbArray[2];

  return {
    hex: hex,
    rgbArray: rgbArray,
    rgb: "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")"),
    rgba: function rgba() {
      var alpha = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 255;
      return "rgba(".concat(red, ", ").concat(green, ", ").concat(blue, ", ").concat(alpha, ")");
    },
    rgbaArray: function rgbaArray() {
      var alpha = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 255;
      return [red, green, blue, alpha];
    }
  };
}

function createColorAliasObjects(color) {
  var values = createColorValues(color);
  var objects = color.aliases.map(function (alias) {
    var colorObject = {};
    colorObject[alias] = values;
    return colorObject;
  });
  return Object.assign.apply(Object, [{}].concat(_toConsumableArray(objects)));
}

function createColorScheme(scheme) {
  var aliasObjects = scheme.map(function (color) {
    return createColorAliasObjects(color);
  });
  var aliasScheme = Object.assign.apply(Object, [{}].concat(_toConsumableArray(aliasObjects)));
  var colorScheme = Object.assign({}, aliasScheme, {
    all: scheme.map(function (color) {
      return Object.assign({
        variables: color.variables,
        aliases: color.aliases
      }, createColorValues(color));
    })
  });

  colorScheme.first = function () {
    return colorScheme.all[0];
  };

  colorScheme.last = function () {
    return colorScheme.all[colorScheme.all.length - 1];
  };

  return colorScheme;
}

var brandScheme = [{
  hex: '#ff8000',
  variables: ['$brand', '$brand-primary'],
  aliases: ['brand', 'primary'],
  rgbArray: [255, 128, 0]
}, {
  hex: '#666666',
  variables: ['$brand-secondary'],
  aliases: ['secondary'],
  rgbArray: [102, 102, 102]
}, {
  hex: '#ffffff',
  variables: ['$brand-background', '$brand-inverted-secondary'],
  aliases: ['background', 'invertedSecondary'],
  rgbArray: [255, 255, 255]
}, {
  hex: '#86888b',
  variables: ['$brand-nav'],
  aliases: ['nav'],
  rgbArray: [134, 136, 139]
}, {
  hex: '#313132',
  variables: ['$brand-nav-active', '$brand-text', '$brand-text-primary'],
  aliases: ['navActive', 'text', 'textPrimary'],
  rgbArray: [49, 49, 50]
}, {
  hex: '#333333',
  variables: ['$brand-inverted-background'],
  aliases: ['invertedBackground'],
  rgbArray: [51, 51, 51]
}, {
  hex: '#999999',
  variables: ['$brand-inverted-nav'],
  aliases: ['invertedNav'],
  rgbArray: [153, 153, 153]
}, {
  hex: '#cccccc',
  variables: ['$brand-inverted-nav-active'],
  aliases: ['invertedNavActive'],
  rgbArray: [204, 204, 204]
}, {
  hex: '#717375',
  variables: ['$brand-text-secondary'],
  aliases: ['textSecondary'],
  rgbArray: [113, 115, 117]
}];

var dawnScheme = [{
  hex: '#98B898',
  variables: ['$dawn-0'],
  aliases: ['0'],
  rgbArray: [152, 184, 152]
}, {
  hex: '#94778B',
  variables: ['$dawn-1'],
  aliases: ['1'],
  rgbArray: [148, 119, 139]
}, {
  hex: '#EFC267',
  variables: ['$dawn-2'],
  aliases: ['2'],
  rgbArray: [239, 194, 103]
}, {
  hex: '#E8495F',
  variables: ['$dawn-3'],
  aliases: ['3'],
  rgbArray: [232, 73, 95]
}, {
  hex: '#6A6B75',
  variables: ['$dawn-4'],
  aliases: ['4'],
  rgbArray: [106, 107, 117]
}, {
  hex: '#08415C',
  variables: ['$dawn-5'],
  aliases: ['5'],
  rgbArray: [8, 65, 92]
}];

var khakiScheme = [{
  hex: '#FDC218',
  variables: ['$khaki-0'],
  aliases: ['0'],
  rgbArray: [253, 194, 24]
}, {
  hex: '#406427',
  variables: ['$khaki-1'],
  aliases: ['1'],
  rgbArray: [64, 100, 39]
}, {
  hex: '#6A5032',
  variables: ['$khaki-2'],
  aliases: ['2'],
  rgbArray: [106, 80, 50]
}, {
  hex: '#413F42',
  variables: ['$khaki-3'],
  aliases: ['3'],
  rgbArray: [65, 63, 66]
}, {
  hex: '#949598',
  variables: ['$khaki-4'],
  aliases: ['4'],
  rgbArray: [148, 149, 152]
}, {
  hex: '#EDE3DE',
  variables: ['$khaki-5'],
  aliases: ['5'],
  rgbArray: [237, 227, 222]
}];

var nordScheme = [{
  hex: '#2E3440',
  variables: ['$nord-0', '$nord-polar-night-0', '$nord-black'],
  aliases: ['0', 'polarNight0', 'black'],
  rgbArray: [46, 52, 64]
}, {
  hex: '#3B4252',
  variables: ['$nord-1', '$nord-polar-night-1'],
  aliases: ['1', 'polarNight1'],
  rgbArray: [59, 66, 82]
}, {
  hex: '#434C5E',
  variables: ['$nord-2', '$nord-polar-night-2'],
  aliases: ['2', 'polarNight2'],
  rgbArray: [67, 76, 94]
}, {
  hex: '#4C566A',
  variables: ['$nord-3', '$nord-polar-night-3'],
  aliases: ['3', 'polarNight3'],
  rgbArray: [76, 86, 106]
}, {
  hex: '#D8DEE9',
  variables: ['$nord-4', '$nord-snow-storm-0'],
  aliases: ['4', 'snowStorm0'],
  rgbArray: [216, 222, 233]
}, {
  hex: '#E5E9F0',
  variables: ['$nord-5', '$nord-snow-storm-1'],
  aliases: ['5', 'snowStorm1'],
  rgbArray: [229, 233, 240]
}, {
  hex: '#ECEFF4',
  variables: ['$nord-6', '$nord-snow-storm-2', '$nord-white'],
  aliases: ['6', 'snowStorm2', 'white'],
  rgbArray: [236, 239, 244]
}, {
  hex: '#8FBCBB',
  variables: ['$nord-7', '$nord-frost-0'],
  aliases: ['7', 'frost0'],
  rgbArray: [143, 188, 187]
}, {
  hex: '#88C0D0',
  variables: ['$nord-8', '$nord-frost-1'],
  aliases: ['8', 'frost1'],
  rgbArray: [136, 192, 208]
}, {
  hex: '#81A1C1',
  variables: ['$nord-9', '$nord-frost-2'],
  aliases: ['9', 'frost2'],
  rgbArray: [129, 161, 193]
}, {
  hex: '#5E81AC',
  variables: ['$nord-10', '$nord-frost-3', '$nord-blue'],
  aliases: ['10', 'frost3', 'blue'],
  rgbArray: [94, 129, 172]
}, {
  hex: '#BF616A',
  variables: ['$nord-11', '$nord-aurora-0', '$nord-red'],
  aliases: ['11', 'aurora0', 'red'],
  rgbArray: [191, 97, 106]
}, {
  hex: '#D08770',
  variables: ['$nord-12', '$nord-aurora-1', '$nord-orange'],
  aliases: ['12', 'aurora1', 'orange'],
  rgbArray: [208, 135, 112]
}, {
  hex: '#EBCB8B',
  variables: ['$nord-13', '$nord-aurora-2', '$nord-yellow'],
  aliases: ['13', 'aurora2', 'yellow'],
  rgbArray: [235, 203, 139]
}, {
  hex: '#A3BE8C',
  variables: ['$nord-14', '$nord-aurora-3', '$nord-green'],
  aliases: ['14', 'aurora3', 'green'],
  rgbArray: [163, 190, 140]
}, {
  hex: '#B48EAD',
  variables: ['$nord-15', '$nord-aurora-4', '$nord-purple'],
  aliases: ['15', 'aurora4', 'purple'],
  rgbArray: [180, 142, 173]
}];

var brand = createColorScheme(brandScheme);
var dawn = createColorScheme(dawnScheme);
var khaki = createColorScheme(khakiScheme);
var nord = createColorScheme(nordScheme);

export { brand, dawn, khaki, nord };
