## Contents

- [How do I add custom methods to D3.js?](#How-do-I-add-custom-methods-to-D3js?)
- [How do I use Font Awesome?](#How-do-I-use-Font-Awesome?)

## How do I add custom methods to D3.js?

Create a dedicated file in your project where you will add all your custom methods to d3.

```js
// my-d3.js
import * as d3 from 'd3';
// so THIS way of importing gets you a READ ONLY copy of d3. so you can't directly write to it like you would a normal javascript object. it will work in dev but will just get overwritten and not work in the final build. we will deal with this at the end.

// your custom function
const myCustomFunction = (params) => { ... };

// now we create a new object and copy all the stuff from d3 to it, as well as our new function.
export default Object.assign(d3, {
  myCustomFunction: myCustomFunction,
});
```

Alternatively, you can add a _prototype_ to an existing d3 method _without_ creating a copy.:

```js
// my-d3.js
import * as d3 from 'd3';

d3.selection.prototype.myCustomFunction = (params) => { ... };

// this will work
export default d3;
```

Now you can use this d3 you just exported in other files like so:

```js
// another-file.js
import * as d3 from 'path/to/my-d3.js';

d3.myCustomFunction(params);
```



You can read more about why this works [here](https://exploringjs.com/es6/ch_modules.html#_in-es6-imports-are-live-read-only-views-on-exported-values).

## How do I use Font Awesome?

Import Font Awesome's SCSS stylesheets in `main.scss`.

> - src/
>   - scss/
>     - **main.scss**

```SCSS
// Set the font-path variable FIRST
$fa-font-path: '~@fortawesome/fontawesome-free/webfonts';

// Import the base SCSS stylesheet
@import '~@fortawesome/fontawesome-free/scss/fontawesome.scss';

// Import the fonts you need!
@import '~@fortawesome/fontawesome-free/scss/solid.scss';
@import '~@fortawesome/fontawesome-free/scss/regular.scss';
```

Now you can use Font Awesome's classes.

```HTML
<i class="fas fa-camera"></i>
```

Read what other stylesheets you might want to include in [Font Awesome's SASS guide](https://fontawesome.com/how-to-use/on-the-web/using-with/sass).
