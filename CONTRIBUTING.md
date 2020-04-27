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

## Contributing to colors

Colors is entirely driven by CSV files with color codes and SCSS variable names.

To add a new color scheme to our library, add a CSV file to `packages/color/schemes` in the appropriate folder for categorical, sequential or diverging color schemes.

Name your scheme. Names should be **snake-cased** (with hyphens).

Make sure the structure of your CSV **strictly** adheres to this format:

```
hex,variables
#2E3440,$nord-black
#ECEFF4,$nord-white $nord-arctic
#5E81AC,$nord-blue
#BF616A,$nord-red
```

... where each row after the header is a color in your color scheme.

The values in each row should be:

#### `hex`

The hex value of your color.

#### `variables`

SCSS variable names.

You can add multiple variables separated by whitespace. You should generally prefix your variable name with the snake-cased name of your scheme.

#### Publishing

Once your done adding colors, run:

```
$ runner build-libs
```

... and then to publish ...

```
$ publish-libs
```

**Don't forget to commit to GitHub!**
