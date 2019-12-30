import hexRgb from 'hex-rgb';

var baseScheme = [ { hex:"#000000",
    variables:"$black" },
  { hex:"#6b6a6b",
    variables:"$gray" },
  { hex:"#ffffff",
    variables:"$white" },
  { hex:"#f6eb0e",
    variables:"$yellow" },
  { hex:"#ff8000",
    variables:"$orange" },
  { hex:"#c31729",
    variables:"$red" },
  { hex:"#476e1e",
    variables:"$green" },
  { hex:"#0d519f",
    variables:"$blue" },
  { hex:"#946eac",
    variables:"$purple" },
  { hex:"#b4d682",
    variables:"$mint $yes" },
  { hex:"#fdc218",
    variables:"$marigold $no" } ];

var blueScheme = [ { variables:"$blue-100",
    hex:"#C8DAF0" },
  { variables:"$blue-200",
    hex:"#ABC8E8" },
  { variables:"$blue-300",
    hex:"#7AADDC" },
  { variables:"$blue-400",
    hex:"#1F8FCE" },
  { variables:"$blue-500",
    hex:"#1B78AC" },
  { variables:"$blue-600",
    hex:"#044F74" } ];

var brandScheme = [ { hex:"#ff8000",
    variables:"$brand $brand-primary" },
  { hex:"#666666",
    variables:"$brand-secondary" },
  { hex:"#ffffff",
    variables:"$brand-background $brand-inverted-secondary" },
  { hex:"#86888b",
    variables:"$brand-nav" },
  { hex:"#313132",
    variables:"$brand-nav-active $brand-text $brand-text-primary" },
  { hex:"#333333",
    variables:"$brand-inverted-background" },
  { hex:"#999999",
    variables:"$brand-inverted-nav" },
  { hex:"#cccccc",
    variables:"$brand-inverted-nav-active" },
  { hex:"#717375",
    variables:"$brand-text-secondary" } ];

var brewerBlueScheme = [ { variables:"$brewer-blue-100",
    hex:"#f7fbff" },
  { variables:"$brewer-blue-200",
    hex:"#deebf7" },
  { variables:"$brewer-blue-300",
    hex:"#c6dbef" },
  { variables:"$brewer-blue-400",
    hex:"#9ecae1" },
  { variables:"$brewer-blue-500",
    hex:"#6baed6" },
  { variables:"$brewer-blue-600",
    hex:"#4292c6" },
  { variables:"$brewer-blue-700",
    hex:"#2171b5" },
  { variables:"$brewer-blue-800",
    hex:"#08519c" },
  { variables:"$brewer-blue-900",
    hex:"#08306b" } ];

var brewerGreenScheme = [ { variables:"$brewer-green-100",
    hex:"#f7fcf5" },
  { variables:"$brewer-green-200",
    hex:"#e5f5e0" },
  { variables:"$brewer-green-300",
    hex:"#c7e9c0" },
  { variables:"$brewer-green-400",
    hex:"#a1d99b" },
  { variables:"$brewer-green-500",
    hex:"#74c476" },
  { variables:"$brewer-green-600",
    hex:"#41ab5d" },
  { variables:"$brewer-green-700",
    hex:"#238b45" },
  { variables:"$brewer-green-800",
    hex:"#006d2c" },
  { variables:"$brewer-green-900",
    hex:"#00441b" } ];

var brewerPurpleScheme = [ { variables:"$brewer-purple-100",
    hex:"#fcfbfd" },
  { variables:"$brewer-purple-200",
    hex:"#efedf5" },
  { variables:"$brewer-purple-300",
    hex:"#dadaeb" },
  { variables:"$brewer-purple-400",
    hex:"#bcbddc" },
  { variables:"$brewer-purple-500",
    hex:"#9e9ac8" },
  { variables:"$brewer-purple-600",
    hex:"#807dba" },
  { variables:"$brewer-purple-700",
    hex:"#6a51a3" },
  { variables:"$brewer-purple-800",
    hex:"#54278f" },
  { variables:"$brewer-purple-900",
    hex:"#3f007d" } ];

