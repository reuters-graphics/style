Write your code in the `src/` directory.

> - src/
>    - **html/**
>    - **js/**
>    - **scss/**
>    - static/

- `html/`: [EJS templates](https://ejs.co/#docs)
- `js/`: JavaScript files
- `scss/`: [SCSS files](https://sass-lang.com/guide#topic-2)
- `static/`: Static files like images, fonts or other media. See [Working with media files](../working-with-media-files/).

## Contents

- [HTML/EJS](#HTMLEJS)
  - [Includes](#Includes)
  - [Templates with data](#Templates-with-data)
  - [Requiring data](#Requiring-data)
  - [Special context](#Special-context)
    - [journalize](#journalize)
    - [localeMarkdown](#localeMarkdown)
    - [localeData](#localeData)
    - [metadata](#metadata)
    - [lang](#lang)
    - [gt.gettext](#gtgettext)
- [JS vs. HTML/EJS](#JS-vs-HTMLEJS)
- [JS](#JS)
  - [Modern syntax and modules](#Modern-syntax-and-modules)
  - [EJS templates in JS](#EJS-templates-in-JS)
  - [Translation with ttag](#Translation-with-ttag)
  - [Translation with markdown](#Translation-with-markdown)
  - [React](#React)
  - [Svelte](#Svelte)
- [SCSS](#SCSS)
  - [SCSS modules](#SCSS-modules)

## HTML/EJS

HTML is written in [EJS](https://ejs.co/), embedded JavaScript templates.

EJS syntax allows you to use JavaScript to compose your HTML in powerful ways that will make your code much easier to write and read.

Take a look at the official [syntax guide](https://github.com/mde/ejs/blob/master/docs/syntax.md) for complete details on how to use it, but we'll hit the best highlights below along with some special tools added to EJS in our rig.

### Includes

Includes help you separate and organize your code so it's easier to work with. Here's how they work:

> - html/
>    - index.ejs
>    - nav.ejs
>    - body.ejs

```ejs
::[4,5]
<!-- index.ejs -->
<html>
  <body>
    <%- include('nav.ejs'); %>
    <%- include('body.ejs'); %>
    <footer>Copyright 2020</footer>
  </body>
</html>
```

```ejs
<!-- nav.ejs -->
<nav>
  <a href="/">Home</a>
</nav>
```

```html
<!-- body.ejs -->
<h1>Hello world!</h1>
```

... which would render together like this:

```html
<html>
  <body>
    <nav>
      <a href="/">Home</a>
    </nav>
    <h1>Hello world!</h1>
    <footer>Copyright 2020</footer>
  </body>
</html>
```

### Templates with data

You can also pass context data to included files, which make them powerful templates. For example, say we have a list of people we want to display.

> - html/
>    - index.ejs
>    - templates/
>      - person.ejs

```ejs
<!-- index.ejs -->
<ul>
  <% people.forEach(function(person){ %>
    <%- include('templates/person.ejs', { person: person }); %>
  <% }); %>
</ul>
```

```ejs
<!-- person.ejs -->
<li><%= person.firstName %> <%= person.lastName %></li>
```

So if our data looked like this...

```javascript
const people = [
  { firstName: 'George', lastName: 'Washington' },
  { firstName: 'John', lastName: 'Adams' },
  { firstName: 'Thomas', lastName: 'Jefferson' },
];
```

... then our templates would render like this:

```html
<ul>
  <li>George Washington</li>
  <li>John Adams</li>
  <li>Thomas Jefferson</li>
</ul>
```

### Requiring data

So you can see how powerful templates can be when combined with data, but where does that data come from? Add a data directory to the last example with our data file of dead presidents.

> - html/
>    - index.ejs
>    - **data/**
>      - **presidents.json**
>    - templates/
>      - person.ejs

```ejs
::[2]
<!-- index.ejs -->
<% const deadPresidents = require('./data/presidents.json'); %>
<ul>
  <% deadPresidents.forEach(function(person){ %>
    <%- include('templates/person.ejs', { person: person }); %>
  <% }); %>
</ul>
```

Just use the `require` syntax to import JSON data to a normal JS variable, then use that variable to include your templates.

### Special context

There are a few special context variables that are always included in your templates to do things or to give you access to important data.

#### `journalize`

We include [journalize](https://github.com/rdmurphy/journalize#readme), which has several extremely useful functions for parsing data into AP-approved text. Check out the [API docs](https://github.com/rdmurphy/journalize#api-docs) for a full explanation of what all it does. Here's an example formatting a date to AP style:

```ejs
<% const today = new Date(); %>
<p>Current as of <%= journalize.apdate(today) %>.</p>
```

#### `localeMarkdown`

The `localeMarkdown` function allows you to access a locale-specific translations of content written in markdown, the HTML shortcut syntax.

Pass the path to file in your locale directory.

> - locales/
>   - en/
>     - article/
>       - **text.md**

```ejs
::[3]
<!-- index.ejs -->
<body>
  <%- localeMarkdown('article/text.md') %>
</body>
```

If you're using our markdown chunk syntax:

```ejs
::[3]
<!-- index.ejs -->
<body>
  <%- localeMarkdown('text.md').intro %>
</body>
```

Read more about using markdown files for translation on the [Copy and translation](../copy-and-translation/) page.

#### `localeData`

`localeData` follows the same idea as `localeMarkdown` but is for importing JSON data.

Say you have some data that is translated for each locale:

> - locales/
>   - en/
>     - **data.json**
>   - es/
>     - **data.json**
> - src
>   - html/
>     - index.ejs

In your templates, you can use `localeData` to include the correct translation of that data in your page.

```ejs
::[3]
<!-- index.ejs -->
<body>
  <% const data = localeData('data.json') %>
  <h1><%= data.title %></h1>
</body>
```

So if your markdown files looked like this:

```javascript
// locales/en/data.json
{
  "title": "My English article"
}
```

```javascript
// locales/es/data.json
{
  "title": "Mi articulo en español"
}
```

... they would render to pages like this:

```html
<body>
  <h1>My English article</h1>
</body>
```

```html
<body>
  <h1>Mi articulo en español</h1>
</body>
```

Read more about translation on the [Copy and translation](../copy-and-translation/) page.

#### `metadata`

The `metadata` variable includes metadata about your page, including authors, publish and update times, share and SEO titles, and more.

```ejs
<p>Published at
  <time datetime="<%- new Date(metadata.publishDate).toISOString() %>">
    <%= journalize.apdate(new Date(metadata.publishDate)); %>
  </time>
</p>

```

#### `lang`

This is a variable that represents the current locale. In development, this is always `en`, but when building out separate pages for each translation, it will represent whatever locale is being built, for example `es` for the Spanish page, `de` for German, etc.

```ejs
<html lang="<%= lang %>" dir="ltr">
  <body></body>
</html>
```

#### `gt.gettext`

`gt.gettext` is a special function that will extract and get locale-specific translations of text from `.gettext.po` files.

```ejs
<p>
  <%= gt.gettext('Hello world!') %>
</p>
```

Running the `extractText` command will create a `messages.gettext.po` file in each locale folder like this:

```
msgid ""
msgstr "Content-Type: text/plain; charset=utf-8\n"

#: src/html/index.ejs:2
msgid "Hello world!"
msgstr ""
```

... so if your `locales/es/messages.gettext.po` is like this ...

```
msgid ""
msgstr "Content-Type: text/plain; charset=utf-8\n"

#: src/html/index.ejs:2
msgid "Hello world!"
msgstr "¡Hola Mundo!"
```

... your template will render to a Spanish page like this:

```html
<p>
  ¡Hola Mundo!
</p>
```


Read more about translation on the [Copy and translation](../copy-and-translation/) page.

## JS vs. HTML/EJS

Before we move on to JavaScript, it's worth mentioning why you _might_ want to prefer writing most of your page content in EJS templates.

You might be wondering, if EJS is just "embedded JavaScript," why wouldn't I just write all my content *in JavaScript?*

The main reason has to do with _how_ and _when_ content is rendered.

### Server vs. client / static vs. dynamic

When you write your content in JavaScript, that content isn't immediately available on the page readers go to.

Say you have a page like this:

```html
<body>
  <div id='my-content'></div>
  <script src='script.js'></script>
</body>
```

And a script that injects content onto that page like this:

```javascript
// script.js
const page = { title: 'Hello world!' };

document.getElementById('my-content').innerHTML = '<h1>' + page.title + '</h1>';
```

When a user comes to that page, the first thing that renders is a page with an empty `div#my-content`, then the page requests your script, your script runs and finally your content appears.

For a normal reader with a reasonably fast internet connect, that delay may be imperceptible (though not always!). But in one case, that delay is critical:

Enter BOTS.

When Google's bots scrape your page to index it in search results, it may not wait for your script to run. So what Google sees is an empty page and will rank your page accordingly.

That's the downside of rendering content **in the client**, i.e., in the browser via JavaScript.

When you use EJS templates, though, your content is rendered when we build the page. So with a simple template like this:

```ejs
<body>
  <% const page = localeData('pageData.json') %>
  <div id-'my-content'>
    <h1><%= page.title %></h1>
  </div>
</body>
```

... your page is rendered to this when we build it ...

```html
<body>
  <div id-'my-content'>
    <h1>Hello world!</h1>
  </div>
</body>
```

Readers and bots alike will see your content immediately without waiting for the round-trip to get and execute a script.

That's the benefit of rendering content **on the server**, which in this case just means when we built your page.

There is, however, a case where you may need to render your content on the client: when that content needs to change, or is **dynamic**.

Let's say you're fetching some data from an API that you want to use on your page.

If you were to write that in EJS like this:

```ejs
<p>Today's temperature is <%= apiData.temp %> degrees.</p>
```

Then when we render it, your page will be built with whatever the temperature was at the moment you built your page. Not great for readers who visit the page next week because that content is now **static**, unchanged from whenever you last published your page.

This is a case where we absolutely should write our content in JavaScript.

Now with a template like this ...

```ejs
<p>Today's temperature is <span id="temp"></span> degrees.</p>
```

... and a script like this ...

```javascript
const apiData = await fetch('https://weather.com/api')
                    .then(response => response.json());

document.getElementById('temp').innerHTML = apiData.temp;
```

... our page will be updated with the most current data for readers.

::: aside tip

### Coda...

This section is simplified to help you think about how your content is being served to readers and where you might want to write it in our rig.

There are more advanced techniques to create content that is both **server-rendered/static** AND **client-rendered/dynamic**. See [Prerendering JS apps](../prerendering-js-apps/).

:::

## JS

While the rig is very opinionated about what tools you use to build your HTML -- i.e., EJS -- it enforces almost no conventions on how you write your JavaScript.

JavaScript moves fast, and this rig is designed to protect whatever way you want to write JS using whatever framework makes the most sense to you.

The only convention you need to respect is that your script has one entry file, `app.js`. That script is already included in the directoy:

> - src/
>   - js/
>     - tools/
>     - **app.js**

(You can safely ignore scripts in the `tools/` directory, which include some scripts for page furniture like our share tools and others that are only used during development.)

Here are some of the features included in the rig for writing JS:

### Modern syntax and modules

You may write scripts using the [modern JavaScript syntax](https://www.taniarascia.com/es6-syntax-and-feature-overview/) and split them into independent modules that keep your code clean and easy to read.

```javascript
// js/app.js
import renderTitle from './renderTitle';

const title = 'My page title';

renderTitle(title);
```

```javascript
// js/renderTitle.js
const renderTitle = (titleText) => {
  document.getElementById('title-header').innerHTML = titleText;
};

export default renderTitle;
```

### EJS templates in JS

Use EJS templates in your scripts. Any template written **in the `js/` folder** (as opposed to the `html/` folder) can be imported and used as a dynamic template.

> - js/
>   - app.js
>   - person.ejs

```ejs
<li><%= firstName %> <%= lastName %></li>
```

```javascript
import personTemplate from './person.ejs';

const somePeople = [ /* ... */];

