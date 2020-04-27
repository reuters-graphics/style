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

var blueScheme = [{
  variables: ['$blue-100'],
  hex: '#C8DAF0',
  aliases: ['100'],
  rgbArray: [200, 218, 240]
}, {
  variables: ['$blue-200'],
  hex: '#ABC8E8',
  aliases: ['200'],
  rgbArray: [171, 200, 232]
}, {
  variables: ['$blue-300'],
  hex: '#7AADDC',
  aliases: ['300'],
  rgbArray: [122, 173, 220]
}, {
  variables: ['$blue-400'],
  hex: '#1F8FCE',
  aliases: ['400'],
  rgbArray: [31, 143, 206]
}, {
  variables: ['$blue-500'],
  hex: '#1B78AC',
  aliases: ['500'],
  rgbArray: [27, 120, 172]
}, {
  variables: ['$blue-600'],
  hex: '#044F74',
  aliases: ['600'],
  rgbArray: [4, 79, 116]
}];

var brewerBlueScheme = [{
  variables: ['$brewer-blue-100'],
  hex: '#f7fbff',
  aliases: ['100'],
  rgbArray: [247, 251, 255]
}, {
  variables: ['$brewer-blue-200'],
  hex: '#deebf7',
  aliases: ['200'],
  rgbArray: [222, 235, 247]
}, {
  variables: ['$brewer-blue-300'],
  hex: '#c6dbef',
  aliases: ['300'],
  rgbArray: [198, 219, 239]
}, {
  variables: ['$brewer-blue-400'],
  hex: '#9ecae1',
  aliases: ['400'],
  rgbArray: [158, 202, 225]
}, {
  variables: ['$brewer-blue-500'],
  hex: '#6baed6',
  aliases: ['500'],
  rgbArray: [107, 174, 214]
}, {
  variables: ['$brewer-blue-600'],
  hex: '#4292c6',
  aliases: ['600'],
  rgbArray: [66, 146, 198]
}, {
  variables: ['$brewer-blue-700'],
  hex: '#2171b5',
  aliases: ['700'],
  rgbArray: [33, 113, 181]
}, {
  variables: ['$brewer-blue-800'],
  hex: '#08519c',
  aliases: ['800'],
  rgbArray: [8, 81, 156]
}, {
  variables: ['$brewer-blue-900'],
  hex: '#08306b',
  aliases: ['900'],
  rgbArray: [8, 48, 107]
}];

var brewerGreenScheme = [{
  variables: ['$brewer-green-100'],
  hex: '#f7fcf5',
  aliases: ['100'],
  rgbArray: [247, 252, 245]
}, {
  variables: ['$brewer-green-200'],
  hex: '#e5f5e0',
  aliases: ['200'],
  rgbArray: [229, 245, 224]
}, {
  variables: ['$brewer-green-300'],
  hex: '#c7e9c0',
  aliases: ['300'],
  rgbArray: [199, 233, 192]
}, {
  variables: ['$brewer-green-400'],
  hex: '#a1d99b',
  aliases: ['400'],
  rgbArray: [161, 217, 155]
}, {
  variables: ['$brewer-green-500'],
  hex: '#74c476',
  aliases: ['500'],
  rgbArray: [116, 196, 118]
}, {
  variables: ['$brewer-green-600'],
  hex: '#41ab5d',
  aliases: ['600'],
  rgbArray: [65, 171, 93]
}, {
  variables: ['$brewer-green-700'],
  hex: '#238b45',
  aliases: ['700'],
  rgbArray: [35, 139, 69]
}, {
  variables: ['$brewer-green-800'],
  hex: '#006d2c',
  aliases: ['800'],
  rgbArray: [0, 109, 44]
}, {
  variables: ['$brewer-green-900'],
  hex: '#00441b',
  aliases: ['900'],
  rgbArray: [0, 68, 27]
}];

var brewerPurpleScheme = [{
  variables: ['$brewer-purple-100'],
  hex: '#fcfbfd',
  aliases: ['100'],
  rgbArray: [252, 251, 253]
}, {
  variables: ['$brewer-purple-200'],
  hex: '#efedf5',
  aliases: ['200'],
  rgbArray: [239, 237, 245]
}, {
  variables: ['$brewer-purple-300'],
  hex: '#dadaeb',
  aliases: ['300'],
  rgbArray: [218, 218, 235]
}, {
  variables: ['$brewer-purple-400'],
  hex: '#bcbddc',
  aliases: ['400'],
  rgbArray: [188, 189, 220]
}, {
  variables: ['$brewer-purple-500'],
  hex: '#9e9ac8',
  aliases: ['500'],
  rgbArray: [158, 154, 200]
}, {
  variables: ['$brewer-purple-600'],
  hex: '#807dba',
  aliases: ['600'],
  rgbArray: [128, 125, 186]
}, {
  variables: ['$brewer-purple-700'],
  hex: '#6a51a3',
  aliases: ['700'],
  rgbArray: [106, 81, 163]
}, {
  variables: ['$brewer-purple-800'],
  hex: '#54278f',
  aliases: ['800'],
  rgbArray: [84, 39, 143]
}, {
  variables: ['$brewer-purple-900'],
  hex: '#3f007d',
  aliases: ['900'],
  rgbArray: [63, 0, 125]
}];

