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

var brewerBlueScheme = [ { variables:"$brew-blue-100",
    hex:"#f7fbff" },
  { variables:"$brew-blue-200",
    hex:"#deebf7" },
  { variables:"$brew-blue-300",
    hex:"#c6dbef" },
  { variables:"$brew-blue-400",
    hex:"#9ecae1" },
  { variables:"$brew-blue-500",
    hex:"#6baed6" },
  { variables:"$brew-blue-600",
    hex:"#4292c6" },
  { variables:"$brew-blue-700",
    hex:"#2171b5" },
  { variables:"$brew-blue-800",
    hex:"#08519c" },
  { variables:"$brew-blue-900",
    hex:"#08306b" } ];

var brewerGreenScheme = [ { variables:"$brew-green-100",
    hex:"#f7fcf5" },
  { variables:"$brew-green-200",
    hex:"#e5f5e0" },
  { variables:"$brew-green-300",
    hex:"#c7e9c0" },
  { variables:"$brew-green-400",
    hex:"#a1d99b" },
  { variables:"$brew-green-500",
    hex:"#74c476" },
  { variables:"$brew-green-600",
    hex:"#41ab5d" },
  { variables:"$brew-green-700",
    hex:"#238b45" },
  { variables:"$brew-green-800",
    hex:"#006d2c" },
  { variables:"$brew-green-900",
    hex:"#00441b" } ];

var brewerPurpleScheme = [ { variables:"$brew-purple-100",
    hex:"#fcfbfd" },
  { variables:"$brew-purple-200",
    hex:"#efedf5" },
  { variables:"$brew-purple-300",
    hex:"#dadaeb" },
  { variables:"$brew-purple-400",
    hex:"#bcbddc" },
  { variables:"$brew-purple-500",
    hex:"#9e9ac8" },
  { variables:"$brew-purple-600",
    hex:"#807dba" },
  { variables:"$brew-purple-700",
    hex:"#6a51a3" },
  { variables:"$brew-purple-800",
    hex:"#54278f" },
  { variables:"$brew-purple-900",
    hex:"#3f007d" } ];

var brewerRedScheme = [ { variables:"$brew-red-100",
    hex:"#fff5f0" },
  { variables:"$brew-red-200",
    hex:"#fee0d2" },
  { variables:"$brew-red-300",
    hex:"#fcbba1" },
  { variables:"$brew-red-400",
    hex:"#fc9272" },
  { variables:"$brew-red-500",
    hex:"#fb6a4a" },
  { variables:"$brew-red-600",
    hex:"#ef3b2c" },
  { variables:"$brew-red-700",
    hex:"#cb181d" },
  { variables:"$brew-red-800",
    hex:"#a50f15" },
  { variables:"$brew-red-900",
    hex:"#67000d" } ];

var brewerWarmRedScheme = [ { variables:"$brew-warm-red-100",
    hex:"#fff5eb" },
  { variables:"$brew-warm-red-200",
    hex:"#fee6ce" },
  { variables:"$brew-warm-red-300",
    hex:"#fdd0a2" },
  { variables:"$brew-warm-red-400",
    hex:"#fdae6b" },
  { variables:"$brew-warm-red-500",
    hex:"#fd8d3c" },
  { variables:"$brew-warm-red-600",
    hex:"#f16913" },
  { variables:"$brew-warm-red-700",
    hex:"#d94801" },
  { variables:"$brew-warm-red-800",
    hex:"#a63603" },
  { variables:"$brew-warm-red-900",
    hex:"#7f2704" } ];

var gfxBlueScheme = [ { variables:"$gfx-blue-100",
    hex:"#C8DAF0" },
  { variables:"$gfx-blue-200",
    hex:"#ABC8E8" },
  { variables:"$gfx-blue-300",
    hex:"#7AADDC" },
  { variables:"$gfx-blue-400",
    hex:"#1F8FCE" },
  { variables:"$gfx-blue-500",
    hex:"#1B78AC" },
  { variables:"$gfx-blue-600",
    hex:"#044F74" } ];

var gfxCyanScheme = [ { variables:"$gfx-cyan-100",
    hex:"#CFE8F9" },
  { variables:"$gfx-cyan-200",
    hex:"#B5DDF6" },
  { variables:"$gfx-cyan-300",
    hex:"#86CCF1" },
  { variables:"$gfx-cyan-400",
    hex:"#2AB8EB" },
  { variables:"$gfx-cyan-500",
    hex:"#259AC5" },
  { variables:"$gfx-cyan-600",
    hex:"#0C6785" } ];

var gfxForestScheme = [ { variables:"$gfx-forest-100",
    hex:"#C4D6C4" },
  { variables:"$gfx-forest-200",
    hex:"#A5C3A8" },
  { variables:"$gfx-forest-300",
    hex:"#73A97F" },
  { variables:"$gfx-forest-400",
    hex:"#008C4E" },
  { variables:"$gfx-forest-500",
    hex:"#007741" },
  { variables:"$gfx-forest-600",
    hex:"#005027" } ];