const peopleList = somePeople.map(person => personTemplate({
  firstName: person.firstName,
  lastName: person.lastName,
}));

// [
//   '<li>George Washington</li>',
//   '<li>John Adams</li>',
//   ...
// ]

document.getElementById('my-list').innerHTML = peopleList.join('');
```

### Translation with ttag

You can use [ttag.js](https://ttag.js.org/) to extract and translate text strings in your JavaScript. This is basically a more powerful equivalent of the `gt.gettext` helper in our EJS templates and will extract text to `messages.ttag.po` in the `locales` directory.


So with a script like this...

```javascript
// js/app.js
const greeting = t`Hello`;

document.getElementById('greeting').innerHTML = greeting;
```

... translatable text will be extracted to `messages.ttag.po` like this ...

```
msgid ""
msgstr ""
"Content-Type: text/plain; charset=utf-8\n"
"Plural-Forms: nplurals = 2; plural = (n != 1);\n"
"Language: en\n"
"mime-version: 1.0\n"
"Content-Transfer-Encoding: 8bit\n"

#: src/js/app.js:1
msgid "Hello"
msgstr ""
```

... which you can supply translations for like this in each locale ...

```
#: src/js/app.js:1
msgid "Hello"
msgstr "Guten Tag"
```

Check out the [docs](https://ttag.js.org/docs/quickstart.html) for more information on using ttag.

Read more about translation on the [Copy and translation](../copy-and-translation/) page.

### Translation with markdown

To load different translations in your JavaScript files, you can use [dynamic expressions in an import statement](https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import) and load locale-specific content.

```javascript
const locale = document.documentElement.lang; // en, es, de, etc.

