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

var avocadoScheme = [{
  variables: ['$avocado-100', '$green-100'],
  hex: '#c7e9c0',
  aliases: ['100', 'green100'],
  rgbArray: [199, 233, 192]
}, {
  variables: ['$avocado-200', '$green-200'],
  hex: '#a1d99b',
  aliases: ['200', 'green200'],
  rgbArray: [161, 217, 155]
}, {
  variables: ['$avocado-300', '$green-300'],
  hex: '#74c476',
  aliases: ['300', 'green300'],
  rgbArray: [116, 196, 118]
}, {
  variables: ['$avocado-400', '$green-400'],
  hex: '#31a354',
  aliases: ['400', 'green400'],
  rgbArray: [49, 163, 84]
}, {
  variables: ['$avocado-500', '$green-500'],
  hex: '#006d2c',
  aliases: ['500', 'green500'],
  rgbArray: [0, 109, 44]
}];

var blueberryScheme = [{
  variables: ['$blueberry-100', '$blue-100'],
  hex: '#d2e6f3',
  aliases: ['100', 'blue100'],
  rgbArray: [210, 230, 243]
}, {
  variables: ['$blueberry-200', '$blue-200'],
  hex: '#a4cbe7',
  aliases: ['200', 'blue200'],
  rgbArray: [164, 203, 231]
}, {
  variables: ['$blueberry-300', '$blue-300'],
  hex: '#569ed3',
  aliases: ['300', 'blue300'],
  rgbArray: [86, 158, 211]
}, {
  variables: ['$blueberry-400', '$blue-400'],
  hex: '#3182bd',
  aliases: ['400', 'blue400'],
  rgbArray: [49, 130, 189]
}, {
  variables: ['$blueberry-500', '$blue-500'],
  hex: '#08519c',
  aliases: ['500', 'blue500'],
  rgbArray: [8, 81, 156]
}];

var caraCaraMorelScheme = [{
  variables: ['$cara-cara-morel-100'],
  hex: '#efefef',
  aliases: ['100'],
  rgbArray: [239, 239, 239]
}, {
  variables: ['$cara-cara-morel-200'],
  hex: '#fff4cd',
  aliases: ['200'],
  rgbArray: [255, 244, 205]
}, {
  variables: ['$cara-cara-morel-300'],
  hex: '#fdbe85',
  aliases: ['300'],
  rgbArray: [253, 190, 133]
}, {
  variables: ['$cara-cara-morel-400'],
  hex: '#f68e26',
  aliases: ['400'],
  rgbArray: [246, 142, 38]
}, {
  variables: ['$cara-cara-morel-500'],
  hex: '#7d604c',
  aliases: ['500'],
  rgbArray: [125, 96, 76]
}];

var caraCaraScheme = [{
  variables: ['$cara-cara-100', '$orange-100'],
  hex: '#feedde',
  aliases: ['100', 'orange100'],
  rgbArray: [254, 237, 222]
}, {
  variables: ['$cara-cara-200', '$orange-200'],
  hex: '#fdbe85',
  aliases: ['200', 'orange200'],
  rgbArray: [253, 190, 133]
}, {
  variables: ['$cara-cara-300', '$orange-300'],
  hex: '#f68e26',
  aliases: ['300', 'orange300'],
  rgbArray: [246, 142, 38]
}, {
  variables: ['$cara-cara-400', '$orange-400'],
  hex: '#e6550d',
  aliases: ['400', 'orange400'],
  rgbArray: [230, 85, 13]
}, {
  variables: ['$cara-cara-500', '$orange-500'],
  hex: '#a63603',
  aliases: ['500', 'orange500'],
  rgbArray: [166, 54, 3]
}];

var fujiAppleScheme = [{
  variables: ['$fuji-apple-100', '$red-100'],
  hex: '#fee5d9',
  aliases: ['100', 'red100'],
  rgbArray: [254, 229, 217]
}, {
  variables: ['$fuji-apple-200', '$red-200'],
  hex: '#f4a091',
  aliases: ['200', 'red200'],
  rgbArray: [244, 160, 145]
}, {
  variables: ['$fuji-apple-300', '$red-300'],
  hex: '#ee665b',
  aliases: ['300', 'red300'],
  rgbArray: [238, 102, 91]
}, {
  variables: ['$fuji-apple-400', '$red-400'],
  hex: '#de2d26',
  aliases: ['400', 'red400'],
  rgbArray: [222, 45, 38]
}, {
  variables: ['$fuji-apple-500', '$red-500'],
  hex: '#a50f15',
  aliases: ['500', 'red500'],
  rgbArray: [165, 15, 21]
}];

