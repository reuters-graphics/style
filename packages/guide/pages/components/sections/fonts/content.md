# Fonts

## Setup

If you haven't already, be sure to install the main style app.

```bash
yarn add @reuters-graphics/style-main
```
# Hed
## Subhed
### Sub-subhed
#### Sub-sub-subhed
##### Sub-sub-sub-subhed

## Default fonts


| Class                   | SCSS variable           | Font family                                                                                                               |
|-------------------------|-------------------------|---------------------------------------------------------------------------------------------------------------------------|
| .font-family-serif      | $font-family-serif      | Georgia, "Times New Roman", Times, serif;                                                                                 |
| .font-family-sans-serif | $font-family-sans-serif | "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif; |
|                         |                         |                                                                                                                           |


### SCSS

Import the font variables in any `.scss` file in your project.

```scss
@import "~@reuters-graphics/style-main/scss/variables/fonts";
```

Now use the them.

```scss
p{
  font-family: $font-family-serif;
}
```
