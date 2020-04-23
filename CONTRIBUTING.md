![](badge.svg)

# Contributing

### Prerequisites

1. Install [lerna](https://lerna.js.org/) and runner globally.

  ```
  $ yarn global add lerna
  $ yarn global add @reuters-graphics/runner
  ```

2. Install package dependencies.

  ```
  $ yarn && lerna bootstrap
  ```

## Contributing style guide docs


All style guide content is written in markdown files in the directories at `packages/guide/content/...`.

To edit or update those pages:

1. Make sure you've pulled from GitHub.

  ```bash
  $ git pull origin master
  ```

2. Start a development server.

  ```bash
  $ runner dev-docs
  ```

3. Edit the files in `packages/guide/content/` using [markdown syntax](https://guides.github.com/features/mastering-markdown/). You'll see your changes updated on the dev server.

4. Once you're satisfied with your edits, publish the docs.

  ```bash
  $ runner publish-docs
  ```


**Note:** If you need to _add a page_ to the docs, talk to a developer (Jon for now...), and they'll get you setup.