var mangoCaraCaraScheme = [{
  variables: ['$mango-cara-cara-100'],
  hex: '#fff4cd',
  aliases: ['100'],
  rgbArray: [255, 244, 205]
}, {
  variables: ['$mango-cara-cara-200'],
  hex: '#ffd430',
  aliases: ['200'],
  rgbArray: [255, 212, 48]
}, {
  variables: ['$mango-cara-cara-300'],
  hex: '#f68e26',
  aliases: ['300'],
  rgbArray: [246, 142, 38]
}, {
  variables: ['$mango-cara-cara-400'],
  hex: '#e6550d',
  aliases: ['400'],
  rgbArray: [230, 85, 13]
}, {
  variables: ['$mango-cara-cara-500'],
  hex: '#a63603',
  aliases: ['500'],
  rgbArray: [166, 54, 3]
}];

var mangoFujiAppleScheme = [{
  variables: ['$mango-fuji-apple-100'],
  hex: '#fff4cd',
  aliases: ['100'],
  rgbArray: [255, 244, 205]
}, {
  variables: ['$mango-fuji-apple-200'],
  hex: '#ffe47f',
  aliases: ['200'],
  rgbArray: [255, 228, 127]
}, {
  variables: ['$mango-fuji-apple-300'],
  hex: '#ffd430',
  aliases: ['300'],
  rgbArray: [255, 212, 48]
}, {
  variables: ['$mango-fuji-apple-400'],
  hex: '#e6550d',
  aliases: ['400'],
  rgbArray: [230, 85, 13]
}, {
  variables: ['$mango-fuji-apple-500'],
  hex: '#a50f15',
  aliases: ['500'],
  rgbArray: [165, 15, 21]
}];

var mangoMorelScheme = [{
  variables: ['$mango-morel-100'],
  hex: '#fff4cd',
  aliases: ['100'],
  rgbArray: [255, 244, 205]
}, {
  variables: ['$mango-morel-200'],
  hex: '#ffd430',
  aliases: ['200'],
  rgbArray: [255, 212, 48]
}, {
  variables: ['$mango-morel-300'],
  hex: '#f68e26',
  aliases: ['300'],
  rgbArray: [246, 142, 38]
}, {
  variables: ['$mango-morel-400'],
  hex: '#a63603',
  aliases: ['400'],
  rgbArray: [166, 54, 3]
}, {
  variables: ['$mango-morel-500'],
  hex: '#49392e',
  aliases: ['500'],
  rgbArray: [73, 57, 46]
}];

var mangoScheme = [{
  variables: ['$mango-100', '$yellow-100'],
  hex: '#fff4cd',
  aliases: ['100', 'yellow100'],
  rgbArray: [255, 244, 205]
}, {
  variables: ['$mango-200', '$yellow-200'],
  hex: '#ffe47f',
  aliases: ['200', 'yellow200'],
  rgbArray: [255, 228, 127]
}, {
  variables: ['$mango-300', '$yellow-300'],
  hex: '#ffd430',
  aliases: ['300', 'yellow300'],
  rgbArray: [255, 212, 48]
}, {
  variables: ['$mango-400', '$yellow-400'],
  hex: '#f4c100',
  aliases: ['400', 'yellow400'],
  rgbArray: [244, 193, 0]
}, {
  variables: ['$mango-500', '$yellow-500'],
  hex: '#cda200',
  aliases: ['500', 'yellow500'],
  rgbArray: [205, 162, 0]
}];

