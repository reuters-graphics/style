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
  return Object.assign({}, aliasScheme, {
    all: rows.map(function (row) {
      return Object.assign({
        variables: row.variables.trim().split(' ')
      }, createColorValues(row.hex));
    })
  });
}

var base = createColorScheme(baseScheme);
var gray = createColorScheme(grayScheme);
var brand = createColorScheme(brandScheme);
var index = {
  base: base,
  gray: gray,
  brand: brand
};

export default index;
export { base, brand, gray };
