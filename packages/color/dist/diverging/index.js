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

var avocadoPlumScheme = [{
  hex: '#006d2c',
  variables: ['$avocado-plum-avocado-500'],
  aliases: ['avocado500'],
  rgbArray: [0, 109, 44]
}, {
  hex: '#31a354',
  variables: ['$avocado-plum-avocado-400'],
  aliases: ['avocado400'],
  rgbArray: [49, 163, 84]
}, {
  hex: '#74c476',
  variables: ['$avocado-plum-avocado-300'],
  aliases: ['avocado300'],
  rgbArray: [116, 196, 118]
}, {
  hex: '#a1d99b',
  variables: ['$avocado-plum-avocado-200'],
  aliases: ['avocado200'],
  rgbArray: [161, 217, 155]
}, {
  hex: '#c7e9c0',
  variables: ['$avocado-plum-avocado-100'],
  aliases: ['avocado100'],
  rgbArray: [199, 233, 192]
}, {
  hex: '#dadaeb',
  variables: ['$avocado-plum-plum-100'],
  aliases: ['plum100'],
  rgbArray: [218, 218, 235]
}, {
  hex: '#c1b6db',
  variables: ['$avocado-plum-plum-200'],
  aliases: ['plum200'],
  rgbArray: [193, 182, 219]
}, {
  hex: '#9582c1',
  variables: ['$avocado-plum-plum-300'],
  aliases: ['plum300'],
  rgbArray: [149, 130, 193]
}, {
  hex: '#6a51a3',
  variables: ['$avocado-plum-plum-400'],
  aliases: ['plum400'],
  rgbArray: [106, 81, 163]
}, {
  hex: '#54278f',
  variables: ['$avocado-plum-plum-500'],
  aliases: ['plum500'],
  rgbArray: [84, 39, 143]
}];

var blueberryFujiAppleScheme = [{
  hex: '#08519c',
  variables: ['$blueberry-fuji-apple-blueberry-500'],
  aliases: ['blueberry500'],
  rgbArray: [8, 81, 156]
}, {
  hex: '#3182bd',
  variables: ['$blueberry-fuji-apple-blueberry-400'],
  aliases: ['blueberry400'],
  rgbArray: [49, 130, 189]
}, {
  hex: '#569ed3',
  variables: ['$blueberry-fuji-apple-blueberry-300'],
  aliases: ['blueberry300'],
  rgbArray: [86, 158, 211]
}, {
  hex: '#a4cbe7',
  variables: ['$blueberry-fuji-apple-blueberry-200'],
  aliases: ['blueberry200'],
  rgbArray: [164, 203, 231]
}, {
  hex: '#d2e6f3',
  variables: ['$blueberry-fuji-apple-blueberry-100'],
  aliases: ['blueberry100'],
  rgbArray: [210, 230, 243]
}, {
  hex: '#fee5d9',
  variables: ['$blueberry-fuji-apple-fuji-apple-100'],
  aliases: ['fujiApple100'],
  rgbArray: [254, 229, 217]
}, {
  hex: '#f4a091',
  variables: ['$blueberry-fuji-apple-fuji-apple-200'],
  aliases: ['fujiApple200'],
  rgbArray: [244, 160, 145]
}, {
  hex: '#ee665b',
  variables: ['$blueberry-fuji-apple-fuji-apple-300'],
  aliases: ['fujiApple300'],
  rgbArray: [238, 102, 91]
}, {
  hex: '#de2d26',
  variables: ['$blueberry-fuji-apple-fuji-apple-400'],
  aliases: ['fujiApple400'],
  rgbArray: [222, 45, 38]
}, {
  hex: '#a50f15',
  variables: ['$blueberry-fuji-apple-fuji-apple-500'],
  aliases: ['fujiApple500'],
  rgbArray: [165, 15, 21]
}];

var caraCaraPlumScheme = [{
  hex: '#a63603',
  variables: ['$cara-cara-plum-cara-cara-500'],
  aliases: ['caraCara500'],
  rgbArray: [166, 54, 3]
}, {
  hex: '#e6550d',
  variables: ['$cara-cara-plum-cara-cara-400'],
  aliases: ['caraCara400'],
  rgbArray: [230, 85, 13]
}, {
  hex: '#f68e26',
  variables: ['$cara-cara-plum-cara-cara-300'],
  aliases: ['caraCara300'],
  rgbArray: [246, 142, 38]
}, {
  hex: '#fdbe85',
  variables: ['$cara-cara-plum-cara-cara-200'],
  aliases: ['caraCara200'],
  rgbArray: [253, 190, 133]
}, {
  hex: '#feedde',
  variables: ['$cara-cara-plum-cara-cara-100'],
  aliases: ['caraCara100'],
  rgbArray: [254, 237, 222]
}, {
  hex: '#dadaeb',
  variables: ['$cara-cara-plum-plum-100'],
  aliases: ['plum100'],
  rgbArray: [218, 218, 235]
}, {
  hex: '#c1b6db',
  variables: ['$cara-cara-plum-plum-200'],
  aliases: ['plum200'],
  rgbArray: [193, 182, 219]
}, {
  hex: '#9582c1',
  variables: ['$cara-cara-plum-plum-300'],
  aliases: ['plum300'],
  rgbArray: [149, 130, 193]
}, {
  hex: '#6a51a3',
  variables: ['$cara-cara-plum-plum-400'],
  aliases: ['plum400'],
  rgbArray: [106, 81, 163]
}, {
  hex: '#54278f',
  variables: ['$cara-cara-plum-plum-500'],
  aliases: ['plum500'],
  rgbArray: [84, 39, 143]
}];