import(`Locales/${locale}/article/intro.md`).then((markdown) => {
  document.getElementById('intro').innerHTML = markdown;
});
```

By default Webpack will create a separate code bundle for each markdown file you import in this way. It's probably a good idea to read more about the ways you can configure how those files are created by using Webpack's ["magic comments."](https://webpack.js.org/api/module-methods/#magic-comments)

### React

Support for [React](https://reactjs.org/) is built in. Simply write JSX in your JS files, directly.

```javascript
// js/app.js
import React from 'react';
import ReactDOM from 'react-dom';

const Title = () => <h1>My Title</h1>;

ReactDOM.render(document.getElementById('title-container'), <Title/>);
```


### Svelte

Support for [Svelte](https://svelte.dev/) is built in when using a `.svelte` extension.

> - js
>   - app.js
>   - **title.svelte**

```html
<!-- js/title.svelte -->
<script>
  export let title;
</script>

<h1>{title}</h1>

<style>
h1{
  color: red;
}
</style>
```

```javascript
// js/app.js
import Title from './title.svelte';

new Title({
  target: document.getElementById('title-container'),
  props: {
    title: 'My svelte page',
  }
});
```

## SCSS

Write your styles using [SCSS syntax](https://sass-lang.com/guide) in the `scss` directory.

Once you've written some styles, **make sure you import your root style sheets in JavaScript.**

> - js/
>   - app.js
> - scss/
>   - main.scss
>   - \_variables.scss

```scss
// main.scss
@import 'variables';

body {
  h1{
    color: $red;
  }
}
```

```javascript
// js/app.js
import '../main.scss';

// ... or using our special scss directory alias ...
import 'SCSS/main.scss'
```

### SCSS modules

For advanced uses, you can also use SCSS with CSS module scoping by writing a SCSS file **in the `js/` directory**.

For example, files like these ...


> - js/
>   - app.js
>   - **styles.scss**

```scss
.component :global {
  h1 {
    color: red;
  }
}
```

```javascript
import styles from './styles.scss';

document.getElementById('my-red-container').classList.add(styles.component);
```

... will render a stylesheet and markup like this ...

```scss
._SOME123LONG456CLASS789NAME h1{
  color: red;
}
```

```html
<div id="my-red-container" class="_SOME123LONG456CLASS789NAME">
  <h1>My bloody title</h1>
</div>
```

This is probably most useful when writing JS components when using a framework like React. It lets you scope your styles locally to the component so you can avoid style collisions while writing very simple, easy to read style rules.
