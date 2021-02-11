---
title: Tech stack
description: Recommended tools for building graphics
---

## Tech stack

---

### Code editor

You can use any text editor to work on graphics, but we recommend [Visual Studio Code](https://code.visualstudio.com/) for three major features built in to VS Code:

- **Snippets** let us package code shortcuts with projects. [Read more.](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
- **Linters** can format your code automatically on save and are an easy way to learn good coding habits.
- **Live share** lets you work on code with others directly in your editor. [Read more.](https://code.visualstudio.com/blogs/2017/11/15/live-share)

VS Code is available for free download [here](https://code.visualstudio.com/).

#### Recommended Extensions

VS Code allows you to install extensions that add additional features to your editor. We recommend the following:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) with the following options:
  - Code Actions on Save: Mode = all
  - Format: Enable = true
  - Package Manager: yarn
- [sort-imports](https://marketplace.visualstudio.com/items?itemName=amatiasq.sort-imports) with the following options:
  - On-save = true
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
- [EJS Language Support](https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support)
- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

#### Formatting JavaScript on save

With the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension installed, your editor can automatically fix minor issues and formatting in your JavaScript code whenever you save a file. Here's how to get it working:

From the menu, open Code > Settings, search "eslint" in the search bar and click the "ESLint" settings under Extensions.

<img src="https://user-images.githubusercontent.com/2772078/107580486-886a7a00-6bee-11eb-916b-563fa9098b61.png" style="height: 250px; margin: 1rem auto 2.25rem;" />

Set the `Eslint › Code Actions On Save: Mode` setting to "all".

<img src="https://user-images.githubusercontent.com/2772078/107580104-fe221600-6bed-11eb-8f65-454130789fd0.png" style="height: 100px; margin: 1rem auto 2.25rem;" />

Now search "save" in the Settings search bar and under `Editor: Code Actions On Save` click to "Edit in settings.json".

<img src="https://user-images.githubusercontent.com/2772078/107580783-0464c200-6bef-11eb-89fc-6fa140badf67.png" style="height: 200px; margin: 1rem auto 2.25rem;" />

Hand edit the editor settings for `codeActionsOnSave` and `formatOnSave` to be these values:

```javascript
{
  // ...
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll": true
  },
  "editor.formatOnSave": false,
  // ...
}
```

Now ESLint will fix formatting and style issues in your code on save, including indentation, const vs. let declarations, semicolon use and more.
