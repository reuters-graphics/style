
You can use Google sheets and docs to collaborate with others on translatable content and pull it into your project directly from Google Drive.

## Contents

- [Where to put Google docs and sheets](#Where-to-put-Google-docs-and-sheets)
- [Configuring Google APIs](#Configuring-Google-APIs)
- [Using Docs](#Using-Docs)
- [Using Sheets](#Using-Sheets)
- [Using downloaded data in your code](#Using-downloaded-data-in-your-code)

## Where to put Google docs and sheets

Make a sheet or doc in a folder within the Reuters Graphics Google Drive folder. (Ask an editor if this hasn't already been shared with you.) This automatically gives our API scraper access to your doc. As long as your doc is in this folder, you can keep it private and share it directly with your collaborators.

We recommend you create a separate sheet or doc for each locale you want translated.

## Configuring Google APIs

To tell the rig what Google docs or sheets to use, you'll add configuration to a `google.json` file in the root of each locale folder.

> - locales/
>   - en/
>     - **google.json**
>   - es/
>     - **google.json**

Within the config file, each **key** under `docs` or `sheets` is the path to the file you'd like output. Each **value** is the ID of the doc or sheet you'd like to download to that location.

```js
{
  "docs": {
    "myDoc.json": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  },
  "sheets": {
    "sheets/data.json": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  }
}
```

For example, keys like the above, will create files like this:

> - locales/
>   - en/
>     - sheets/
>       - **data.json**
>     - google.json
>     - **myDoc.json**
>   - es/
>     - sheets/
>       - **data.json**
>     - google.json
>     - **myDoc.json**

To find the ID of you doc or sheet, look for a long string of random characters in the URL of the file in Google Drive. You can find it between `https://.../d/< DOC ID HERE >/edit`. For example:

https://docs.google.com/spreadsheets/d/**1h1O8jPScxrUg-xmolKGSPzaePgyG3zbBkAWiijEpi0c**/edit

## Using Docs

Google docs are processed using [ArchieML](http://archieml.org/). Read more on their site about how you can use the syntax to structure your data.

## Using Sheets

Your spreadsheet can contain tabular data or key-value pairs. Read more in the [sheet-to-data docs](https://github.com/rdmurphy/sheet-to-data#structuring-your-spreadsheet) about how to structure your spreadsheet.


## Using downloaded data in your code

#### EJS

After you've downloaded your data from Google, you can use the `localeData` helper to pull your data into EJS files.

```html
<body>
  <% const doc = localeData('myDoc.json') %>
  <h1><%= doc.title %></h1>
</body>
```

#### JS

In JS, you can use dynamic imports:

```javascript
const locale = document.documentElement.lang; // en, es, de, etc.

import(`Locales/${locale}/myDoc.json`).then((doc) => {
  document.getElementById('title').innerHTML = doc.title;
});
```