var brewerRedScheme = [ { variables:"$brewer-red-100",
    hex:"#fff5f0" },
  { variables:"$brewer-red-200",
    hex:"#fee0d2" },
  { variables:"$brewer-red-300",
    hex:"#fcbba1" },
  { variables:"$brewer-red-400",
    hex:"#fc9272" },
  { variables:"$brewer-red-500",
    hex:"#fb6a4a" },
  { variables:"$brewer-red-600",
    hex:"#ef3b2c" },
  { variables:"$brewer-red-700",
    hex:"#cb181d" },
  { variables:"$brewer-red-800",
    hex:"#a50f15" },
  { variables:"$brewer-red-900",
    hex:"#67000d" } ];

var brewerWarmRedScheme = [ { variables:"$brewer-warm-red-100",
    hex:"#fff5eb" },
  { variables:"$brewer-warm-red-200",
    hex:"#fee6ce" },
  { variables:"$brewer-warm-red-300",
    hex:"#fdd0a2" },
  { variables:"$brewer-warm-red-400",
    hex:"#fdae6b" },
  { variables:"$brewer-warm-red-500",
    hex:"#fd8d3c" },
  { variables:"$brewer-warm-red-600",
    hex:"#f16913" },
  { variables:"$brewer-warm-red-700",
    hex:"#d94801" },
  { variables:"$brewer-warm-red-800",
    hex:"#a63603" },
  { variables:"$brewer-warm-red-900",
    hex:"#7f2704" } ];

var cyanScheme = [ { variables:"$cyan-100",
    hex:"#CFE8F9" },
  { variables:"$cyan-200",
    hex:"#B5DDF6" },
  { variables:"$cyan-300",
    hex:"#86CCF1" },
  { variables:"$cyan-400",
    hex:"#2AB8EB" },
  { variables:"$cyan-500",
    hex:"#259AC5" },
  { variables:"$cyan-600",
    hex:"#0C6785" } ];

var dawnScheme = [ { hex:"#98B898",
    variables:"$dawn-0" },
  { hex:"#94778B",
    variables:"$dawn-1" },
  { hex:"#EFC267",
    variables:"$dawn-2" },
  { hex:"#E8495F",
    variables:"$dawn-3" },
  { hex:"#6A6B75",
    variables:"$dawn-4" },
  { hex:"#08415C",
    variables:"$dawn-5" } ];

var grayScheme = [ { variables:"$gray-100",
    hex:"#F0F1F1" },
  { variables:"$gray-200",
    hex:"#E6E7E8" },
  { variables:"$gray-300",
    hex:"#A7A9AC" },
  { variables:"$gray-400",
    hex:"#999" },
  { variables:"$gray-500",
    hex:"#76787A" },
  { variables:"$gray-600",
    hex:"#404041" } ];

var greenScheme = [ { variables:"$green-100",
    hex:"#CBE1C8" },
  { variables:"$green-200",
    hex:"#AED3AB" },
  { variables:"$green-300",
    hex:"#7DBE80" },
  { variables:"$green-400",
    hex:"#0AA74B" },
  { variables:"$green-500",
    hex:"#008C3E" },
  { variables:"$green-600",
    hex:"#005E25" } ];

var khakiScheme = [ { hex:"#FDC218",
    variables:"$khaki-0" },
  { hex:"#406427",
    variables:"$khaki-1" },
  { hex:"#6A5032",
    variables:"$khaki-2" },
  { hex:"#413F42",
    variables:"$khaki-3" },
  { hex:"#949598",
    variables:"$khaki-4" },
  { hex:"#EDE3DE",
    variables:"$khaki-5" } ];

var magentaScheme = [ { variables:"$magenta-100",
    hex:"#F4CCDC" },
  { variables:"$magenta-200",
    hex:"#E575A6" },
  { variables:"$magenta-300",
    hex:"#DF338A" },
  { variables:"$magenta-400",
    hex:"#9C1B61" },
  { variables:"$magenta-500",
    hex:"#740245" },
  { variables:"$magenta-600",
    hex:"#65002C" } ];

var navyScheme = [ { variables:"$navy-100",
    hex:"#BCC2E0" },
  { variables:"$navy-200",
    hex:"#9BA4CF" },
  { variables:"$navy-300",
    hex:"#697CB8" },
  { variables:"$navy-400",
    hex:"#0F519F" },
  { variables:"$navy-500",
    hex:"#0A4286" },
  { variables:"$navy-600",
    hex:"#002459" } ];

