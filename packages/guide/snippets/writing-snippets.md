---
title: Writing snippets
description: Sharing how-to's and know-how's with snippets.
categories:
  - docs
---

# Writing snippets

Snippets are a great way to share and document tips and tricks on the team.

### Prereqs

Snippets are written in [markdown](https://www.markdownguide.org/) syntax, which is a shorthand for writing the web-friendly content. If you're unfamiliar with markdown, have a look at [GitHub's friendly introduction](https://guides.github.com/features/mastering-markdown/).

### Steps

Here's how to publish your Snippet:

1. Pull down the [`style` repo](https://github.com/reuters-graphics) from GitHub.

2. Create a new markdown file in `packages/guide/snippets`. For example, `reusable-charts.md`.

3. We use YAML front matter in each snippet file to make it searchable within the style guide. You should add at least a title to yours, but are encouraged to add a description and category tags.

  ```
  ---
  title: Reusable charts
  description: Building chart classes that are reusable.
  categories:
    - d3
    - javascript
  ---

  ```

4. Write your snippet using markdown.

5. When you're done writing, rebuild the style guide from the root of the repo using this [lerna](https://lerna.js.org/) command:

  ```
  $ lerna run build
  ```

6. After the build is finished, commit your changes to GitHub which will republish the style guide with your snippet!

### Pro tips

#### Code blocks

Use GitHub-style code blocks in your markdown to get reader-friendly syntax highlighting.


~~~markdown
```javascript
import * as d3 from 'd3';
```
~~~


```javascript
import * as d3 from 'd3';

```

The following languages are built in:
- `javascript` / `js`
- `scss`
- `python`
- `r`
- `sql`
- `bash`

#### Previewing your snippet locally

Write your snippet and then run the following command from the repo root to startup the style guide's preview server.

```
$ lerna run start
```

**Note:** Live editing your snippet is unfortunately not possible using the preview server. You'll need to stop and restart the server *each time* you'd like to see any edits to your snippet reflected.