var brewerRedScheme = [{
  variables: ['$brewer-red-100'],
  hex: '#fff5f0',
  aliases: ['100'],
  rgbArray: [255, 245, 240]
}, {
  variables: ['$brewer-red-200'],
  hex: '#fee0d2',
  aliases: ['200'],
  rgbArray: [254, 224, 210]
}, {
  variables: ['$brewer-red-300'],
  hex: '#fcbba1',
  aliases: ['300'],
  rgbArray: [252, 187, 161]
}, {
  variables: ['$brewer-red-400'],
  hex: '#fc9272',
  aliases: ['400'],
  rgbArray: [252, 146, 114]
}, {
  variables: ['$brewer-red-500'],
  hex: '#fb6a4a',
  aliases: ['500'],
  rgbArray: [251, 106, 74]
}, {
  variables: ['$brewer-red-600'],
  hex: '#ef3b2c',
  aliases: ['600'],
  rgbArray: [239, 59, 44]
}, {
  variables: ['$brewer-red-700'],
  hex: '#cb181d',
  aliases: ['700'],
  rgbArray: [203, 24, 29]
}, {
  variables: ['$brewer-red-800'],
  hex: '#a50f15',
  aliases: ['800'],
  rgbArray: [165, 15, 21]
}, {
  variables: ['$brewer-red-900'],
  hex: '#67000d',
  aliases: ['900'],
  rgbArray: [103, 0, 13]
}];

var brewerWarmRedScheme = [{
  variables: ['$brewer-warm-red-100'],
  hex: '#fff5eb',
  aliases: ['100'],
  rgbArray: [255, 245, 235]
}, {
  variables: ['$brewer-warm-red-200'],
  hex: '#fee6ce',
  aliases: ['200'],
  rgbArray: [254, 230, 206]
}, {
  variables: ['$brewer-warm-red-300'],
  hex: '#fdd0a2',
  aliases: ['300'],
  rgbArray: [253, 208, 162]
}, {
  variables: ['$brewer-warm-red-400'],
  hex: '#fdae6b',
  aliases: ['400'],
  rgbArray: [253, 174, 107]
}, {
  variables: ['$brewer-warm-red-500'],
  hex: '#fd8d3c',
  aliases: ['500'],
  rgbArray: [253, 141, 60]
}, {
  variables: ['$brewer-warm-red-600'],
  hex: '#f16913',
  aliases: ['600'],
  rgbArray: [241, 105, 19]
}, {
  variables: ['$brewer-warm-red-700'],
  hex: '#d94801',
  aliases: ['700'],
  rgbArray: [217, 72, 1]
}, {
  variables: ['$brewer-warm-red-800'],
  hex: '#a63603',
  aliases: ['800'],
  rgbArray: [166, 54, 3]
}, {
  variables: ['$brewer-warm-red-900'],
  hex: '#7f2704',
  aliases: ['900'],
  rgbArray: [127, 39, 4]
}];

var cyanScheme = [{
  variables: ['$cyan-100'],
  hex: '#CFE8F9',
  aliases: ['100'],
  rgbArray: [207, 232, 249]
}, {
  variables: ['$cyan-200'],
  hex: '#B5DDF6',
  aliases: ['200'],
  rgbArray: [181, 221, 246]
}, {
  variables: ['$cyan-300'],
  hex: '#86CCF1',
  aliases: ['300'],
  rgbArray: [134, 204, 241]
}, {
  variables: ['$cyan-400'],
  hex: '#2AB8EB',
  aliases: ['400'],
  rgbArray: [42, 184, 235]
}, {
  variables: ['$cyan-500'],
  hex: '#259AC5',
  aliases: ['500'],
  rgbArray: [37, 154, 197]
}, {
  variables: ['$cyan-600'],
  hex: '#0C6785',
  aliases: ['600'],
  rgbArray: [12, 103, 133]
}];

