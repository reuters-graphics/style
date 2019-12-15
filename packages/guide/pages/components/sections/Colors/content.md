# Colors

```
yarn add @reuters-graphics/style-color
```

## Working with colors

#### SCSS

Import the SCSS color variables directly from the library.

```scss
// Import colors from all our color schemes
@import "~@reuters-graphics/style-color/scss/main";

// ... or just one scheme.
@import "~@reuters-graphics/style-color/scss/gray";
```

 Then use them to style your elements.

```scss

circle {
  fill: $cyan;
  stroke: $gray-1;
}

```

#### JS

Import a color scheme from the library.

```javascript
import { gray } from '@reuters-graphics/style-color';
```

Work with colors in the scheme.

```javascript

// See all colors in the sheme
gray.all
// [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

// Get the hex value for one color
gray.all[0].hex
// "#f7f7f7"

// Generate the rgba string for the color with a transparency
gray.all[0].rgba(1)
// "rgba(247, 247, 247, 1)"

// Get that as an array
gray.all[0].rgbaArray(0.25)
// [247, 247, 247, 0.25]

// See the SCSS variables associated with that color
gray.all[0].variables
// ["$gray-100", "$gray-lightest", "$light"]
```

There are a few alternative ways to access colors in the scheme.

```javascript
// Use the camel-cased variable name to access a color directly
gray.grayLightest
// {hex: "#f7f7f7", rgba: ƒ, rgbaArray: ƒ}


// Schemes are guaranteed to be in order, so for sequential scales,
// you can access the min/max color values easily with first/last.

gray.first()
// {variables: Array(3), hex: "#f7f7f7", rgba: ƒ, rgbaArray: ƒ}
gray.last()
// {variables: Array(1), hex: "#222824", rgba: ƒ, rgbaArray: ƒ}

// Handy for quickly creating color scales...
d3.scaleLinear()
  .range([
    gray.first().hex,
    gray.last().hex
  ]);
```
