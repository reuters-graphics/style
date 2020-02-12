The Graphics Rig is the primary tool for building interactive and graphic pages at Reuters Graphics.

The rig requires **Node version 12.0 or greater** (use [nvm](https://github.com/nvm-sh/nvm) if you need to manage multiple versions of Node...) and [the Yarn package manager](https://legacy.yarnpkg.com/en/docs/install).



## Starting a project

::: aside tip

### If this is your first time...

... you'll need to run through a couple additional setup steps.

**First,** install our task [runner](https://github.com/reuters-graphics/runner) and our scaffolding engine, [bluprint](https://github.com/reuters-graphics/bluprint), **globally**.

```bash
$ yarn global add @reuters-graphics/runner
$ yarn global add @reuters-graphics/bluprint
```

**Second,** create a GitHub [personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) and do **one** of the following:

- Add that token as the environment variable `GITHUB_TOKEN` on your machine. (Here's [how on a mac](https://medium.com/@himanshuagarwal1395/setting-up-environment-variables-in-macos-sierra-f5978369b255#6dad).)

- Add the token directly to bluprint's CLI:

  ```bash
  $ bluprint token <your github token>
  ```


**Now,** add the graphics rig bluprint to bluprint's CLI:

  ```bash
  $ bluprint add reuters-graphics/bluprint_graphics-rig
  ```

**Last thing,** when you first use the graphics rig bluprint, you'll be asked several questions that will be used to create a profile on your machine with information about your byline as well as some credentials you'll need to publish your work.

Make sure you have the following credentials on hand to answer those prompts:

- **username** & **password** to publish to the graphics server
- AWS **access key** & **secret access key** with rights to publish to the graphics AWS S3 bucket

If you don't have this information, reach out to an editor to get it for you.

:::


Make a fresh directory for your new project and use the `graphics rig` bluprint to scaffold out your project.

  ```
  $ mkdir my-new-project
  $ cd my-new-project
  $ bluprint start
  ```


## What's in it?

> - bin/
> - config/
> - **locales/**
> - project-files/
> - **src/**
> - package.json

- `bin/`: Admin scripts that do one-off tasks like resize images and check metadata files.
- `config/`: Admin scripts that configure the page builder. (Mostly [webpack](https://webpack.js.org/).)
- `locales/`: 👈 **Write your content here!**  Folders for each locale. See [Copy and translation](../copy-and-translation/).
- `project-files/`: Any arbitrary files you want to keep with your project but not publish, e.g., ai files.
- `src/`: 👈 **Write your code here!** See [Writing Code](../writing-code/).
- `package.json`: Contains metadata about the project.

Read more in this guide.


## Developing

The bluprint will install dependencies for you and automatically start a development server. To restart the dev server, use the runner:

```
$ runner start
```


## Building and previewing

1. When you're ready to build your page, the build command will check that you've filled out all the relevant metadata and publish each translation of your page.

  ```
  $ runner build
  ```

2. To preview the built pages for each translation, run the `preview` command which will start a local server that will show you exactly what your page will look like to your readers.

  ```
  $ runner preview
  ```

## Sharing previews

Both the `start` and `preview` commands take an optional `--ngrok` argument that will create a secure (**but public!**) URL you can share with others or use to test your page on a mobile phone. Read more about [ngrok](https://ngrok.com/) on their website.

```
$ runner start --ngrok
```

```
$ runner preview --ngrok
```

## Publishing

Projects are published through our [Reuters graphics server](https://editdata.thomsonreuters.com/Pages/graphics.aspx#/rngs/home). Uploading your files to the server is easy:

```
$ runner upload
```

This command will check your metadata files to make sure you have all the information you need on the page, will build out your project files and finally create the graphics pack and individual editions of your project on the server.

Optionally, you can upload a single locale to the server by passing the locale code to the command:

```
$ runner upload de
```

After you've pushed all your code to the server, you can publish all your editions with:

```
$ runner publish
```