var mintChocolateSesameScheme = [{
  variables: ['$mint-chocolate-sesame-100'],
  hex: '#fff4cd',
  aliases: ['100'],
  rgbArray: [255, 244, 205]
}, {
  variables: ['$mint-chocolate-sesame-200'],
  hex: '#a8dbd9',
  aliases: ['200'],
  rgbArray: [168, 219, 217]
}, {
  variables: ['$mint-chocolate-sesame-300'],
  hex: '#7ebfc1',
  aliases: ['300'],
  rgbArray: [126, 191, 193]
}, {
  variables: ['$mint-chocolate-sesame-400'],
  hex: '#4f90a6',
  aliases: ['400'],
  rgbArray: [79, 144, 166]
}, {
  variables: ['$mint-chocolate-sesame-500'],
  hex: '#333333',
  aliases: ['500'],
  rgbArray: [51, 51, 51]
}];

var mintChocolateScheme = [{
  variables: ['$mint-chocolate-100', '$teal-100'],
  hex: '#d1eeea',
  aliases: ['100', 'teal100'],
  rgbArray: [209, 238, 234]
}, {
  variables: ['$mint-chocolate-200', '$teal-200'],
  hex: '#a8dbd9',
  aliases: ['200', 'teal200'],
  rgbArray: [168, 219, 217]
}, {
  variables: ['$mint-chocolate-300', '$teal-300'],
  hex: '#7ebfc1',
  aliases: ['300', 'teal300'],
  rgbArray: [126, 191, 193]
}, {
  variables: ['$mint-chocolate-400', '$teal-400'],
  hex: '#4f90a6',
  aliases: ['400', 'teal400'],
  rgbArray: [79, 144, 166]
}, {
  variables: ['$mint-chocolate-500', '$teal-500'],
  hex: '#2c6075',
  aliases: ['500', 'teal500'],
  rgbArray: [44, 96, 117]
}];

var morelScheme = [{
  variables: ['$morel-100', '$brown-100'],
  hex: '#d8d0cc',
  aliases: ['100', 'brown100'],
  rgbArray: [216, 208, 204]
}, {
  variables: ['$morel-200', '$brown-200'],
  hex: '#b6a89f',
  aliases: ['200', 'brown200'],
  rgbArray: [182, 168, 159]
}, {
  variables: ['$morel-300', '$brown-300'],
  hex: '#948072',
  aliases: ['300', 'brown300'],
  rgbArray: [148, 128, 114]
}, {
  variables: ['$morel-400', '$brown-400'],
  hex: '#7d604c',
  aliases: ['400', 'brown400'],
  rgbArray: [125, 96, 76]
}, {
  variables: ['$morel-500', '$brown-500'],
  hex: '#49392e',
  aliases: ['500', 'brown500'],
  rgbArray: [73, 57, 46]
}];

var morningGloryBlueberryScheme = [{
  variables: ['$morning-glory-blueberry-100'],
  hex: '#c3ecff',
  aliases: ['100'],
  rgbArray: [195, 236, 255]
}, {
  variables: ['$morning-glory-blueberry-200'],
  hex: '#89daff',
  aliases: ['200'],
  rgbArray: [137, 218, 255]
}, {
  variables: ['$morning-glory-blueberry-300'],
  hex: '#4ec7ff',
  aliases: ['300'],
  rgbArray: [78, 199, 255]
}, {
  variables: ['$morning-glory-blueberry-400'],
  hex: '#00a1eb',
  aliases: ['400'],
  rgbArray: [0, 161, 235]
}, {
  variables: ['$morning-glory-blueberry-500'],
  hex: '#08519c',
  aliases: ['500'],
  rgbArray: [8, 81, 156]
}];

var morningGloryScheme = [{
  variables: ['$morning-glory-100', '$cyan-100'],
  hex: '#c3ecff',
  aliases: ['100', 'cyan100'],
  rgbArray: [195, 236, 255]
}, {
  variables: ['$morning-glory-200', '$cyan-200'],
  hex: '#89daff',
  aliases: ['200', 'cyan200'],
  rgbArray: [137, 218, 255]
}, {
  variables: ['$morning-glory-300', '$cyan-300'],
  hex: '#4ec7ff',
  aliases: ['300', 'cyan300'],
  rgbArray: [78, 199, 255]
}, {
  variables: ['$morning-glory-400', '$cyan-400'],
  hex: '#00a1eb',
  aliases: ['400', 'cyan400'],
  rgbArray: [0, 161, 235]
}, {
  variables: ['$morning-glory-500', '$cyan-500'],
  hex: '#0079b0',
  aliases: ['500', 'cyan500'],
  rgbArray: [0, 121, 176]
}];