var gfxGrayScheme = [ { variables:"$gfx-gray-100",
    hex:"#F0F1F1" },
  { variables:"$gfx-gray-200",
    hex:"#E6E7E8" },
  { variables:"$gfx-gray-300",
    hex:"#A7A9AC" },
  { variables:"$gfx-gray-400",
    hex:"#999" },
  { variables:"$gfx-gray-500",
    hex:"#76787A" },
  { variables:"$gfx-gray-600",
    hex:"#404041" } ];

var gfxGreenScheme = [ { variables:"$gfx-green-100",
    hex:"#CBE1C8" },
  { variables:"$gfx-green-200",
    hex:"#AED3AB" },
  { variables:"$gfx-green-300",
    hex:"#7DBE80" },
  { variables:"$gfx-green-400",
    hex:"#0AA74B" },
  { variables:"$gfx-green-500",
    hex:"#008C3E" },
  { variables:"$gfx-green-600",
    hex:"#005E25" } ];

var gfxLimeScheme = [ { variables:"$gfx-lime-100",
    hex:"#EFF4CC" },
  { variables:"$gfx-lime-200",
    hex:"#E8EEAF" },
  { variables:"$gfx-lime-300",
    hex:"#DBE580" },
  { variables:"$gfx-lime-400",
    hex:"#CADB2E" },
  { variables:"$gfx-lime-500",
    hex:"#A6B626" },
  { variables:"$gfx-lime-600",
    hex:"#6A7812" } ];

var gfxMagentaScheme = [ { variables:"$gfx-magenta-100",
    hex:"#F4CCDC" },
  { variables:"$gfx-magenta-200",
    hex:"#E575A6" },
  { variables:"$gfx-magenta-300",
    hex:"#DF338A" },
  { variables:"$gfx-magenta-400",
    hex:"#9C1B61" },
  { variables:"$gfx-magenta-500",
    hex:"#740245" },
  { variables:"$gfx-magenta-600",
    hex:"#65002C" } ];

var gfxNavyScheme = [ { variables:"$gfx-navy-100",
    hex:"#BCC2E0" },
  { variables:"$gfx-navy-200",
    hex:"#9BA4CF" },
  { variables:"$gfx-navy-300",
    hex:"#697CB8" },
  { variables:"$gfx-navy-400",
    hex:"#0F519F" },
  { variables:"$gfx-navy-500",
    hex:"#0A4286" },
  { variables:"$gfx-navy-600",
    hex:"#002459" } ];

var gfxOliveScheme = [ { variables:"$gfx-olive-100",
    hex:"#E0EDCB" },
  { variables:"$gfx-olive-200",
    hex:"#D0E4AF" },
  { variables:"$gfx-olive-300",
    hex:"#B4D682" },
  { variables:"$gfx-olive-400",
    hex:"#8FC641" },
  { variables:"$gfx-olive-500",
    hex:"#74A535" },
  { variables:"$gfx-olive-600",
    hex:"#476E1E" } ];

var gfxOrangeScheme = [ { variables:"$gfx-orange-100",
    hex:"#FDD5BB" },
  { variables:"$gfx-orange-200",
    hex:"#FBBE99" },
  { variables:"$gfx-orange-300",
    hex:"#F79967" },
  { variables:"$gfx-orange-400",
    hex:"#F26725" },
  { variables:"$gfx-orange-500",
    hex:"#C8551D" },
  { variables:"$gfx-orange-600",
    hex:"#843401" } ];

var gfxPurpleScheme = [ { variables:"$gfx-purple-100",
    hex:"#CABDDC" },
  { variables:"$gfx-purple-200",
    hex:"#B19CC9" },
  { variables:"$gfx-purple-300",
    hex:"#8D6EAE" },
  { variables:"$gfx-purple-400",
    hex:"#653290" },
  { variables:"$gfx-purple-500",
    hex:"#552479" },
  { variables:"$gfx-purple-600",
    hex:"#360451" } ];

var gfxRedScheme = [ { variables:"$gfx-red-100",
    hex:"#FBC9BA" },
  { variables:"$gfx-red-200",
    hex:"#F8AB98" },
  { variables:"$gfx-red-300",
    hex:"#F37B68" },
  { variables:"$gfx-red-400",
    hex:"#EC2033" },
  { variables:"$gfx-red-500",
    hex:"#C31729" },
  { variables:"$gfx-red-600",
    hex:"#82000D" } ];

var gfxRoseScheme = [ { variables:"$gfx-rose-100",
    hex:"#E9C3C8" },
  { variables:"$gfx-rose-200",
    hex:"#DFA4AE" },
  { variables:"$gfx-rose-300",
    hex:"#D17589" },
  { variables:"$gfx-rose-400",
    hex:"#C02460" },
  { variables:"$gfx-rose-500",
    hex:"#A11950" },
  { variables:"$gfx-rose-600",
    hex:"#6B0031" } ];

