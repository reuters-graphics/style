
"Prerendering" is the concept of rendering and injecting JavaScript-generated content into the static HTML of your page before publishing it to the web.

Prerendering a JS app makes your page significantly faster to load for a reader and lets bots and crawlers see your content, which improves your page's SEO. In some cases, it may even let you skip JavaScript altogether, making your page much lighter weight.

The graphics rig comes with tools to let you build and prerender JavaScript applications using modern frameworks like [React](https://reactjs.org/), with templating engines like [EJS](https://ejs.co/), or using plain ES6 JavaScript syntax like [template strings](https://wesbos.com/template-strings-html/).

## Contents

- [Quickstart](#Quickstart)
  - [Step 1: HTML](#Step-1-HTML)
  - [Step 2: JS](#Step-2-JS)
    - [EJS example](#EJS-example)
    - [React example](#React-example)
  - [Step 3: Register your app](#Step-3-Register-your-app)
    - [Static-only apps](#Static-only-apps)
- [Advanced techniques](#Advanced-techniques)
  - [Using local data](#Using-local-data)
  - [Using remote data (async)](#Using-remote-data-async)
  - [Multiple EJS templates](#Multiple-EJS-templates)
  - [Static shells](#Static-shells)
  - [More configuration](#More-configuration)

## Quickstart

### Step 1: HTML

Make a container element in your HTML and be sure it has a unique ID. The rig will use this placeholder to inject your prerendered JS content into the page. Remember, anything inside this container will be replaced by your JS content, so it's generally best to make it an empty div.

```html
<!-- article.ejs -->

<div id="app-root"></div>
```

### Step 2: JS

Make a new JavaScript file that will be the entry point for your application. Your new script should export a default function, which **must return a string of HTML when run.**

Here's an example using template strings:

```javascript
// myApp.js

const somePeople = ['Ada Lovelace', 'Grace Hopper', 'Edith Clarke'];

const makeRow = (name) => `<li>${name}</li>`;
const makeList = (names) => `<ul>${names.map(makeRow).join('')}</ul>`;
const makeHTML = () => makeList(somePeople);


// This function is what the rig will call to render your content!
export default () => {
  return makeHTML();
}
```

To make sure your script also works in the browser during development, you should also write code to inject the content into your page.

```javascript
::[10]
// myApp.js

const somePeople = ['Ada Lovelace', 'Grace Hopper', 'Edith Clarke'];

const makeRow = (name) => `<li>${name}</li>`;
const makeList = (names) => `<ul>${names.map(makeRow).join('')}</ul>`;
const makeHTML = () => makeList(somePeople);

// This will render your content into #app-root in the browser!
document.getElementById('app-root').innerHTML = makeHTML();

export default () => {
  return makeHTML();
}
```

To save a step when your code is run, you can also conditionally render in the browser only if your container hasn't already been filled with your content.

```javascript
::[9-14]
// myApp.js

const somePeople = ['Ada Lovelace', 'Grace Hopper', 'Edith Clarke'];

const makeRow = (name) => `<li>${name}</li>`;
const makeList = (names) => `<ul>${names.map(makeRow).join('')}</ul>`;
const makeHTML = () => makeList(somePeople);

const APP_ROOT = document.getElementById('app-root');

// If container is empty, then we inject the content ourselves.
if (!APP_ROOT.hasChildNodes()) {
  APP_ROOT.innerHTML = makeHTML();
}

export default () => {
  return makeHTML();
}
```

Here are a few more examples of similar apps using EJS and React:

#### EJS example

```javascript
// myApp.js
import myTemplate from './myTemplate.ejs';

const APP_ROOT = document.getElementById('app-root');

if (!APP_ROOT.hasChildNodes()) {
  APP_ROOT.innerHTML = myTemplate({ /* ... */ });
}

export default () => {
  return myTemplate({ /* ... */ });
}
```

#### React example

```javascript
// myApp.js
import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import MyComponent from './myComponent';

const APP_ROOT = document.getElementById('app-root');

if (APP_ROOT.hasChildNodes()) {
  ReactDOM.hydrate(<MyComponent />, APP_ROOT);
} else {
  ReactDOM.render(<MyComponent />, APP_ROOT);
}

export default () => {
  return renderToString(<MyComponent />);
}
```

### Step 3: Register your app

Lastly, you need to register your app for prerendering.

Open the file at `config/prerenderApps.js` and add a configuration object to the array like this:

```javascript
// config/prerenderApps.js
module.exports = [
  {
    script: 'myApp.js',
    selector: '#app-root',
  },
];
```

`script` is the path to your app script, relative to the `src/js/` directory.

`selector` is the query selector for the container div in your HTML.

#### Static-only apps

If your JS content will never change in response to any reader interactions -- i.e., is [**static**](/style/graphics-rig/writing-code/#Server-vs-client-static-vs-dynamic) -- then there's not really a reason for you to render your JavaScript app a second time when the user loads the page.

In this case you can tell the rig to exclude your app's script from the page after it renders and injects the JS content. Just set `staticOnly` to `true` on your configuration object.

```javascript
::[6]
// config/prerenderApps.js
module.exports = [
  {
    script: 'myApp.js',
    selector: '#app-root',
    staticOnly: true,
  },
];
```

To give you an idea what this does, here's your HTML *without* `staticOnly` set:

```html
::[7]
<html>
<body>

<div id='app-root'><!-- Your app's rendered content here --></div>

<!-- Your app's script included on the page, which has to be loaded and run again... -->
<script src='myApp.js'></script>

</body>
</html>
```

... and here's your HTML *with* `staticOnly` set:

```html
::[7]
<html>
<body>

<div id='app-root'><!-- Your app's rendered content here --></div>

<!-- Your app's script excluded from the page, which makes it faster! -->


</body>
</html>
```

Remember, you should only use this feature if your content is truly static. For dynamic content -- essentially if your app needs **ANY** JavaScript to run as the reader goes through your page -- then you'll have to keep you prerendered app dynamic.

## Advanced techniques

Prerendering JS content is a very powerful feature that in many cases is completely approachable using the graphics rig. There are, however, lots of caveats in more complex cases.

### Using local data

If you need to include some local data in your app, it's better to put your JSON in the JS folder near your app and directly import it into your script.

> - src/
>   - js/
>     - myApp.js
>     - **myData.json**


```javascript
// myApp.js
import myData from './myData.json';
import myTemplate from 'myTemplate.ejs';

export default () => {
  return myTemplate({ data: myData });
}
```

### Using remote data (async)

If you need to get some data from a remote source, like an API or an already published JSON file, make your app's default export function asynchronous and use `fetch`:

```javascript
// myApp.js
import myTemplate from 'myTemplate.ejs';

export default async() => {
  const response = await fetch('https://myAPI.com/');
  const myData = await response.json();
  return myTemplate({ data: myData });
}
```

### Multiple EJS templates

When using multiple EJS templates, remember that your app's default export function must return *a single string of HTML.*

If multiple templates are creating different parts of your content, you can use template strings to combine them into a single string:

```javascript
// myApp.js
import myChart from 'chartTemplate.ejs';
import myTable from 'tableTemplate.ejs';

const appContent = () => {
  return `<div class='app-container'>
    <div class='chart-container'>${myChart({ /* ... */})}</div>
    <div class='table-container'>${myTable({ /* ... */})}</div>
  </div>`;
};

const APP_ROOT = document.getElementById('app-root');

if (!APP_ROOT.hasChildNodes()) APP_ROOT.innerHTML = appContent();

export default () => {
  return appContent();
}
```

### Static shells

One common pattern is to create a "shell" of the static elements of your page you know won't change in response to reader interactions, then hook interactive content into that shell.

Here's a simple example of how to do it in the rig:

First, we write a prerendered app to create our "shell" elements...

```javascript
// src/js/myApp.js
const makeHTML = () => `
  <div id='map-container'></div>
  <div id='chart-container'></div>
`;

const ROOT = document.getElementById('app-root');
if (!ROOT.hasChildNodes()) ROOT.innerHTML = makeHTML();

export default () => {
  return makeHTML();
}
```

... next, register that prerendered app as a `staticOnly` application ...

```javascript
// config/prerenderApps.js
module.exports = [
  {
    script: 'myApp.js',
    selector: '#app-root',
    staticOnly: true,
  },
];
```

... lastly, in our main script, we can hook into the shell elements ...

```javascript
// src/js/app.js
import Map from './myMap.js';
import Chart from './myChart.js';

const map = new Map({
  container: document.getElementById('map-container'),
});
map.draw();

const chart = new Chart({
  container: document.getElementById('chart-container'),
});
chart.draw();
```

**Important caveats:** If your prerendered app is async, this pattern won't work in development, where the main script will likely fire before the shell is rendered. It's also generally not a good idea to write prerendered apps that depend on elements created by other prerendered apps. Execution order between prerendered apps can't be guaranteed.

### More configuration

The rig uses our own webpack plugin, [html-webpack-prerender-plugin](https://github.com/reuters-graphics/html-webpack-prerender-plugin), to prerender JS apps. You can pass additional configuration to the plugin through the `pluginOptions` key.

```javascript
::[5-9]
module.exports = [
  {
    script: 'myApp.js',
    selector: '#app-root',
    pluginOptions: {
      scope: {},
      props: {},
      injectPropsTo: '',
    }
  },
]
```

Read more in the plugin's [configuration docs](https://github.com/reuters-graphics/html-webpack-prerender-plugin/blob/master/docs/options.md) and [examples](https://github.com/reuters-graphics/html-webpack-prerender-plugin#next).