var orangeScheme = [ { variables:"$orange-100",
    hex:"#FDD5BB" },
  { variables:"$orange-200",
    hex:"#FBBE99" },
  { variables:"$orange-300",
    hex:"#F79967" },
  { variables:"$orange-400",
    hex:"#F26725" },
  { variables:"$orange-500",
    hex:"#C8551D" },
  { variables:"$orange-600",
    hex:"#843401" } ];

var polsCaScheme = [ { hex:"#ec2033",
    variables:"$pols-ca-liberal" },
  { hex:"#2ab8eb",
    variables:"$pols-ca-conservative" },
  { hex:"#f26725",
    variables:"$pols-ca-new-democratic" },
  { hex:"#0aa74b",
    variables:"$pols-ca-green" },
  { hex:"#0a4286",
    variables:"$pols-ca-peoples-party" } ];

var polsEsScheme = [ { hex:"#ec2033",
    variables:"$pols-es-socialists" },
  { hex:"#1f8fce",
    variables:"$pols-es-peoples-party" },
  { hex:"#cadb2e",
    variables:"$pols-es-vox" },
  { hex:"#952978",
    variables:"$pols-es-unidas-podemos" },
  { hex:"#f26725",
    variables:"$pols-es-ciudadanos" },
  { hex:"#fdc218",
    variables:"$pols-es-erc-catalan" },
  { hex:"#d0a115",
    variables:"$pols-es-jxc-catalan" },
  { hex:"#008c3e",
    variables:"$pols-es-eaj-pnv-basque" },
  { hex:"#005e25",
    variables:"$pols-es-ehb-basque" } ];

var polsUkScheme = [ { hex:"#4093b2",
    variables:"$pols-uk-conservative" },
  { hex:"#ec5156",
    variables:"$pols-uk-labour" },
  { hex:"#eaaa00",
    variables:"$pols-uk-liberal-democrats" },
  { hex:"#2AB8EB",
    variables:"$pols-uk-brexit-party" } ];

var polsUsPrimaryScheme = [ { hex:"#3571C0",
    variables:"$pols-us-primary-dem-0" },
  { hex:"#D9C3A5",
    variables:"$pols-us-primary-dem-1" },
  { hex:"#8998AB",
    variables:"$pols-us-primary-dem-2" },
  { hex:"#9AD3FC",
    variables:"$pols-us-primary-dem-3" },
  { hex:"#C3F4CD",
    variables:"$pols-us-primary-dem-4" },
  { hex:"#5DAED4",
    variables:"$pols-us-primary-dem-5" },
  { hex:"#8ABDC0",
    variables:"$pols-us-primary-dem-6" },
  { hex:"#775180",
    variables:"$pols-us-primary-dem-7" },
  { hex:"#FFD682",
    variables:"$pols-us-primary-dem-8" },
  { hex:"#948064",
    variables:"$pols-us-primary-dem-9" },
  { hex:"#FE5C40",
    variables:"$pols-us-primary-gop-0" },
  { hex:"#B8948E",
    variables:"$pols-us-primary-gop-1" },
  { hex:"#FBA723",
    variables:"$pols-us-primary-gop-2" },
  { hex:"#FFB2CB",
    variables:"$pols-us-primary-gop-3" },
  { hex:"#B41E61",
    variables:"$pols-us-primary-gop-4" },
  { hex:"#433E76",
    variables:"$pols-us-primary-gop-5" },
  { hex:"#AC5141",
    variables:"$pols-us-primary-gop-6" },
  { hex:"#7957B4",
    variables:"$pols-us-primary-gop-7" },
  { hex:"#FEE0C2",
    variables:"$pols-us-primary-gop-8" },
  { hex:"#FD87F7",
    variables:"$pols-us-primary-gop-9" } ];

var polsUsScheme = [ { hex:"#003576",
    variables:"$pols-us-democrat $pols-us-democrat-0" },
  { hex:"#006bb4",
    variables:"$pols-us-democrat-light $pols-us-democrat-1" },
  { hex:"#3ca6e4",
    variables:"$pols-us-democrat-lighter $pols-us-democrat-2" },
  { hex:"#97d8fd",
    variables:"$pols-us-democrat-lightest $pols-us-democrat-3" },
  { hex:"#fdab9e",
    variables:"$pols-us-republican-lightest $pols-us-republican-3" },
  { hex:"#ee665b",
    variables:"$pols-us-republican-lighter $pols-us-republican-2" },
  { hex:"#c42a28",
    variables:"$pols-us-republican-light $pols-us-republican-1" },
  { hex:"#7c0000",
    variables:"$pols-us-republican $pols-us-republican-0" } ];

