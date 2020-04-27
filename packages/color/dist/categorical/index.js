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

export { base, brand, dawn, khaki, nord, polsCa, polsEs, polsUk, polsUs, polsUsPrimary };
