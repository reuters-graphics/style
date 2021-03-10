---
title: Using chart modules
description: Step by step guide to using chart modules in your projects
categories:
  - templates
  - tools
  - chart module
---


## Where to find chart modules

You can find chart modules [here](https://github.com/reuters-graphics/awesome-charts)

## Using chart modules out of the box

Follow the steps in the README of the chart module's repo.

The basic steps are:

1. Run ``` yarn add <ADD REPO URL FOR CHART MODULE HERE>```
2. Add a div to the .ejs file that would act as the container for the chart
3. Import the chart module JS and CSS files into app.js and main.scss
4. Use props to customise charts

__NOTE: If you get errors, check that the path files in the import lines, both in app.js and css, are correct.__

For example:
If you're using the [categorical bar chart module](https://github.com/reuters-graphics/chart-module-categorical-bar-chart), double check that the path in ``` import barChart from '@reuters-graphics/chart-module-categorical-bar-chart'; ``` matches the filename in ``` node_modules/@reuters-graphics```

![Screenshot 2021-03-09 at 8 47 23 PM](https://user-images.githubusercontent.com/62298563/110563142-d785cb00-8118-11eb-8e81-90c36d4fa4aa.png)



## Customising chart modules

1. Follow the install instruction in the chart module repo's README and run ``` yarn add <ADD REPO URL FOR CHART MODULE HERE>```
2. Run ``` ejector ``` and select the chart module you yarn-added. Select both JS and CSS.
3. Add a div to the .ejs file that would act as the container for the chart
4. Import the js and css files into app.js and main.scss. Make sure you're using the correct path.
5. Use props to customise charts
6. Further customise charts by tweaking ``` js/<chart module name>/index.js``` and ``` scss/<chart module name>/_chart.scss```

### IMPORTANT: When using ejector, you need to tweak the paths in the ```import ``` lines.

For example, for this [categorical bar chart module](https://github.com/reuters-graphics/chart-module-categorical-bar-chart), the import lines on its README are:

For JS:
```import barChart from '@reuters-graphics/chart-module-categorical-bar-chart';```

For CSS: 
``` @import '~@reuters-graphics/chart-module-categorical-bar-chart/src/scss/chart';```

When using ejector, these two lines should be:

For JS: 
```import barChart from './chart-module-categorical-bar-chart';```
For CSS:
``` @import './chart-module-categorical-bar-chart/_chart';```
