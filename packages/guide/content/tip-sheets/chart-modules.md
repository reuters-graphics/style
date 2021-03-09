---
title: Using chart modules
description: Step by step guide to using chart modules in your projects
---


## List of chart modules

You can find the list of chart modules [here](https://github.com/reuters-graphics/awesome-charts)

## Using chart modules out of the box

Follow the steps in the README of the chart module's repo.
For example, if you want to use the [categorical bar chart module](https://github.com/reuters-graphics/chart-module-categorical-bar-chart), follow the steps there.

The basic steps are:
1. Run ``` yarn add <ADD REPO URL FOR CHART MODULE HERE>```
2. Import the chart module JS and CSS files into app.js and main.scss
3. Add a div to the .ejs file that would act as the container for the chart
4. Use props to customise charts

NOTE: If you get errors, check that the path files in the import lines -- both in app.js and css -- are correct.

``` import barChart from '@reuters-graphics/chart-module-categorical-bar-chart'; ```


## Customising chart modules

1. Follow the install instruction in the chart module repo's README and run ``` yarn add <ADD REPO URL FOR CHART MODULE HERE>```
2. Run ``` ejector ``` and select the chart module you yarn-added. Select both JS and CSS.
3. Import the js and css files into app.js and main.scss. Make sure you're using the correct path.
4. 
NOTE: When using ejector, you need to tweak the path in the ```import ``` lines that the chart module README gives you.

For example, for this [categorical bar chart module](https://github.com/reuters-graphics/chart-module-categorical-bar-chart), the import lines on its README are:

For JS: ```import barChart from '@reuters-graphics/chart-module-categorical-bar-chart';```

For CSS: ``` @import '~@reuters-graphics/chart-module-categorical-bar-chart/src/scss/chart';```

When using ejector, these two lines should be:
For JS: ```import barChart from './chart-module-categorical-bar-chart';```
For CSS: ``` @import './chart-module-categorical-bar-chart/_chart';```
4. Add a div to the .ejs file that would act as the container for the chart
5. To customise charts further, edit ```index.js``` inside ```js/<name of your chart module>``` and ```_chart.scss``` inside ```scss/<name of your chart module>```
