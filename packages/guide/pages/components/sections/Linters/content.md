# Linters

### JavaScript

Use [eslint](https://eslint.org/) with our [custom config](https://github.com/reuters-graphics/style/tree/master/packages/eslint-config), which extends [JavaScript Standard Style](https://github.com/standard/eslint-config-standard).

```bash
yarn add -D @reuters-graphics/eslint-config eslint
```

Add an `.eslintrc.json` to the root of your project with the following:

```javascript
{
  "root": true,
  "extends": "@reuters-graphics/eslint-config"
}
```

### SCSS

Use [stylelint](https://stylelint.io/) with our [custom config](https://github.com/reuters-graphics/style/tree/master/packages/stylelint-config), which extends [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard).


```bash
yarn add -D @reuters-graphics/stylelint-config stylelint
```

Add an `.stylelintrc.json` to the root of your project with the following:

```javascript
{
  "extends": "@reuters-graphics/stylelint-config"
}
```
