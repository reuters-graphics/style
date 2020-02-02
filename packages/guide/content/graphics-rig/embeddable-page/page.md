For every page, the rig will also build an embeddable version designed to be used by clients directly in their CMS using [pym.js](http://blog.apps.npr.org/pym.js/).

## Contents

- [The embed template](#The-embed-template)
- [Assets](#Assets)
- [Watch out for viewport dimensions](#Watch-out-for-viewport-dimensions)
- [Developing the embed page](#Developing-the-embed-page)

## The embed template

In most cases, you want the embed page to look slightly different from the main page. For example, the embed page likely shouldn't have our header and footer. For this reason, there is a separate embed template in `src/html`:

> - src/
>   - html/
>     - article.ejs
>     - **index.ejs**
>     - **embed.ejs**

```ejs
<!-- index.ejs -->
<body>
  <%- include('templates/nav'); %>

  <%- include('article.ejs'); %>

  <%- include('templates/footer'); %>
</body>
```

```ejs
<!-- embed.ejs -->
<body>
  <%- include('article.ejs'); %>
</body>
```

Notice that `embed.ejs` **does not include** the header and footer templates.

Notice, too, that both `index.ejs` and `embed.ejs` **do include** an article template, which would include the content both pages should share, like the body text and graphics.

Using EJS template includes, you can configure the two pages however you like for whatever content they share. See more in [Writing code](../writing-code/#Includes).


## Assets

Embeddable pages share the same assets as the standard page by default.

> - en/
>   - index.html
>   - embed.html
>   - **app.123456789.js**
>   - **app.123456789.css**
>   - img/
>     - **picture.jpg**

That means you generally don't need any special handling for assets in an embed page.

## Watch out for viewport dimensions

Watch out for CSS rules using viewport dimensions. `100vh` may mean something very different in the context of an iframe and can play havoc with pym.js's height calculation.


## Developing the embed page

The development server (`runner start`) will also create a page to preview the embed page within an iframe at a set width. Use this preview to test how your page will look in someone else's CMS.

Access it at `https://localhost:{port}/framer.html` or using the link in the dev tool in the lower left corner of the preview page.
