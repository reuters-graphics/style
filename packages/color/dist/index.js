import hexRgb from 'hex-rgb';

var baseScheme = [ { hex:"#ffffff",
    variables:"$white $background-color $body-background-color" },
  { hex:"#007bff",
    variables:"$blue" },
  { hex:"#6610f2",
    variables:"$indigo" },
  { hex:"#6f42c1",
    variables:"$purple" },
  { hex:"#e83e8c",
    variables:"$pink" },
  { hex:"#dc3545",
    variables:"$red $danger" },
  { hex:"#fd7e14",
    variables:"$orange" },
  { hex:"#ffc107",
    variables:"$yellow $warning" },
  { hex:"#28a745",
    variables:"$green $success" },
  { hex:"#20c997",
    variables:"$teal" },
  { hex:"#17a2b8",
    variables:"$cyan $info" },
  { hex:"#444444",
    variables:"$gray-border $dark-theme-border" },
  { hex:"#222222",
    variables:"$dark-theme-bg" },
  { hex:"#000000",
    variables:"$black" } ];

var blueScheme = [ { hex:"#deebf7",
    variables:"$blue-1" },
  { hex:"#c6dbef",
    variables:"$blue-2" },
  { hex:"#9ecae1",
    variables:"$blue-3" },
  { hex:"#6baed6",
    variables:"$blue-4" },
  { hex:"#4292c6",
    variables:"$blue-5" },
  { hex:"#2171b5",
    variables:"$blue-6" },
  { hex:"#08519c",
    variables:"$blue-7" },
  { hex:"#08306b",
    variables:"$blue-8" } ];

var brandScheme = [ { hex:"#0275d8",
    variables:"$brand-primary" },
  { hex:"#5cb85c",
    variables:"$brand-success" },
  { hex:"#5bc0de",
    variables:"$brand-info" },
  { hex:"#f0ad4e",
    variables:"$brand-warning" },
  { hex:"#d9534f",
    variables:"$brand-danger" } ];

var grayScheme = [ { hex:"#f7f7f7",
    variables:"$gray-100 $gray-lightest $light" },
  { hex:"#f4f1ee",
    variables:"$gray-200" },
  { hex:"#e9e7e5",
    variables:"$gray-300" },
  { hex:"#dbdbdb",
    variables:"$gray-400 $gray-lighter" },
  { hex:"#aaaaaa",
    variables:"$gray-500 $gray-light" },
  { hex:"#6b6a6b",
    variables:"$gray-600 $gray $secondary" },
  { hex:"#383f3a",
    variables:"$gray-700" },
  { hex:"#333333",
    variables:"$gray-800 $gray-dark $dark" },
  { hex:"#222824",
    variables:"$gray-900" } ];

var greenScheme = [ { hex:"#e5f5e0",
    variables:"$green-1" },
  { hex:"#c7e9c0",
    variables:"$green-2" },
  { hex:"#a1d99b",
    variables:"$green-3" },
  { hex:"#74c476",
    variables:"$green-4" },
  { hex:"#41ab5d",
    variables:"$green-5" },
  { hex:"#238b45",
    variables:"$green-6" },
  { hex:"#006d2c",
    variables:"$green-7" },
  { hex:"#00441b",
    variables:"$green-8" } ];

var purpleGreenScheme = [ { hex:"#762a83",
    variables:"$purple-green-1" },
  { hex:"#9970ab",
    variables:"$purple-green-2" },
  { hex:"#c2a5cf",
    variables:"$purple-green-3" },
  { hex:"#e7d4e8",
    variables:"$purple-green-4" },
  { hex:"#d9f0d3",
    variables:"$purple-green-5" },
  { hex:"#a6dba0",
    variables:"$purple-green-6" },
  { hex:"#5aae61",
    variables:"$purple-green-7" },
  { hex:"#1b7837",
    variables:"$purple-green-8" } ];

var purpleScheme = [ { hex:"#efedf5",
    variables:"$purple-1" },
  { hex:"#dadaeb",
    variables:"$purple-2" },
  { hex:"#bcbddc",
    variables:"$purple-3" },
  { hex:"#9e9ac8",
    variables:"$purple-4" },
  { hex:"#807dba",
    variables:"$purple-5" },
  { hex:"#6a51a3",
    variables:"$purple-6" },
  { hex:"#54278f",
    variables:"$purple-7" },
  { hex:"#3f007d",
    variables:"$purple-8" } ];

