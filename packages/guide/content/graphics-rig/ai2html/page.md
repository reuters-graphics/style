
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