# Linters

Linters help clean up your code, make it much easier to spot bugs and are courteous to people who may inherit your work. Most can be run in your favorite code editor and configured to fix many issues automatically on save. They'll also give you hints on best practices as you go, which is an easy way to become a stronger, more consistent coder.

### JavaScript

Use [eslint](https://eslint.org/) with our [custom config](https://github.com/reuters-graphics/style/tree/master/packages/eslint-config), which extends [JavaScript Standard Style](https://github.com/standard/eslint-config-standard).

Want to know what's in it? Well, we like [single quotes](https://eslint.org/docs/rules/quotes#single), [semi-colons](https://eslint.org/docs/rules/semi#always), [comma-dangles](https://eslint.org/docs/rules/comma-dangle#always) & [multilines](https://eslint.org/docs/rules/array-element-newline#multiline), among other things. But that's just our opinion, man.

Here's how to use it:

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

Look at the [integrations available](https://eslint.org/docs/user-guide/integrations) for your editor.

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

Check out the [integrations available](https://stylelint.io/user-guide/integrations/editor) for your editor.
