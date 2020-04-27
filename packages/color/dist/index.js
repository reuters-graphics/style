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

var baseScheme = [{
  hex: '#000000',
  variables: ['$black'],
  aliases: ['black'],
  rgbArray: [0, 0, 0]
}, {
  hex: '#6b6a6b',
  variables: ['$gray'],
  aliases: ['gray'],
  rgbArray: [107, 106, 107]
}, {
  hex: '#ffffff',
  variables: ['$white'],
  aliases: ['white'],
  rgbArray: [255, 255, 255]
}, {
  hex: '#f6eb0e',
  variables: ['$yellow'],
  aliases: ['yellow'],
  rgbArray: [246, 235, 14]
}, {
  hex: '#ff8000',
  variables: ['$orange'],
  aliases: ['orange'],
  rgbArray: [255, 128, 0]
}, {
  hex: '#c31729',
  variables: ['$red'],
  aliases: ['red'],
  rgbArray: [195, 23, 41]
}, {
  hex: '#476e1e',
  variables: ['$green'],
  aliases: ['green'],
  rgbArray: [71, 110, 30]
}, {
  hex: '#0d519f',
  variables: ['$blue'],
  aliases: ['blue'],
  rgbArray: [13, 81, 159]
}, {
  hex: '#946eac',
  variables: ['$purple'],
  aliases: ['purple'],
  rgbArray: [148, 110, 172]
}, {
  hex: '#b4d682',
  variables: ['$mint', '$yes'],
  aliases: ['mint', 'yes'],
  rgbArray: [180, 214, 130]
}, {
  hex: '#fdc218',
  variables: ['$marigold', '$no'],
  aliases: ['marigold', 'no'],
  rgbArray: [253, 194, 24]
}];

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

var polsUsPrimaryScheme = [{
  hex: '#7e61c9',
  variables: ['$pols-us-purple', '$pols-us-klobuchar'],
  aliases: ['polsUsPurple', 'polsUsKlobuchar'],
  rgbArray: [126, 97, 201]
}, {
  hex: '#ffd103',
  variables: ['$pols-us-yellow', '$pols-us-sanders', '$pols-us-weld'],
  aliases: ['polsUsYellow', 'polsUsSanders', 'polsUsWeld'],
  rgbArray: [255, 209, 3]
}, {
  hex: '#72bf2e',
  variables: ['$pols-us-green', '$pols-us-buttigieg'],
  aliases: ['polsUsGreen', 'polsUsButtigieg'],
  rgbArray: [114, 191, 46]
}, {
  hex: '#00b0bd',
  variables: ['$pols-us-turqoise'],
  aliases: ['polsUsTurqoise'],
  rgbArray: [0, 176, 189]
}, {
  hex: '#f98900',
  variables: ['$pols-us-orange', '$pols-us-warren', '$pols-us-trump'],
  aliases: ['polsUsOrange', 'polsUsWarren', 'polsUsTrump'],
  rgbArray: [249, 137, 0]
}, {
  hex: '#b90000',
  variables: ['$pols-us-maroon'],
  aliases: ['polsUsMaroon'],
  rgbArray: [185, 0, 0]
}, {
  hex: '#c12b6f',
  variables: ['$pols-us-magenta', '$pols-us-yang'],
  aliases: ['polsUsMagenta', 'polsUsYang'],
  rgbArray: [193, 43, 111]
}, {
  hex: '#00b294',
  variables: ['$pols-us-teal', '$pols-us-bloomberg'],
  aliases: ['polsUsTeal', 'polsUsBloomberg'],
  rgbArray: [0, 178, 148]
}, {
  hex: '#218ecd',
  variables: ['$pols-us-blue', '$pols-us-biden', '$pols-us-dem'],
  aliases: ['polsUsBlue', 'polsUsBiden', 'polsUsDem'],
  rgbArray: [33, 142, 205]
}, {
  hex: '#dbf1ff',
  variables: ['$pols-us-blue-light', '$pols-us-dem-other'],
  aliases: ['polsUsBlueLight', 'polsUsDemOther'],
  rgbArray: [219, 241, 255]
}, {
  hex: '#ea2135',
  variables: ['$pols-us-red', '$pols-us-walsh', '$pols-us-gop'],
  aliases: ['polsUsRed', 'polsUsWalsh', 'polsUsGop'],
  rgbArray: [234, 33, 53]
}, {
  hex: '#fde1dc',
  variables: ['$pols-us-red-light', '$pols-us-gop-other'],
  aliases: ['polsUsRedLight', 'polsUsGopOther'],
  rgbArray: [253, 225, 220]
}, {
  hex: '#939598',
  variables: ['$pols-us-gray'],
  aliases: ['polsUsGray'],
  rgbArray: [147, 149, 152]
}, {
  hex: '#c7c7c7',
  variables: ['$pols-us-gray-light', '$pols-us-no-polling-places'],
  aliases: ['polsUsGrayLight', 'polsUsNoPollingPlaces'],
  rgbArray: [199, 199, 199]
}, {
  hex: '#efefef',
  variables: ['$pols-us-gray-lightest', '$pols-us-no-results'],
  aliases: ['polsUsGrayLightest', 'polsUsNoResults'],
  rgbArray: [239, 239, 239]
}, {
  hex: '#ffffff',
  variables: ['$pols-us-white'],
  aliases: ['polsUsWhite'],
  rgbArray: [255, 255, 255]
}];

