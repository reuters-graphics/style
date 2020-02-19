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
// [{…}, {…}, {…}, {…}, {…}, {…}]

// Get the hex value for one color
gray.all[0].hex
// "#F0F1F1"

// Generate the rgba string for the color with a transparency
gray.all[0].rgba(1)
// "rgba(240, 241, 241, 1)"

// Get that as an array
gray.all[0].rgbaArray(0.25)
// [240, 241, 241, 0.25]

// See the SCSS variables associated with that color
gray.all[0].variables
// ["$gray-100"]
```

There are a few alternative ways to access colors in the scheme:

Use camel-cased SCSS variable names to access a color directly.

```javascript
import { nord } from '@reuters-graphics/style-color';

nord.nordAurora0
// {hex: "#BF616A", rgba: ƒ, rgbaArray: ƒ}

```

Schemes are guaranteed to be in order, so for sequential scales, you can access the min/max color values easily with first/last.

```javascript
import { blue } from '@reuters-graphics/style-color';

blue.first()
// {variables: Array(1), hex: "#C8DAF0", rgba: ƒ, rgbaArray: ƒ}
blue.last()
// {variables: Array(1), hex: "#044F74", rgba: ƒ, rgbaArray: ƒ}

// Handy for quickly creating color scales...
d3.scaleLinear()
  .range([
    blue.first().hex,
    blue.last().hex
  ]);
```
