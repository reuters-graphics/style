## Adding charter styles

You will need to import the charter styles into main.scss.

```scss
@import '~ReutersCharter/sass/chartstyles';
```

## Import charter into your JS

You will need to import the the charter into main.js.

```js
import ReutersCharter from 'ReutersCharter';
```

Some settings in the charter block rely on d3 date conventions, so if you have not already imported d3 you may need to import a few modules, depending on your settings. 


```js
let formatter = require('d3-format');
let d3 = Object.assign(
  formatter,
  require('d3-fetch'),
  require('d3-time-format')
);
```


## Charter block.

I plan to circle back and actually document ALL OF THESE OPTIONS. For now, here is the whole shibazz. 

```js
let stockChart = new ReutersCharter.BarChart({
	el: "#reutersGraphic-chart1",
	hasPym: isEmbedded,
	
	////////////////////////////
	///// DATA PROCESSING //////
	////////////////////////////
	
	dataURL: '//d3sl9l9bcxfb5q.cloudfront.net/json/mw-disney-earns',
	//dataTransformation:"none", //none, changePrePeriod, cumulativeTotal, cumulativeChange, percentChange
	//divisor:.001,	
	//multiDataColumns:{"gpd":"GDP","unemployment":"Unemployment"}, //can set as an object, or as two arrays below.
	//multiDataColumns:["gpd","unemployment"],//can use value, changePrePeriod, cumulativeTotal, cumulativeChange, percentChange
	//multiDataLabels:[gettext("VALUE"),gettext("PERCENT")],
	//xValue:'days', //for scatter plots, or two linear scales of line charts.
	//yValue:'otherThing',
	//xValueSort:"none", //will not sort bespoke xValues

	///////////////////////////////////
	///// COLOR AND WHAT TO PLOT //////
	///////////////////////////////////

	//columnNames:{google:gettext("Google"), apple:gettext("Apple")}, // undefined uses sheet headers, object will map, array matches columnNamesDisplay
	//colors: [blue3, purple3,orange3, red3,yellow3],  //array or mapped object
	//columnNamesDisplay:[gettext("Bob"),gettext("Jerry")], // only use this if you are using an array for columnNames

	///////////////////////////////////
	///// CHART DIMENSIONS       //////
	///////////////////////////////////

	//margin:{top:100},
	height:220, //if < 10 - ratio , if over 10 - hard height.  undefined - square

	///////////////////////////////////
	///// AXIS AND TICKS         //////
	///////////////////////////////////
	
	//YTickLabel: [[gettext("$"),gettext("cows")]], //  \u00A0  - use that code for a space.
	//xScaleTicks: 5,
	//yScaleTicks:5,
	//yScaleVals: [0,100],
	//xScaleVals: [parseDate("1/1/16"),parseDate("6/1/16"),parseDate("1/1/17")],
	//yScaleMin(){return 0}, // can overwrite yScaleMax, yScaleMin, xScaleMax, xScaleMin			
	//yorient:"Right",
	//xorient:"Top",
	//yTickFormat (d,i,nodes) {
	//	return d
    //},    
	//xTickFormat  (d,i,nodes)  {
	//	return d
    //},
    //scaleNumbFormat:true, //activating will force tick values to be formatted by number formatter.	
    //includeXAxis:false,
    //includeYAxis:false,	
	//xAxisLineLength:"short", //long or short or none. long will go all the way across, but not under the tick numbers
	//yAxisLineLength:"short",				


	///////////////////////////////////
	///// SORTING                //////
	///////////////////////////////////
	
	//categorySort:"none", //ascending, descending, alphabetical, none, array
	//groupSort:"descending", //ascending, descending,  none, array IF NONE: will match order of column names above. if those undefined, will be order in data.

	///////////////////////////////////
	///// DATE PARSE AND FORMAT  //////
	///////////////////////////////////

	//dateFormat:d3.timeFormat("%b %Y"),
	//dateParse:d3.timeParse("%d/%m/%y"),
	//quarterFormat:true,					

	///////////////////////////////////
	///// CHARTING OPTIONS       //////
	///////////////////////////////////

	//colorUpDown:true,
	//colorByCat:true,	
	//hashAfterDate:"01/01/2016",
	//markDataPoints:true,
	//lineType: "linear",//Step, StepAfter, StepBefore
	//hasRecessions: true,	
	
	///////////////////////////////////
	///// LEGEND                 //////
	///////////////////////////////////
	
	//hasLegend: false,
	//topLegend:true,
	//chartBreakPoint:500, //when do you want the legend to go up top
	//navSpacer:true,

	///////////////////////////////////
	///// LAYOUT                 //////
	///////////////////////////////////
	
	//horizontal:true,
	//chartLayout:"sideBySide", // basic,stackTotal, stackPercent, fillLines, sideBySide, onTopOf, outlineBar
	//chartLayoutLabels:["basic", "sideBySide"], //define this, and buttons appear
	//animateOnScroll:true,

	///////////////////////////////////
	///// TOOLTIP                //////
	///////////////////////////////////

	//showTip:"off",	//tip will come on if no legend.  tip will come on if showTip:true. Tip will not come on at all if showTip:"off"
	//showZeros:true, //tooltip will not skip over zero values
	//tipNumbFormat (d)  {		
	//	if (isNaN(d) === true){return "N/A";}else{
	//		return this.dataLabels[0] + this.numbFormat(d) + " " + this.dataLabels[1] ;				
	//	}				
	//},
	//numbFormat: d3.format(",.2f"),

	///////////////////////////////////
	///// TEMPLATES              //////
	///////////////////////////////////

	//tipTemplate:tooltip,
	//chartTemplate:chartTemplate,
	//legendTemplate:legendTemplate,
	//timelineTemplate:tooltipTimeline,	

	///////////////////////////////////
	///// DATASTREAM             //////
	///////////////////////////////////

	//dataStreamOpts:{
	//	dataSeries:3,
	//	lookup:{
	//		"PCHV#(GOLDUSD,YTD)":gettext("Gold"),
	//		"(1/(JAPAYE$))":gettext("another thing")
	//	}					
	//}
	
	/////////////////////////
	///// POLLING     //////
	////////////////////////
	//IF HORIZONTAL BAR, REQUIRES YOU SET COLUMN NAME AND COLOR AS OBJECT
	//isPoll:true,
	//moeColumn:"ci",
	//leftBarCol:"contact",
	//rightBarCol:"leaks",
	//centerCol:"dk",
	
	//annotationNotePadding:15,
	//annotationDebug:false,
	//annotations:annotations,

	/////////////////////////
	///// scatter     //////
	////////////////////////
	//idField:"id",
	//colorValue:"colors",
	//rValue:{
		//data:"columnName", // a column in your data OR an integer
		//multiplier:0.6 // an integer
	//},
	//xValue:'google', 
	//yValue:'apple',
	//simpleTips:true,
	//scaleLabels:{
	//	x:"Inflation",
	//	y:"Unemployment"
	//}
	// how you want these field displayed, "none" turns them off, can also turn off date:"none",category:"none",colorValue:"none"
	//tipValuesDisplay:{rValue:"GDP",xValue:"Range",yValue:"Price"}, 
	//hasLegend:"off", //legend will appear if you have a color value, you can force it off if you so desire.

})

```

## Charter listeners.

You can add bespoke code after flagged events in a chart. I will document this further, promise. 


```js
stockChart.on("chart:rendered", ()=>{
	let self = stockChart
	self.svg.append("line")
		.attrs({
			x1:0,
			x2:self.width,
			y1:0,
			y2:self.height
		})
})
```


## Parsing Datastream data.

Redundant at this point, but i'll document this.

```js
d3.json("//graphics.reuters.com/COMMODITIES-METALS/0100317Z2RY/assetperformance.json").then( (data) => {
		
	let commodData = new ReutersCharter.DataStreamParse({data:data})
	console.log(commodData);

	const dataStreamData = new ReutersCharter.DataStreamParse({
		data:data,
		dataSeries:3,
		lookup:{
			"PCHV#(GOLDUSD,YTD)":gettext("Gold"),
			"(1/(JAPAYE$))":gettext("another thing")
		}
	})
	
	console.log(dataStreamData)

})
```
