The Graphics Rig is the primary tool for building interactive and graphic pages at Reuters Graphics.

The rig requires **Node version 12.0 or greater**. You can use [nvm](https://github.com/nvm-sh/nvm) if you need to manage multiple versions of Node.


## Starting a project
*{ Temporary for prototype }*

1. Clone the prototype from [the repository on GitHub](https://github.com/reuters-graphics/project-template-test).

  ```
  $ git clone git@github.com:reuters-graphics/project-template-test.git
  ```


## What's in it?

> - bin/
> - config/
> - locales/
> - project-files/
> - **src/**
> - package.json

- `bin`: Admin scripts that do one-off tasks like resize images and check metadata files.
- `config`: Admin scripts that configure the page builder, [webpack](https://webpack.js.org/).
- `locales`: Folders for each locale that contain the text content of your page. This is where you'll want to write most of your content so that it's easily translatable.
- `project-files`: Any arbitrary files you want to keep with your project but not publish, e.g., ai files.
- `src`: **Write your code here!**

Read more in this guide.


## Developing

1. Install dependencies.

  ```
  $ yarn
  ```

2. Start the development server.

  ```
  $ yarn start
  ```


## Building and previewing

1. When you're ready to build your page, the build command will check that you've filled out all the relevant metadata and publish each translation of your page.

  ```
  $ yarn build
  ```

2. To preview the built pages for each translation, run the `preview` command which will start a local server that will show you exactly what your page will look like to your readers.

  ```
  $ yarn preview
  ```

## Sharing previews

Both the `start` and `preview` commands take an optional `--ngrok` argument that will create a secure (**but public!**) URL you can share with others or use to test your page on a mobile phone. Read more about [ngrok](https://ngrok.com/) on their website.

```
$ yarn start --ngrok
```

```
$ yarn preview --ngrok
```
