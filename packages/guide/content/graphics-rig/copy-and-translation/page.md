Translation is a first-class function of the rig. It's also very easy to create multiple versions of your page for each locale you want to publish in.

## Contents

- [Locales directory](#Locales-directory)
- [Creating new locales](#Creating-new-locales)
- [Writing locale content in markdown](#Writing-locale-content-in-markdown)
  - [How it works](#How-it-works)
  - [Special syntax](#Special-syntax)
    - [Curly bracket attributes](#Curly-bracket-attributes)
    - [Chunks](#Chunks)
- [Extracting text](#Extracting-text)
- [Previewing translated pages](#Previewing-translated-pages)

## Locales directory

**All** translatable content goes in the locales directory under a sub-folder named after an [ISO 639-1 two-letter language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

> - locales/
>   - **en/**
>   - **es/**
>   - **de/**

**You must at least have an `en` locale directory.** (Included by default!)

The **folder name is critical** and used as a key throughout the rig to get content and indicate which locale is being built.

Beyond the folder, your content files can be named whatever you like. That said, all translation tools in the rig -- including [localeMarkdown](../writing-code/#localeMarkdown), [localeData](../writing-code/#localeData), [gt.gettext](../writing-code/#gtgettext) and [ttags](../writing-code/#Translation-with-ttag) -- **expect all locale folders to contain the same files.** So be sure each locale folder is a mirror of the others.

> - locales/
>   - en/
>     - **intro.md**
>     - **messages.gettext.po**
>     - **data.json**
>   - de/
>     - **intro.md**
>     - **messages.gettext.po**
>     - **data.json**

## Creating new locales

Creating a new locale is dead simple. Just add a new folder using the [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for your translation.

As a shortcut to scaffold your new locale, you can use the `add-locale` command to create a copy of all the translation files in your `en` locale:

```bash
$ runner add-locale
```

If you *don't* use the command, you'll need to run the `extract-text` command to create `.po` files once you've created the directory and then be sure the new folder mirrors other locales.

## Writing locale content in markdown

Generally, it's a good idea to write large chunks of text in markdown files.

If you're unfamiliar with markdown, check out [this cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to get the idea or play around with an online editor like [stackedit](https://stackedit.io/app#).

### How it works

Let's say you have two translations of your intro copy in your locales folder like this:

> - locales/
>   - en/
>     - **intro.md**
>   - es/
>     - **intro.md**

In your templates, you can use, for example, our `localeMarkdown` helper function to include the correct translation of that content in each page we build.

```ejs
::[3]
<!-- index.ejs -->
<body>
  <%- localeMarkdown('intro.md') %>
</body>
```

So if your markdown files looked like this:

```markdown
# My English article

Hello world! ...
```

```markdown
# Mi articulo en español

¡Hola Mundo! ...
```

... they would render to a page for each locale like this:

```html
<body>
  <h1>My English article</h1>
  <p>Hello world! ...</p>
</body>
```

```html
<body>
  <h1>Mi articulo en español</h1>
  <p>¡Hola Mundo! ...</p>
</body>
```

### Special syntax

We've extended the basic markdown syntax to add some additional helpers you may need.

#### Curly bracket attributes

You can add attributes like classes and ids to elements within curly brackets like this:

```markdown
# header {#headline}

My paragraph ... {.small}
```

... which will render to HTML like this:

```html
<h1 id="headline">header</h1>

<p class="small">My paragraph ...</p>
```

Combine curly bracket attributes with normal brackets to create spans around text.

```markdown
A paragraph with [a bit of red text]{.red} and back to normal.
```

```html
<p>A paragraph with <span class="red">a bit of red text</span> and back to normal.</p>
```

See more in the docs for [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs).


#### Chunks

While you _can_ add HTML to markdown files, it's much better to **keep code out of markdown and in your EJS or JS scripts**.

But often you need to place text _around_ graphics. Instead of creating separate markdown files for each block of text, we've added a special syntax to help you split a single markdown file into **chunks** you can use to position text.


> - locales/
>   - en/
>     - **article.md**

Separate and name different blocks in your markdown file like this:

```markdown
::[1,5,7,9]
<< intro >>
# My headline

Some intro grafs...
<<>>

<< mySubhead >>
Lorem ipsum...
<<>>
```

Then refer to each block individually using either localeMarkdown...

```html
<body>

  <section id="intro">
    <%- localeMarkdown('artcle.md').intro %>
  </section>

  <section id="some-graphic"> ... </section>

  <%- localeMarkdown('article.md').mySubhed %>

</body>
```

... or in JavaScript ...

```javascript
const locale = document.documentElement.lang;

import(`Locales/${locale}/article.md`).then((markdown) => {
  document.getElementById('intro').innerHTML = markdown.intro;
});
```


## Extracting text

If you've used [gt.gettext](../writing-code/#gtgettext) in your templates or [ttags](../writing-code/#Translation-with-ttag) in your scripts to create translatable strings, use the `extract-text` command to automatically create `.po` files to use for translation.

```
$ runner extract-text
```

Running the command multiple times to pick up new text is safe and won't erase translations you've already done. If _do_ you need to start from scratch, you can pass a `--reset` flag to the command.

## Previewing translated pages

For now, the only way to preview translations is to build the English version of your page. Use the `$ runner preview` command to see the page built for your translation, for example at `http://localhost:8000/de/`.

```
$ runner preview
```
