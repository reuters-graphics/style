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

var baseLiteScheme = [{
  hex: '#333333',
  variables: ['$black-lite'],
  aliases: ['blackLite'],
  rgbArray: [51, 51, 51]
}, {
  hex: '#cccccc',
  variables: ['$gray-lite'],
  aliases: ['grayLite'],
  rgbArray: [204, 204, 204]
}, {
  hex: '#f9f9f9',
  variables: ['$white-lite'],
  aliases: ['whiteLite'],
  rgbArray: [249, 249, 249]
}, {
  hex: '#948072',
  variables: ['$brown-lite'],
  aliases: ['brownLite'],
  rgbArray: [148, 128, 114]
}, {
  hex: '#ffd430',
  variables: ['$yellow-lite'],
  aliases: ['yellowLite'],
  rgbArray: [255, 212, 48]
}, {
  hex: '#f68e26',
  variables: ['$orange-lite'],
  aliases: ['orangeLite'],
  rgbArray: [246, 142, 38]
}, {
  hex: '#ee665b',
  variables: ['$red-lite'],
  aliases: ['redLite'],
  rgbArray: [238, 102, 91]
}, {
  hex: '#74c476',
  variables: ['$green-lite'],
  aliases: ['greenLite'],
  rgbArray: [116, 196, 118]
}, {
  hex: '#569ed3',
  variables: ['$blue-lite'],
  aliases: ['blueLite'],
  rgbArray: [86, 158, 211]
}, {
  hex: '#4ec7ff',
  variables: ['$cyan-lite'],
  aliases: ['cyanLite'],
  rgbArray: [78, 199, 255]
}, {
  hex: '#9582c1',
  variables: ['$purple-lite'],
  aliases: ['purpleLite'],
  rgbArray: [149, 130, 193]
}];

var baseScheme = [{
  hex: '#000000',
  variables: ['$black'],
  aliases: ['black'],
  rgbArray: [0, 0, 0]
}, {
  hex: '#666666',
  variables: ['$gray'],
  aliases: ['gray'],
  rgbArray: [102, 102, 102]
}, {
  hex: '#ffffff',
  variables: ['$white'],
  aliases: ['white'],
  rgbArray: [255, 255, 255]
}, {
  hex: '#7d604c',
  variables: ['$brown'],
  aliases: ['brown'],
  rgbArray: [125, 96, 76]
}, {
  hex: '#f4c100',
  variables: ['$yellow'],
  aliases: ['yellow'],
  rgbArray: [244, 193, 0]
}, {
  hex: '#e6550d',
  variables: ['$orange'],
  aliases: ['orange'],
  rgbArray: [230, 85, 13]
}, {
  hex: '#de2d26',
  variables: ['$red'],
  aliases: ['red'],
  rgbArray: [222, 45, 38]
}, {
  hex: '#31a354',
  variables: ['$green'],
  aliases: ['green'],
  rgbArray: [49, 163, 84]
}, {
  hex: '#3182bd',
  variables: ['$blue'],
  aliases: ['blue'],
  rgbArray: [49, 130, 189]
}, {
  hex: '#00a1eb',
  variables: ['$cyan'],
  aliases: ['cyan'],
  rgbArray: [0, 161, 235]
}, {
  hex: '#6a51a3',
  variables: ['$purple'],
  aliases: ['purple'],
  rgbArray: [106, 81, 163]
}];

var polsCaScheme = [{
  hex: '#ec2033',
  variables: ['$pols-ca-liberal'],
  aliases: ['liberal'],
  rgbArray: [236, 32, 51]
}, {
  hex: '#2ab8eb',
  variables: ['$pols-ca-conservative'],
  aliases: ['conservative'],
  rgbArray: [42, 184, 235]
}, {
  hex: '#f26725',
  variables: ['$pols-ca-new-democratic'],
  aliases: ['newDemocratic'],
  rgbArray: [242, 103, 37]
}, {
  hex: '#0aa74b',
  variables: ['$pols-ca-green'],
  aliases: ['green'],
  rgbArray: [10, 167, 75]
}, {
  hex: '#0a4286',
  variables: ['$pols-ca-peoples-party'],
  aliases: ['peoplesParty'],
  rgbArray: [10, 66, 134]
}];

