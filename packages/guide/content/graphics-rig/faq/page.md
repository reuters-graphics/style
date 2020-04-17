## Contents

- [D3 stuff](#D3-stuff)

### D3 stuff

**I want to add a custom function to D3 and use it in my project**

Good news! You can! 

How you would structure this is:
Create a file in your project where this custom d3 will live.

```js
// my-d3.js

import * as d3 from "d3";
// so THIS way of importing gets you a READ ONLY copy of d3. so you can't directly write to it like you would a normal javascript object. it will work in dev but will just get overwritten and not work in the final build. we will deal with this at the end.

// your custom function
const myCustomFunction = function(params) {
  ...
}

// now we create a new object and copy all the stuff from d3 to it, as well as our new function. 
export default Object.assign(d3, {
  myCustomFunction: myCustomFunction
})

```

Now you can use this d3 you just exported in other files like so:

```js
// another-file.js

import * as d3 from "path/to/my-d3.js";

d3.myCustomFunction(params)...

```

Things to note:

if you want to write to a prototype of a d3 object, you can just export without creating a copy.:

```js
// my-d3.js

import * as d3 from "d3";

d3.selection.prototype.myCustomFunction = (params) => ...

// this will work
export default d3
```

If you *really* have nothing to do, read here: https://exploringjs.com/es6/ch_modules.html#_in-es6-imports-are-live-read-only-views-on-exported-values