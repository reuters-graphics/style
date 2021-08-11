### The script
We've reworked our ai2html script a bit. Now it will/can:
-  Automatically generate the media queries depending on the number of artboards you use. You can use upto 5:
    - xs: < 540px
    - sm: 540px to 690px
    - md: 690px to 960px
    - lg: 960px to 1230px
    - xl: 1230px and beyond
-  Works with every font style we load in our projects. (source, menlo, knowledge)
-  It generates divs with background images instead of img tags.
-  It spits out .ejs files instead of .html files.

* * * * * *
➽ Get the ai2html script [here](https://github.com/reuters-graphics/ai2html/blob/master/ai2html.js) 

➽ Get the ai2html graphics template [here](https://github.com/reuters-graphics/style-ai-templates/blob/main/ai-templates/ai2html/ai2html-template.ait).
* * * * * *

### The template
The default template has five artboards. You can remove artboards as you please. 
**Caveat** being you can't remove from the smallest up but only from the largest down. So you *can't* remove xs and keep sm, md and lg. But you *can* remove lg and md, and keep xs and sm.

The latest  Illustrator template can be found in the [style-ai-templates](https://github.com/reuters-graphics/style-ai-templates/blob/5ed26b8d332733f2023b30f80d9a805fcefea715/ai-templates/ai2html/ai2html-template.ait) repo.

### How to use it
1) Make sure you have the ai2html script installed (linked above).

To install, save the **ai2html_newrig.js** file in the Scripts folder for Adobe Illustrator. The path will be something like...

> - Applications/
>   - Adobe Illustrator 2020/
>   - Presets/
>   - en_US/
>   - Scipts/
>   - ai2html.js

NOTE: You’ll need to close and reopen Illustrator in order for it to show up in Illustrator’s dropdown menu.

2) Build your graphic element in Illustrator and customize the layout across each artboard. You can find the Illustrator web template in **ai-templates/ai2html/** directory of the [style-ai-templates](https://github.com/reuters-graphics/style-ai-templates/blob/5ed26b8d332733f2023b30f80d9a805fcefea715/ai-templates/ai2html/ai2html-template.ait) repo (It’s also linked above).

Use the "Base Styles" toolbox as a reference point for typography and style elements like arrow types, axis lines and labels. _Hint: The eye dropper tool is your friend here._

3) When you’re ready to place your artwork, run the ai2hml script from Illustrator `File > Scripts > ai2html`.

This will write your files to a local filepath to be included in your ejs files. The filepath will be **...src/html/your-project-name.ejs**. The background images for the graphic will be saved to the **.../src/static/img/** directory and will automatically work when you place the graphic in the page.

### To place the graphic on your page
Simply include the .ejs file in your working markup. For example, if your main article markup is in the article.ejs file, you might include your graphic like so:

```
<section class='graphic'>
    <%- include('your-project-name.ejs'); %>
</section>
```

### Sizing on the page
The graphics [rig's well widths](https://reuters-graphics.github.io/style/themes/eisbaer/) (wide, wider, etc.) correspond to the ai2html Illustrator template's artboards. To appropriately size the ai2html graphic, add the class that corresponds with the widest artboard you want to show.

Corresponding classes for each Illustrator artboard size:
- XL - `wider`
- LG - `wide`
- MD - _Default, no class needed, fits directly in the main text well_
- SM - `narrow`
- XS - `narrower`


For example, if your widest artboard is the SM artboard (meaning you’re not using the MD, LG or XL artboards), your section tag would include the class ‘narrow’. Like this:

```
<section class='graphic narrow'>
    <%- include('your-project-name.ejs'); %>
</section>
```

#### Skip artboard sizes
If you don't want to make a version of the graphic for every size artboard, you can use the `skip-` class so that artboard size/well width won't display on the page. Here's what the section tag would look like for a wide (LG) graphic that skips the narrow well.

```
<section class='graphic wide skip-narrow'>
    <%- include('your-project-name.ejs'); %>
</section>
```

Here is an [example of the skip class in action](https://graphics.thomsonreuters.com/testfiles/2021/aO3WejrMar/en/).

Note: You only need to "skip" well sizes smaller than the max width you are showing. So if your widest well is `wide` (the LG artboard), you don't need to "skip" the XL artboard. Larger artboards are excluded when you set the initial width of the well with the `wider`, `wide`, `narrow` and `narrower` classes.


### Fluid vs. Fixed (Snap class)
Unless you're using bootstrap, your graphic will default to scaling constantly when resizing the screen. This may be what you want! But if not...

If you don't want your graphic to consitantly scale but rather "snap" to a specific size, you can add the `snap` class. This is great for the consistent label positioning and sizing, but it can lead to undesirably large margins in some contexts. Ex:

```
<section class='graphic snap'>
    <%- include('your-project-name.ejs'); %>
</section>
```

Here is an [example of the snap class in action](https://graphics.thomsonreuters.com/testfiles/2021/aO3WejrMar/en/).



