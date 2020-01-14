# Fonts

## Setup

If you haven't already, be sure to install the main style app.

```bash
yarn add @reuters-graphics/style-main
```

## Working with fonts

Use SCSS variables and mixins in your stylesheets to style type.

```scss
@import "~@reuters-graphics/style-main/scss/fonts/variables";
@import "~@reuters-graphics/style-main/scss/fonts/mixins";
```

##### Serif
<div class='font-serif' style="font-size: 1.2em;">The quick brown fox jumps over the lazy dog.</div>

```SCSS
// Variable
p { font-family: $font-family-serif; }

// Mixin
p { @include font-serif; }
```

##### Sans-serif
<div class='font-sans' style="font-size: 1.2em;">The quick brown fox jumps over the lazy dog.</div>

```SCSS
p { font-family: $font-family-sans-serif; }

p { @include font-sans; }
```

##### Monospace
<div class='font-monospace' style="font-size: 1.2em;">The quick brown fox jumps over the lazy dog.</div>

```SCSS
p { font-family: $font-family-monospace; }

p { @include font-monospace; }
```

##### Display
<div class='font-display' style="font-size: 1.2em;"><strong>The quick brown fox jumps over the lazy dog.</strong></div>

```SCSS
p { font-family: $font-family-display; }

p { @include font-display; }
```