var purpleScheme = [ { variables:"$purple-100",
    hex:"#CABDDC" },
  { variables:"$purple-200",
    hex:"#B19CC9" },
  { variables:"$purple-300",
    hex:"#8D6EAE" },
  { variables:"$purple-400",
    hex:"#653290" },
  { variables:"$purple-500",
    hex:"#552479" },
  { variables:"$purple-600",
    hex:"#360451" } ];

var redScheme = [ { variables:"$red-100",
    hex:"#FBC9BA" },
  { variables:"$red-200",
    hex:"#F8AB98" },
  { variables:"$red-300",
    hex:"#F37B68" },
  { variables:"$red-400",
    hex:"#EC2033" },
  { variables:"$red-500",
    hex:"#C31729" },
  { variables:"$red-600",
    hex:"#82000D" } ];

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

var tangerineScheme = [ { variables:"$tangerine-100",
    hex:"#FFECC6" },
  { variables:"$tangerine-200",
    hex:"#FFE3A7" },
  { variables:"$tangerine-300",
    hex:"#FFD576" },
  { variables:"$tangerine-400",
    hex:"#FDC218" },
  { variables:"$tangerine-500",
    hex:"#D0A115" },
  { variables:"$tangerine-600",
    hex:"#886A00" } ];

var yellowScheme = [ { variables:"$yellow-100",
    hex:"#FCF8CD" },
  { variables:"$yellow-200",
    hex:"#FBF5B0" },
  { variables:"$yellow-300",
    hex:"#F9F17E" },
  { variables:"$yellow-400",
    hex:"#F6EB0E" },
  { variables:"$yellow-500",
    hex:"#CAC313" },
  { variables:"$yellow-600",
    hex:"#838103" } ];

var base = createColorScheme(baseScheme);
var brand = createColorScheme(brandScheme);
var gray = createColorScheme(grayScheme);
var navy = createColorScheme(navyScheme);
var blue = createColorScheme(blueScheme);
var cyan = createColorScheme(cyanScheme);
var purple = createColorScheme(purpleScheme);
var magenta = createColorScheme(magentaScheme);
var red = createColorScheme(redScheme);
var green = createColorScheme(greenScheme);
var yellow = createColorScheme(yellowScheme);
var tangerine = createColorScheme(tangerineScheme);
var orange = createColorScheme(orangeScheme);
var khaki = createColorScheme(khakiScheme);
var dawn = createColorScheme(dawnScheme);
var polsCA = createColorScheme(polsCaScheme);
var polsES = createColorScheme(polsEsScheme);
var polsUK = createColorScheme(polsUkScheme);
var polsUS = createColorScheme(polsUsScheme);
var polsUSPrimary = createColorScheme(polsUsPrimaryScheme);
var brewerBlue = createColorScheme(brewerBlueScheme);
var brewerGreen = createColorScheme(brewerGreenScheme);
var brewerPurple = createColorScheme(brewerPurpleScheme);
var brewerRed = createColorScheme(brewerRedScheme);
var brewerWarmRed = createColorScheme(brewerWarmRedScheme);
var index = {
  base: base,
  brand: brand,
  gray: gray,
  navy: navy,
  blue: blue,
  cyan: cyan,
  purple: purple,
  magenta: magenta,
  red: red,
  green: green,
  yellow: yellow,
  tangerine: tangerine,
  orange: orange,
  khaki: khaki,
  dawn: dawn,
  brewerBlue: brewerBlue,
  brewerGreen: brewerGreen,
  brewerPurple: brewerPurple,
  brewerRed: brewerRed,
  brewerWarmRed: brewerWarmRed,
  polsCA: polsCA,
  polsES: polsES,
  polsUK: polsUK,
  polsUS: polsUS,
  polsUSPrimary: polsUSPrimary
};

export default index;
export { base, blue, brand, brewerBlue, brewerGreen, brewerPurple, brewerRed, brewerWarmRed, cyan, dawn, gray, green, khaki, magenta, navy, orange, polsCA, polsES, polsUK, polsUS, polsUSPrimary, purple, red, tangerine, yellow };