var redBlueScheme = [ { hex:"#b2182b",
    variables:"$red-blue-1" },
  { hex:"#d6604d",
    variables:"$red-blue-2" },
  { hex:"#f4a582",
    variables:"$red-blue-3" },
  { hex:"#fddbc7",
    variables:"$red-blue-4" },
  { hex:"#d1e5f0",
    variables:"$red-blue-5" },
  { hex:"#92c5de",
    variables:"$red-blue-6" },
  { hex:"#4393c3",
    variables:"$red-blue-7" },
  { hex:"#2166ac",
    variables:"$red-blue-8" } ];

var redScheme = [ { hex:"#fee0d2",
    variables:"$red-1" },
  { hex:"#fcbba1",
    variables:"$red-2" },
  { hex:"#fc9272",
    variables:"$red-3" },
  { hex:"#fb6a4a",
    variables:"$red-4" },
  { hex:"#ef3b2c",
    variables:"$red-5" },
  { hex:"#cb181d",
    variables:"$red-6" },
  { hex:"#a50f15",
    variables:"$red-7" },
  { hex:"#67000d",
    variables:"$red-8" } ];

var redYellowGreenScheme = [ { hex:"#d73027",
    variables:"$red-yellow-green-1" },
  { hex:"#f46d43",
    variables:"$red-yellow-green-2" },
  { hex:"#fdae61",
    variables:"$red-yellow-green-3" },
  { hex:"#fee08b",
    variables:"$red-yellow-green-4" },
  { hex:"#ffffbf",
    variables:"$red-yellow-green-5" },
  { hex:"#d9ef8b",
    variables:"$red-yellow-green-6" },
  { hex:"#a6d96a",
    variables:"$red-yellow-green-7" },
  { hex:"#66bd63",
    variables:"$red-yellow-green-8" },
  { hex:"#1a9850",
    variables:"$red-yellow-green-9" } ];

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/**
 * Create a color values object with hex value and two funcs
 * to return RGBA values as either a string or an array of values.
 *
 * @param  {Str} hex Hexadecimal color value.
 * @return {Object}     Color value.
 */

function createColorValues(hex) {
  return {
    hex: hex,
    rgba: function rgba(alpha) {
      var a = alpha || 255;
      var rgb = hexRgb(hex);
      return "rgba(".concat(rgb.red, ", ").concat(rgb.green, ", ").concat(rgb.blue, ", ").concat(a, ")");
    },
    rgbaArray: function rgbaArray(alpha) {
      var a = alpha || 255;
      var rgb = hexRgb(hex);
      return [rgb.red, rgb.green, rgb.blue, a];
    }
  };
}
/**
 * Convert kebob-case SCSS variable to camel-case prop.
 * @param  {Str} s
 * @return {Str}
 */


function camelCaser(s) {
  return s.replace('$', '').replace(/-\w/g, function (m) {
    return m[1].toUpperCase();
  });
}
/**
 * Separate variables into array of camel-cased props.
 * @param  {[type]} variables [description]
 * @return {[type]}           [description]
 */


function separateVariables(variables) {
  return variables.trim().split(' ').map(function (v) {
    return camelCaser(v);
  });
}

function createColorAliasObjects(row) {
  var values = createColorValues(row.hex);
  var variables = separateVariables(row.variables);
  var objects = variables.map(function (v) {
    var colorObject = {};
    colorObject[v] = values;
    return colorObject;
  });
  return Object.assign.apply(Object, [{}].concat(_toConsumableArray(objects)));
}

function createColorScheme(rows) {
  var aliasObjects = rows.map(function (row) {
    return createColorAliasObjects(row);
  });
  var aliasScheme = Object.assign.apply(Object, [{}].concat(_toConsumableArray(aliasObjects)));
  var colorScheme = Object.assign({}, aliasScheme, {
    all: rows.map(function (row) {
      return Object.assign({
        variables: row.variables.trim().split(' ')
      }, createColorValues(row.hex));
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

var base = createColorScheme(baseScheme);
var brand = createColorScheme(brandScheme);
var blue = createColorScheme(blueScheme);
var gray = createColorScheme(grayScheme);
var green = createColorScheme(greenScheme);
var purple = createColorScheme(purpleScheme);
var red = createColorScheme(redScheme);
var purpleGreen = createColorScheme(purpleGreenScheme);
var redBlue = createColorScheme(redBlueScheme);
var redYellowGreen = createColorScheme(redYellowGreenScheme);
var index = {
  base: base,
  brand: brand,
  blue: blue,
  gray: gray,
  green: green,
  purple: purple,
  red: red,
  purpleGreen: purpleGreen,
  redBlue: redBlue,
  redYellowGreen: redYellowGreen
};

export default index;
export { base, blue, brand, gray, green, purple, purpleGreen, red, redBlue, redYellowGreen };
