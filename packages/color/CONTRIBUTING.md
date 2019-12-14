![](../../badge.svg)

# Contributing

### Changing colors or SCSS variables

1. Change colors or SCSS variables within one of the CSVs in the `schemes/` directory.

2. Rebuild and publish the package from the root of `style` with lerna.

  ```
  $ lerna run build
  $ lerna publish
  ```

### Adding new schemes

1. Create a new CSV in the `schemes/` directory and add colors and SCSS variables. Your CSV should be in this format:

  ```
  hex, variables
  #ffffff, $white
  ```
2. Import the your new scheme in `src/index.js` and add it to the default export:

  ```javascript
  import myNewScheme from '../schemes/myNewScheme.csv';
  import scheme from './colorScheme';

  export const myScheme = scheme(myNewScheme);

  export default {
    // ...
    myScheme,
  };

  ```

3. Rebuild and publish the package from the root of `style` with lerna.

  ```
  $ lerna run build
  $ lerna publish
  ```
