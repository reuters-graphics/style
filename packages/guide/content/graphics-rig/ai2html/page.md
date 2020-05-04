
### The script
We've reworked our ai2html script a bit. Now it will/can:
-  Automatically generate the media queries depending on the number of artboards you use. You can use upto 5:
    - xs: < 575px
    - sm: 575px to 765px
    - md: 765px to 992px
    - lg: 992px to 1300px
    - xl: 1300px and beyond
-  Works with every font style we load in our projects. (source, menlo, knowledge)
-  It generates divs with background images instead of img tags.
-  It spits out .ejs files instead of .html files.

The new script is here: https://github.com/reuters-graphics/ai2html/blob/master/ai2html_newrig.js

### The template
The default template has four artboards since that seems to be the most common number people use. You can add a fifth larger one/remove as you please. 
**Caveat** being you can't remove from the smallest up but only from the largest down. So you *can't* remove xs and keep sm, md and lg. But you *can* remove lg and md, and keep xs and sm.

The template is in the project-files folder everytime you create a new graphics project with the rig. It can also be found here:
https://github.com/reuters-graphics/ai2html/blob/master/Reuters-Template/ai2html-template_newrig.ait


### The script
We've reworked our ai2html script a bit. Now it will/can:
-  Automatically generate the media queries depending on the number of artboards you use. You can use upto 5:
    - xs: < 575px
    - sm: 575px to 765px
    - md: 765px to 992px
    - lg: 992px to 1300px
    - xl: 1300px and beyond
-  Works with every font style we load in our projects. (source, menlo, knowledge)
-  It generates divs with background images instead of img tags.
-  It spits out .ejs files instead of .html files.

The new script is here: https://github.com/reuters-graphics/ai2html/blob/master/ai2html_newrig.js

### The template
The default template has four artboards since that seems to be the most common number people use. You can add a fifth larger one/remove as you please. 
**Caveat** being you can't remove from the smallest up but only from the largest down. So you *can't* remove xs and keep sm, md and lg. But you *can* remove lg and md, and keep xs and sm.

The template is in the [project-files folder](https://github.com/reuters-graphics/bluprint_graphics-rig/blob/master/project-files/ai2html-template_newrig.ait) everytime you create a new graphics project with the rig.

### How to use it
1) Make sure you have the ai2html script installed (linked above).

To install, save the **ai2html_newrig.js** file in the Scripts folder for Adobe Illustrator. The path will be something like **/Applications/Adobe Illustrator 2020/Presets/en_US/Scripts** depending on your version of Illustrator.

You’ll need to close and reopen Illustrator in order for it to show up in the dropdown menu.

2) Build your graphic element in Illustrator and customize the layout across each artboard. You can find the Illustrator web template in the **project-files/** directory of the [Bluprint graphics rig](https://github.com/reuters-graphics/bluprint_graphics-rig) (It’s also linked above).

Use the "Base Styles" toolbox as a reference point for typography and style elements like arrow types, axis lines and labels. _Hint: The eye dropper tool is your friend here._

3) When you’re ready to place your artwork, run the ai2hml script from Illustrator **File > Scripts > ai2html**.

This will write your files to a local filepath to be included in your ejs files. The filepath will be **...src/html/your-project-name.ejs**. The background images for the graphic will be saved to the **.../src/static/img/** directory and will automatically work when you place the graphic in the page.

### To place the graphic on your page
Simply include the .ejs file in your working markup. For example, if your main article markup is in the article.ejs file, you might include your graphic like so:

```
<figure class='graphic-item'>
    <%- include('your-project-name.ejs'); %>
</figure>
```