var pistachioScheme = [{
  variables: ['$pistachio-100'],
  hex: '#d6e8be',
  aliases: ['100'],
  rgbArray: [214, 232, 190]
}, {
  variables: ['$pistachio-200'],
  hex: '#bad992',
  aliases: ['200'],
  rgbArray: [186, 217, 146]
}, {
  variables: ['$pistachio-300'],
  hex: '#9eca66',
  aliases: ['300'],
  rgbArray: [158, 202, 102]
}, {
  variables: ['$pistachio-400'],
  hex: '#6c9936',
  aliases: ['400'],
  rgbArray: [108, 153, 54]
}, {
  variables: ['$pistachio-500'],
  hex: '#4e6e26',
  aliases: ['500'],
  rgbArray: [78, 110, 38]
}];

var plumScheme = [{
  variables: ['$plum-100', '$purple-100'],
  hex: '#dadaeb',
  aliases: ['100', 'purple100'],
  rgbArray: [218, 218, 235]
}, {
  variables: ['$plum-200', '$purple-200'],
  hex: '#c1b6db',
  aliases: ['200', 'purple200'],
  rgbArray: [193, 182, 219]
}, {
  variables: ['$plum-300', '$purple-300'],
  hex: '#9582c1',
  aliases: ['300', 'purple300'],
  rgbArray: [149, 130, 193]
}, {
  variables: ['$plum-400', '$purple-400'],
  hex: '#6a51a3',
  aliases: ['400', 'purple400'],
  rgbArray: [106, 81, 163]
}, {
  variables: ['$plum-500', '$purple-500'],
  hex: '#54278f',
  aliases: ['500', 'purple500'],
  rgbArray: [84, 39, 143]
}];

var sesameScheme = [{
  variables: ['$sesame-100', '$gray-100'],
  hex: '#efefef',
  aliases: ['100', 'gray100'],
  rgbArray: [239, 239, 239]
}, {
  variables: ['$sesame-200', '$gray-200'],
  hex: '#cccccc',
  aliases: ['200', 'gray200'],
  rgbArray: [204, 204, 204]
}, {
  variables: ['$sesame-300', '$gray-300'],
  hex: '#999999',
  aliases: ['300', 'gray300'],
  rgbArray: [153, 153, 153]
}, {
  variables: ['$sesame-400', '$gray-400'],
  hex: '#666666',
  aliases: ['400', 'gray400'],
  rgbArray: [102, 102, 102]
}, {
  variables: ['$sesame-500', '$gray-500'],
  hex: '#333333',
  aliases: ['500', 'gray500'],
  rgbArray: [51, 51, 51]
}];

var avocado = createColorScheme(avocadoScheme);
var blueberry = createColorScheme(blueberryScheme);
var caraCaraMorel = createColorScheme(caraCaraMorelScheme);
var caraCara = createColorScheme(caraCaraScheme);
var fujiApple = createColorScheme(fujiAppleScheme);
var mangoCaraCara = createColorScheme(mangoCaraCaraScheme);
var mangoFujiApple = createColorScheme(mangoFujiAppleScheme);
var mangoMorel = createColorScheme(mangoMorelScheme);
var mango = createColorScheme(mangoScheme);
var mintChocolateSesame = createColorScheme(mintChocolateSesameScheme);
var mintChocolate = createColorScheme(mintChocolateScheme);
var morel = createColorScheme(morelScheme);
var morningGloryBlueberry = createColorScheme(morningGloryBlueberryScheme);
var morningGlory = createColorScheme(morningGloryScheme);
var pistachio = createColorScheme(pistachioScheme);
var plum = createColorScheme(plumScheme);
var sesame = createColorScheme(sesameScheme);

export { avocado, blueberry, caraCara, caraCaraMorel, fujiApple, mango, mangoCaraCara, mangoFujiApple, mangoMorel, mintChocolate, mintChocolateSesame, morel, morningGlory, morningGloryBlueberry, pistachio, plum, sesame };
