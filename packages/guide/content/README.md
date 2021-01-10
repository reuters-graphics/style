![](../../../badge.svg)

# Style guide content

Most content in the [Reuters Graphics style guide](https://reuters-graphics.github.io/style/) is driven by the files in this directory.

Any changes you make to these files in GitHib will trigger the page to republish. You'll see your changes on the site within 5 minutes.

## Editing pages

You should edit files **directly from GitHub** using [markdown syntax](https://guides.github.com/features/mastering-markdown/).

#### Code blocks

Use GitHub-style code blocks in your markdown to get reader-friendly syntax highlighting and handy copy-and-paste button for your code examples.

Just write a code block and indicate which language to use for syntax highlighting like this:

~~~markdown
```javascript
import * as d3 from 'd3';
```
~~~

... and your code will be properly formatted for its language:

```javascript
import * as d3 from 'd3';

```

The following language syntaxes are built in:
- `javascript` / `js`
- `scss`
- `python`
- `r`
- `sql`
- `bash`


#### Images

Images have to be uploaded before you can use them in your markdown. One trick is uploading your image through an Issue in any GitHub repository. See [this guide](https://gist.github.com/vinkla/dca76249ba6b73c5dd66a4e986df4c8d) for more info.

Once you've uploaded your image, you can use it in your markdown like this:

```
![My image alt text](https://user-images...)
```

## Adding new pages

You can add new pages to the [Policies](https://reuters-graphics.github.io/style/policies/) and [Tip sheets](https://reuters-graphics.github.io/style/tip-sheets/) sections of the site by creating new markdown files (`.md`) in the `policies/` or `tip-sheets/` folders above.

When creating a new page you **must** also include some metadata at the top of the file. Just copy and paste from the templates below and fill in the required metadata for your new page.

#### Policies template

```
---
title: <YOUR PAGE TITLE> # Required!
description: <YOUR PAGE DESCRIPTION> # Required!
---

## Welcome to my page!

TK...
```

#### Tip sheets template

```
---
title: <YOUR PAGE TITLE> # Required!
description: <YOUR PAGE DESCRIPTION> # Required!
categories: # Optional...
  - <YOUR PAGE CATEGORY #1> 
  - <YOUR PAGE CATEGORY #2>
---


## Welcome to my page!

TK...
```