var gfxTangerineScheme = [ { variables:"$gfx-tangerine-100",
    hex:"#FFECC6" },
  { variables:"$gfx-tangerine-200",
    hex:"#FFE3A7" },
  { variables:"$gfx-tangerine-300",
    hex:"#FFD576" },
  { variables:"$gfx-tangerine-400",
    hex:"#FDC218" },
  { variables:"$gfx-tangerine-500",
    hex:"#D0A115" },
  { variables:"$gfx-tangerine-600",
    hex:"#886A00" } ];

var gfxVioletScheme = [ { variables:"$gfx-violet-100",
    hex:"#DABFD1" },
  { variables:"$gfx-violet-200",
    hex:"#C99FBB" },
  { variables:"$gfx-violet-300",
    hex:"#B1709B" },
  { variables:"$gfx-violet-400",
    hex:"#952978" },
  { variables:"$gfx-violet-500",
    hex:"#7E1E65" },
  { variables:"$gfx-violet-600",
    hex:"#530041" } ];

var gfxYellowScheme = [ { variables:"$gfx-yellow-100",
    hex:"#FCF8CD" },
  { variables:"$gfx-yellow-200",
    hex:"#FBF5B0" },
  { variables:"$gfx-yellow-300",
    hex:"#F9F17E" },
  { variables:"$gfx-yellow-400",
    hex:"#F6EB0E" },
  { variables:"$gfx-yellow-500",
    hex:"#CAC313" },
  { variables:"$gfx-yellow-600",
    hex:"#838103" } ];

var base = createColorScheme(baseScheme);
var brand = createColorScheme(brandScheme);
var blue = createColorScheme(blueScheme);
var gray = createColorScheme(grayScheme);
var green = createColorScheme(greenScheme);
var purple = createColorScheme(purpleScheme);
var red = createColorScheme(redScheme);
var brewerPurpleGreen = createColorScheme(purpleGreenScheme);
var brewerRedBlue = createColorScheme(redBlueScheme);
var brewerRedYellowGreen = createColorScheme(redYellowGreenScheme);
var brewerBlue = createColorScheme(brewerBlueScheme);
var brewerGreen = createColorScheme(brewerGreenScheme);
var brewerPurple = createColorScheme(brewerPurpleScheme);
var brewerRed = createColorScheme(brewerRedScheme);
var brewerWarmRed = createColorScheme(brewerWarmRedScheme);
var gfxBlue = createColorScheme(gfxBlueScheme);
var gfxCyan = createColorScheme(gfxCyanScheme);
var gfxForest = createColorScheme(gfxForestScheme);
var gfxGray = createColorScheme(gfxGrayScheme);
var gfxGreen = createColorScheme(gfxGreenScheme);
var gfxLime = createColorScheme(gfxLimeScheme);
var gfxMagenta = createColorScheme(gfxMagentaScheme);
var gfxNavy = createColorScheme(gfxNavyScheme);
var gfxOlive = createColorScheme(gfxOliveScheme);
var gfxOrange = createColorScheme(gfxOrangeScheme);
var gfxPurple = createColorScheme(gfxPurpleScheme);
var gfxRed = createColorScheme(gfxRedScheme);
var gfxRose = createColorScheme(gfxRoseScheme);
var gfxTangerine = createColorScheme(gfxTangerineScheme);
var gfxViolet = createColorScheme(gfxVioletScheme);
var gfxYellow = createColorScheme(gfxYellowScheme);
var index = {
  // base,
  // brand,
  // blue,
  // gray,
  // green,
  // purple,
  // red,
  brewerPurpleGreen: brewerPurpleGreen,
  brewerRedBlue: brewerRedBlue,
  brewerRedYellowGreen: brewerRedYellowGreen,
  brewerBlue: brewerBlue,
  brewerGreen: brewerGreen,
  brewerPurple: brewerPurple,
  brewerRed: brewerRed,
  brewerWarmRed: brewerWarmRed,
  gfxYellow: gfxYellow,
  gfxTangerine: gfxTangerine,
  gfxOrange: gfxOrange,
  gfxLime: gfxLime,
  gfxOlive: gfxOlive,
  gfxGreen: gfxGreen,
  gfxForest: gfxForest,
  gfxBlue: gfxBlue,
  gfxCyan: gfxCyan,
  gfxNavy: gfxNavy,
  gfxPurple: gfxPurple,
  gfxViolet: gfxViolet,
  gfxRose: gfxRose,
  gfxRed: gfxRed,
  gfxMagenta: gfxMagenta,
  gfxGray: gfxGray
};

export default index;
export { base, blue, brand, brewerBlue, brewerGreen, brewerPurple, brewerPurpleGreen, brewerRed, brewerRedBlue, brewerRedYellowGreen, brewerWarmRed, gfxBlue, gfxCyan, gfxForest, gfxGray, gfxGreen, gfxLime, gfxMagenta, gfxNavy, gfxOlive, gfxOrange, gfxPurple, gfxRed, gfxRose, gfxTangerine, gfxViolet, gfxYellow, gray, green, purple, red };