var polsEsScheme = [{
  hex: '#ec2033',
  variables: ['$pols-es-socialists'],
  aliases: ['socialists'],
  rgbArray: [236, 32, 51]
}, {
  hex: '#1f8fce',
  variables: ['$pols-es-peoples-party'],
  aliases: ['peoplesParty'],
  rgbArray: [31, 143, 206]
}, {
  hex: '#cadb2e',
  variables: ['$pols-es-vox'],
  aliases: ['vox'],
  rgbArray: [202, 219, 46]
}, {
  hex: '#952978',
  variables: ['$pols-es-unidas-podemos'],
  aliases: ['unidasPodemos'],
  rgbArray: [149, 41, 120]
}, {
  hex: '#f26725',
  variables: ['$pols-es-ciudadanos'],
  aliases: ['ciudadanos'],
  rgbArray: [242, 103, 37]
}, {
  hex: '#fdc218',
  variables: ['$pols-es-erc-catalan'],
  aliases: ['ercCatalan'],
  rgbArray: [253, 194, 24]
}, {
  hex: '#d0a115',
  variables: ['$pols-es-jxc-catalan'],
  aliases: ['jxcCatalan'],
  rgbArray: [208, 161, 21]
}, {
  hex: '#008c3e',
  variables: ['$pols-es-eaj-pnv-basque'],
  aliases: ['eajPnvBasque'],
  rgbArray: [0, 140, 62]
}, {
  hex: '#005e25',
  variables: ['$pols-es-ehb-basque'],
  aliases: ['ehbBasque'],
  rgbArray: [0, 94, 37]
}];

var polsUkScheme = [{
  hex: '#4093b2',
  variables: ['$pols-uk-conservative'],
  aliases: ['conservative'],
  rgbArray: [64, 147, 178]
}, {
  hex: '#ec5156',
  variables: ['$pols-uk-labour'],
  aliases: ['labour'],
  rgbArray: [236, 81, 86]
}, {
  hex: '#eaaa00',
  variables: ['$pols-uk-liberal-democrats'],
  aliases: ['liberalDemocrats'],
  rgbArray: [234, 170, 0]
}, {
  hex: '#2AB8EB',
  variables: ['$pols-uk-brexit-party'],
  aliases: ['brexitParty'],
  rgbArray: [42, 184, 235]
}];

var baseLite = createColorScheme(baseLiteScheme);
var base = createColorScheme(baseScheme);
var polsCa = createColorScheme(polsCaScheme);
var polsEs = createColorScheme(polsEsScheme);
var polsUk = createColorScheme(polsUkScheme);

var categorical = /*#__PURE__*/Object.freeze({
  __proto__: null,
  baseLite: baseLite,
  base: base,
  polsCa: polsCa,
  polsEs: polsEs,
  polsUk: polsUk
});

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

var diverging = /*#__PURE__*/Object.freeze({
  __proto__: null,
  avocadoPlum: avocadoPlum,
  blueberryFujiApple: blueberryFujiApple,
  caraCaraPlum: caraCaraPlum,
  mintChocolateCaraCara: mintChocolateCaraCara,
  mintChocolateMango: mintChocolateMango
});

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

var sequential = /*#__PURE__*/Object.freeze({
  __proto__: null,
  avocado: avocado,
  blueberry: blueberry,
  caraCaraMorel: caraCaraMorel,
  caraCara: caraCara,
  fujiApple: fujiApple,
  mangoCaraCara: mangoCaraCara,
  mangoFujiApple: mangoFujiApple,
  mangoMorel: mangoMorel,
  mango: mango,
  mintChocolateSesame: mintChocolateSesame,
  mintChocolate: mintChocolate,
  morel: morel,
  morningGloryBlueberry: morningGloryBlueberry,
  morningGlory: morningGlory,
  pistachio: pistachio,
  plum: plum,
  sesame: sesame
});

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

var thematic = /*#__PURE__*/Object.freeze({
  __proto__: null,
  brand: brand,
  dawn: dawn,
  khaki: khaki,
  nord: nord
});

var index = {
  categorical: categorical,
  sequential: sequential,
  diverging: diverging,
  thematic: thematic
};

export default index;
export { categorical, diverging, sequential, sequential as thematic };