var mintChocolateCaraCaraScheme = [{
  hex: '#2c6075',
  variables: ['$mint-chocolate-cara-cara-mint-chocolate-500'],
  aliases: ['mintChocolate500'],
  rgbArray: [44, 96, 117]
}, {
  hex: '#4f90a6',
  variables: ['$mint-chocolate-cara-cara-mint-chocolate-400'],
  aliases: ['mintChocolate400'],
  rgbArray: [79, 144, 166]
}, {
  hex: '#7ebfc1',
  variables: ['$mint-chocolate-cara-cara-mint-chocolate-300'],
  aliases: ['mintChocolate300'],
  rgbArray: [126, 191, 193]
}, {
  hex: '#a8dbd9',
  variables: ['$mint-chocolate-cara-cara-mint-chocolate-200'],
  aliases: ['mintChocolate200'],
  rgbArray: [168, 219, 217]
}, {
  hex: '#d1eeea',
  variables: ['$mint-chocolate-cara-cara-mint-chocolate-100'],
  aliases: ['mintChocolate100'],
  rgbArray: [209, 238, 234]
}, {
  hex: '#feedde',
  variables: ['$mint-chocolate-cara-cara-cara-cara-100'],
  aliases: ['caraCara100'],
  rgbArray: [254, 237, 222]
}, {
  hex: '#fdbe85',
  variables: ['$mint-chocolate-cara-cara-cara-cara-200'],
  aliases: ['caraCara200'],
  rgbArray: [253, 190, 133]
}, {
  hex: '#f68e26',
  variables: ['$mint-chocolate-cara-cara-cara-cara-300'],
  aliases: ['caraCara300'],
  rgbArray: [246, 142, 38]
}, {
  hex: '#e6550d',
  variables: ['$mint-chocolate-cara-cara-cara-cara-400'],
  aliases: ['caraCara400'],
  rgbArray: [230, 85, 13]
}, {
  hex: '#a63603',
  variables: ['$mint-chocolate-cara-cara-cara-cara-500'],
  aliases: ['caraCara500'],
  rgbArray: [166, 54, 3]
}];

var mintChocolateMangoScheme = [{
  hex: '#2c6075',
  variables: ['$mint-chocolate-mango-mint-chocolate-500'],
  aliases: ['mintChocolate500'],
  rgbArray: [44, 96, 117]
}, {
  hex: '#4f90a6',
  variables: ['$mint-chocolate-mango-mint-chocolate-400'],
  aliases: ['mintChocolate400'],
  rgbArray: [79, 144, 166]
}, {
  hex: '#7ebfc1',
  variables: ['$mint-chocolate-mango-mint-chocolate-300'],
  aliases: ['mintChocolate300'],
  rgbArray: [126, 191, 193]
}, {
  hex: '#a8dbd9',
  variables: ['$mint-chocolate-mango-mint-chocolate-200'],
  aliases: ['mintChocolate200'],
  rgbArray: [168, 219, 217]
}, {
  hex: '#d1eeea',
  variables: ['$mint-chocolate-mango-mint-chocolate-100'],
  aliases: ['mintChocolate100'],
  rgbArray: [209, 238, 234]
}, {
  hex: '#fff4cd',
  variables: ['$mint-chocolate-mango-mango-100'],
  aliases: ['mango100'],
  rgbArray: [255, 244, 205]
}, {
  hex: '#ffe47f',
  variables: ['$mint-chocolate-mango-mango-200'],
  aliases: ['mango200'],
  rgbArray: [255, 228, 127]
}, {
  hex: '#ffd430',
  variables: ['$mint-chocolate-mango-mango-300'],
  aliases: ['mango300'],
  rgbArray: [255, 212, 48]
}, {
  hex: '#f4c100',
  variables: ['$mint-chocolate-mango-mango-400'],
  aliases: ['mango400'],
  rgbArray: [244, 193, 0]
}, {
  hex: '#cda200',
  variables: ['$mint-chocolate-mango-mango-500'],
  aliases: ['mango500'],
  rgbArray: [205, 162, 0]
}];

var avocadoPlum = createColorScheme(avocadoPlumScheme);
var blueberryFujiApple = createColorScheme(blueberryFujiAppleScheme);
var caraCaraPlum = createColorScheme(caraCaraPlumScheme);
var mintChocolateCaraCara = createColorScheme(mintChocolateCaraCaraScheme);
var mintChocolateMango = createColorScheme(mintChocolateMangoScheme);

export { avocadoPlum, blueberryFujiApple, caraCaraPlum, mintChocolateCaraCara, mintChocolateMango };
