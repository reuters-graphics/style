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

export { base, baseLite, polsCa, polsEs, polsUk };