var polsUsScheme = [{
  hex: '#003576',
  variables: ['$pols-us-democrat', '$pols-us-democrat-0'],
  aliases: ['democrat', 'democrat0'],
  rgbArray: [0, 53, 118]
}, {
  hex: '#006bb4',
  variables: ['$pols-us-democrat-light', '$pols-us-democrat-1'],
  aliases: ['democratLight', 'democrat1'],
  rgbArray: [0, 107, 180]
}, {
  hex: '#3ca6e4',
  variables: ['$pols-us-democrat-lighter', '$pols-us-democrat-2'],
  aliases: ['democratLighter', 'democrat2'],
  rgbArray: [60, 166, 228]
}, {
  hex: '#97d8fd',
  variables: ['$pols-us-democrat-lightest', '$pols-us-democrat-3'],
  aliases: ['democratLightest', 'democrat3'],
  rgbArray: [151, 216, 253]
}, {
  hex: '#fdab9e',
  variables: ['$pols-us-republican-lightest', '$pols-us-republican-3'],
  aliases: ['republicanLightest', 'republican3'],
  rgbArray: [253, 171, 158]
}, {
  hex: '#ee665b',
  variables: ['$pols-us-republican-lighter', '$pols-us-republican-2'],
  aliases: ['republicanLighter', 'republican2'],
  rgbArray: [238, 102, 91]
}, {
  hex: '#c42a28',
  variables: ['$pols-us-republican-light', '$pols-us-republican-1'],
  aliases: ['republicanLight', 'republican1'],
  rgbArray: [196, 42, 40]
}, {
  hex: '#7c0000',
  variables: ['$pols-us-republican', '$pols-us-republican-0'],
  aliases: ['republican', 'republican0'],
  rgbArray: [124, 0, 0]
}];

var base = createColorScheme(baseScheme);
var brand = createColorScheme(brandScheme);
var dawn = createColorScheme(dawnScheme);
var khaki = createColorScheme(khakiScheme);
var nord = createColorScheme(nordScheme);
var polsCa = createColorScheme(polsCaScheme);
var polsEs = createColorScheme(polsEsScheme);
var polsUk = createColorScheme(polsUkScheme);
var polsUsPrimary = createColorScheme(polsUsPrimaryScheme);
var polsUs = createColorScheme(polsUsScheme);

var categorical = /*#__PURE__*/Object.freeze({
  __proto__: null,
  base: base,
  brand: brand,
  dawn: dawn,
  khaki: khaki,
  nord: nord,
  polsCa: polsCa,
  polsEs: polsEs,
  polsUk: polsUk,
  polsUsPrimary: polsUsPrimary,
  polsUs: polsUs
});

var brewerRdbuScheme = [{
  hex: '#b2182b',
  variables: ['$brewer-rdbu-red-400'],
  aliases: ['red400'],
  rgbArray: [178, 24, 43]
}, {
  hex: '#d6604d',
  variables: ['$brewer-rdbu-red-300'],
  aliases: ['red300'],
  rgbArray: [214, 96, 77]
}, {
  hex: '#f4a582',
  variables: ['$brewer-rdbu-red-200'],
  aliases: ['red200'],
  rgbArray: [244, 165, 130]
}, {
  hex: '#fddbc7',
  variables: ['$brewer-rdbu-red-100'],
  aliases: ['red100'],
  rgbArray: [253, 219, 199]
}, {
  hex: '#d1e5f0',
  variables: ['$brewer-rdbu-blue-100'],
  aliases: ['blue100'],
  rgbArray: [209, 229, 240]
}, {
  hex: '#92c5de',
  variables: ['$brewer-rdbu-blue-200'],
  aliases: ['blue200'],
  rgbArray: [146, 197, 222]
}, {
  hex: '#4393c3',
  variables: ['$brewer-rdbu-blue-300'],
  aliases: ['blue300'],
  rgbArray: [67, 147, 195]
}, {
  hex: '#2166ac',
  variables: ['$brewer-rdbu-blue-400'],
  aliases: ['blue400'],
  rgbArray: [33, 102, 172]
}];

var brewerRdbu = createColorScheme(brewerRdbuScheme);

var diverging = /*#__PURE__*/Object.freeze({
  __proto__: null,
  brewerRdbu: brewerRdbu
});

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

var sequential = /*#__PURE__*/Object.freeze({
  __proto__: null,
  blue: blue,
  brewerBlue: brewerBlue,
  brewerGreen: brewerGreen,
  brewerPurple: brewerPurple,
  brewerRed: brewerRed,
  brewerWarmRed: brewerWarmRed,
  cyan: cyan,
  gray: gray,
  green: green,
  magenta: magenta,
  navy: navy,
  orange: orange,
  purple: purple,
  red: red,
  tangerine: tangerine,
  yellow: yellow
});

var index = {
  categorical: categorical,
  sequential: sequential,
  diverging: diverging
};

export default index;
export { categorical, diverging, sequential };