var grayScheme = [{
  variables: ['$gray-100'],
  hex: '#F0F1F1',
  aliases: ['100'],
  rgbArray: [240, 241, 241]
}, {
  variables: ['$gray-200'],
  hex: '#E6E7E8',
  aliases: ['200'],
  rgbArray: [230, 231, 232]
}, {
  variables: ['$gray-300'],
  hex: '#A7A9AC',
  aliases: ['300'],
  rgbArray: [167, 169, 172]
}, {
  variables: ['$gray-400'],
  hex: '#999',
  aliases: ['400'],
  rgbArray: [153, 153, 153]
}, {
  variables: ['$gray-500'],
  hex: '#76787A',
  aliases: ['500'],
  rgbArray: [118, 120, 122]
}, {
  variables: ['$gray-600'],
  hex: '#404041',
  aliases: ['600'],
  rgbArray: [64, 64, 65]
}];

var greenScheme = [{
  variables: ['$green-100'],
  hex: '#CBE1C8',
  aliases: ['100'],
  rgbArray: [203, 225, 200]
}, {
  variables: ['$green-200'],
  hex: '#AED3AB',
  aliases: ['200'],
  rgbArray: [174, 211, 171]
}, {
  variables: ['$green-300'],
  hex: '#7DBE80',
  aliases: ['300'],
  rgbArray: [125, 190, 128]
}, {
  variables: ['$green-400'],
  hex: '#0AA74B',
  aliases: ['400'],
  rgbArray: [10, 167, 75]
}, {
  variables: ['$green-500'],
  hex: '#008C3E',
  aliases: ['500'],
  rgbArray: [0, 140, 62]
}, {
  variables: ['$green-600'],
  hex: '#005E25',
  aliases: ['600'],
  rgbArray: [0, 94, 37]
}];

var magentaScheme = [{
  variables: ['$magenta-100'],
  hex: '#F4CCDC',
  aliases: ['100'],
  rgbArray: [244, 204, 220]
}, {
  variables: ['$magenta-200'],
  hex: '#E575A6',
  aliases: ['200'],
  rgbArray: [229, 117, 166]
}, {
  variables: ['$magenta-300'],
  hex: '#DF338A',
  aliases: ['300'],
  rgbArray: [223, 51, 138]
}, {
  variables: ['$magenta-400'],
  hex: '#9C1B61',
  aliases: ['400'],
  rgbArray: [156, 27, 97]
}, {
  variables: ['$magenta-500'],
  hex: '#740245',
  aliases: ['500'],
  rgbArray: [116, 2, 69]
}, {
  variables: ['$magenta-600'],
  hex: '#65002C',
  aliases: ['600'],
  rgbArray: [101, 0, 44]
}];

var navyScheme = [{
  variables: ['$navy-100'],
  hex: '#BCC2E0',
  aliases: ['100'],
  rgbArray: [188, 194, 224]
}, {
  variables: ['$navy-200'],
  hex: '#9BA4CF',
  aliases: ['200'],
  rgbArray: [155, 164, 207]
}, {
  variables: ['$navy-300'],
  hex: '#697CB8',
  aliases: ['300'],
  rgbArray: [105, 124, 184]
}, {
  variables: ['$navy-400'],
  hex: '#0F519F',
  aliases: ['400'],
  rgbArray: [15, 81, 159]
}, {
  variables: ['$navy-500'],
  hex: '#0A4286',
  aliases: ['500'],
  rgbArray: [10, 66, 134]
}, {
  variables: ['$navy-600'],
  hex: '#002459',
  aliases: ['600'],
  rgbArray: [0, 36, 89]
}];

var orangeScheme = [{
  variables: ['$orange-100'],
  hex: '#FDD5BB',
  aliases: ['100'],
  rgbArray: [253, 213, 187]
}, {
  variables: ['$orange-200'],
  hex: '#FBBE99',
  aliases: ['200'],
  rgbArray: [251, 190, 153]
}, {
  variables: ['$orange-300'],
  hex: '#F79967',
  aliases: ['300'],
  rgbArray: [247, 153, 103]
}, {
  variables: ['$orange-400'],
  hex: '#F26725',
  aliases: ['400'],
  rgbArray: [242, 103, 37]
}, {
  variables: ['$orange-500'],
  hex: '#C8551D',
  aliases: ['500'],
  rgbArray: [200, 85, 29]
}, {
  variables: ['$orange-600'],
  hex: '#843401',
  aliases: ['600'],
  rgbArray: [132, 52, 1]
}];

