## Working with colors

#### SCSS

Import the SCSS color variables directly from the library.

```scss
// Import colors from all our color schemes ...
@import "~@reuters-graphics/style-color/scss/all";

// ... or a family of color schemes ...
@import "~@reuters-graphics/style-color/scss/sequential/all";

// ... or just one scheme.
@import "~@reuters-graphics/style-color/scss/sequential/sesame";
```

 Then use them to style your elements.

```scss

circle {
  fill: $cyan;
  stroke: $sesame-100;
}

```

#### JS

Import a color scheme from the library.

```javascript
import { sesame } from '@reuters-graphics/style-color/dist/sequential';
```

Work with colors in the scheme.

```javascript

// See all colors in the scheme
sesame.all
// [{…}, {…}, {…}, {…}, {…}, {…}]

// Get the hex value for one color
sesame.all[0].hex
// "#efefef"

// Generate the rgba string for the color with a transparency
sesame.all[0].rgba(1)
// "rgba(239, 239, 239, 1)"

// Get that as an array
sesame.all[0].rgbaArray(0.25)
// [239, 239, 239, 0.25]

// See the SCSS variables associated with that color
sesame.all[0].variables
// ["$sesame-100", "$gray-100"]
```

There are a few alternative ways to access colors in the scheme:

Use aliases to access a color directly. (See the Color Explorer below.)

```javascript
import { nord } from '@reuters-graphics/style-color/dist/thematic';
import { blueberry } from '@reuters-graphics/style-color/dist/sequential';

nord.red
// {hex: "#BF616A", rgba: ƒ, rgbaArray: ƒ}

blueberry['100']
// {hex: "#C8DAF0", rgba: ƒ, rgbaArray: ƒ}

```

Schemes are guaranteed to be in order, so for sequential scales, you can access the min/max color values easily with first/last.

```javascript
import { blueberry } from '@reuters-graphics/style-color/dist/sequential';

blueberry.first()
// {variables: Array(1), hex: "#C8DAF0", rgba: ƒ, rgbaArray: ƒ}
blueberry.last()
// {variables: Array(1), hex: "#044F74", rgba: ƒ, rgbaArray: ƒ}

// Handy for quickly creating color scales...
d3.scaleLinear()
  .range([
    blueberry.first().hex,
    blueberry.last().hex
  ]);
```
