The Graphics Rig is the primary tool for building interactive and graphic pages at Reuters Graphics.

## Prerequisites

The rig requires **Node version 12.0 - 13.9** (use [nvm](https://github.com/nvm-sh/nvm) if you need to manage multiple versions of Node...) and [the Yarn package manager](https://legacy.yarnpkg.com/en/docs/install).

You also must have a **GitHub [personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)** with "repo" permissions and single sign-on enabled to access the ["tr" GitHub org](https://github.com/tr). That token must be saved [to your OSX Keychain](https://help.github.com/en/github/using-git/updating-credentials-from-the-osx-keychain).



## Starting a project

::: aside tip

### If this is your first time...

... you'll need to run through a couple additional setup steps.

#### Dependencies

**First,** install our task [runner](https://github.com/reuters-graphics/runner) and our scaffolding engine, [bluprint](https://github.com/reuters-graphics/bluprint), **globally**.

```bash
$ yarn global add @reuters-graphics/runner
$ yarn global add @reuters-graphics/bluprint
```

**Second,** create a GitHub [personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) (preferably a _different token_ to the one you use to access tr GitHub so it won't expire) and register the token with bluprint's CLI:

  ```bash
  $ bluprint token <your github token>
  ```


**Now,** add the graphics rig bluprint to bluprint's CLI:

  ```bash
  $ bluprint add reuters-graphics/bluprint_graphics-rig
  ```

#### Passwords and keys

When you first use the graphics rig bluprint, you'll be asked several questions that will be used to create a profile on your machine with information about your byline as well as some credentials you'll need to publish your work.

Make sure you have the following credentials on hand to answer those prompts:

- **username** (your user ID number) & **password** to publish to the graphics server
- AWS **access key** & **secret access key** with rights to publish to the graphics AWS S3 bucket
- A **key** & **token** to access the Trello API.

If you don't have graphics server credentials, reach out to an editor to get them for you. AWS & Trello credentials are kept in the [Global Graphics 1Password account](https://reutersglobalgraphics.1password.com/) (look for passwords with the "Graphics rig" tag).

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


## Basic commands

### Developing

The bluprint will install dependencies for you and automatically start a development server. To restart the dev server, use the runner:

```
$ runner start
```


### Previewing locally

To preview what your pages will look like after they've been compiled and minified, run the `preview` command which will start a local server. This will show you exactly what your page will look like to your readers.

  ```
  $ runner preview
  ```

You can change the locale at the end of the URL to see other translations.

  ```
  https://localhost:8000/en/
  ```

### Sharing previews

Both the `start` and `preview` commands take an optional `--ngrok` argument that will create a secure (**but public!**) URL you can share with others or use to test your page on a mobile phone. Read more about [ngrok](https://ngrok.com/) on their website.

```
$ runner start --ngrok
```

```
$ runner preview --ngrok
```

You can also publish your project to a testfiles directory on AWS.

```
$ runner preview:aws
```

### Publishing

Projects are published through our [Reuters graphics server](https://sphinx.thomsonreuters.com/graphics/?#/group/rngs). Publishing requires **two** steps.

First, upload your project files to the server:

```
$ runner upload
```

The "upload" command will check your metadata files to make sure you have all the information you need on the page, will build out your project files and finally create the graphics pack and individual editions of your project on the server.

Optionally, you can upload a single locale to the server by passing the locale code to the command:

```
$ runner upload de
```

After you've pushed all your code to the server, you can **publish** all your editions with:

```
$ runner publish
```

Anytime you upload any updates to your project, you must republish the entire package.