var purpleScheme = [{
  variables: ['$purple-100'],
  hex: '#CABDDC',
  aliases: ['100'],
  rgbArray: [202, 189, 220]
}, {
  variables: ['$purple-200'],
  hex: '#B19CC9',
  aliases: ['200'],
  rgbArray: [177, 156, 201]
}, {
  variables: ['$purple-300'],
  hex: '#8D6EAE',
  aliases: ['300'],
  rgbArray: [141, 110, 174]
}, {
  variables: ['$purple-400'],
  hex: '#653290',
  aliases: ['400'],
  rgbArray: [101, 50, 144]
}, {
  variables: ['$purple-500'],
  hex: '#552479',
  aliases: ['500'],
  rgbArray: [85, 36, 121]
}, {
  variables: ['$purple-600'],
  hex: '#360451',
  aliases: ['600'],
  rgbArray: [54, 4, 81]
}];

var redScheme = [{
  variables: ['$red-100'],
  hex: '#FBC9BA',
  aliases: ['100'],
  rgbArray: [251, 201, 186]
}, {
  variables: ['$red-200'],
  hex: '#F8AB98',
  aliases: ['200'],
  rgbArray: [248, 171, 152]
}, {
  variables: ['$red-300'],
  hex: '#F37B68',
  aliases: ['300'],
  rgbArray: [243, 123, 104]
}, {
  variables: ['$red-400'],
  hex: '#EC2033',
  aliases: ['400'],
  rgbArray: [236, 32, 51]
}, {
  variables: ['$red-500'],
  hex: '#C31729',
  aliases: ['500'],
  rgbArray: [195, 23, 41]
}, {
  variables: ['$red-600'],
  hex: '#82000D',
  aliases: ['600'],
  rgbArray: [130, 0, 13]
}];

var tangerineScheme = [{
  variables: ['$tangerine-100'],
  hex: '#FFECC6',
  aliases: ['100'],
  rgbArray: [255, 236, 198]
}, {
  variables: ['$tangerine-200'],
  hex: '#FFE3A7',
  aliases: ['200'],
  rgbArray: [255, 227, 167]
}, {
  variables: ['$tangerine-300'],
  hex: '#FFD576',
  aliases: ['300'],
  rgbArray: [255, 213, 118]
}, {
  variables: ['$tangerine-400'],
  hex: '#FDC218',
  aliases: ['400'],
  rgbArray: [253, 194, 24]
}, {
  variables: ['$tangerine-500'],
  hex: '#D0A115',
  aliases: ['500'],
  rgbArray: [208, 161, 21]
}, {
  variables: ['$tangerine-600'],
  hex: '#886A00',
  aliases: ['600'],
  rgbArray: [136, 106, 0]
}];

var yellowScheme = [{
  variables: ['$yellow-100'],
  hex: '#FCF8CD',
  aliases: ['100'],
  rgbArray: [252, 248, 205]
}, {
  variables: ['$yellow-200'],
  hex: '#FBF5B0',
  aliases: ['200'],
  rgbArray: [251, 245, 176]
}, {
  variables: ['$yellow-300'],
  hex: '#F9F17E',
  aliases: ['300'],
  rgbArray: [249, 241, 126]
}, {
  variables: ['$yellow-400'],
  hex: '#F6EB0E',
  aliases: ['400'],
  rgbArray: [246, 235, 14]
}, {
  variables: ['$yellow-500'],
  hex: '#CAC313',
  aliases: ['500'],
  rgbArray: [202, 195, 19]
}, {
  variables: ['$yellow-600'],
  hex: '#838103',
  aliases: ['600'],
  rgbArray: [131, 129, 3]
}];

var blue = createColorScheme(blueScheme);
var brewerBlue = createColorScheme(brewerBlueScheme);
var brewerGreen = createColorScheme(brewerGreenScheme);
var brewerPurple = createColorScheme(brewerPurpleScheme);
var brewerRed = createColorScheme(brewerRedScheme);
var brewerWarmRed = createColorScheme(brewerWarmRedScheme);
var cyan = createColorScheme(cyanScheme);
var gray = createColorScheme(grayScheme);
var green = createColorScheme(greenScheme);
var magenta = createColorScheme(magentaScheme);
var navy = createColorScheme(navyScheme);
var orange = createColorScheme(orangeScheme);
var purple = createColorScheme(purpleScheme);
var red = createColorScheme(redScheme);
var tangerine = createColorScheme(tangerineScheme);
var yellow = createColorScheme(yellowScheme);

export { blue, brewerBlue, brewerGreen, brewerPurple, brewerRed, brewerWarmRed, cyan, gray, green, magenta, navy, orange, purple, red, tangerine, yellow };
