![](../../badge.svg)

# Contributing

Colors schemes are kept as CSV files in this repo, which are then imported into a custom library and rendered to SCSS files.

### Changing schemes

1. Change colors within one of the CSVs in the `schemes/` directory.

2. Rebuild and publish the package from the root of `style` with [lerna](https://lerna.js.org/).

  ```
  $ lerna run build
  $ lerna publish
  ```

### Adding new schemes

1. Create a new CSV in the `schemes/` directory and add colors and SCSS variables (space-separated). Your CSV should be in the following format:

  ```
  hex, variables
  #ffffff, $white $background
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
