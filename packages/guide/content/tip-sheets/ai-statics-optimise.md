---
title: Optimise and export statics from Illustrator # Required!
description: Export crisp jpg and optimised EPS of AI flat graphics # Required!
categories: # Optional...
  - tools 
  - illustrator
---


## Export crisp and optimised flat-graphics from Adobe Illustrator

Flat graphics are a common part of our workflow for breaking news as well as for moving assets to clients. These are used both in print and digital across platforms, including image-embeds in Reuters text stories. Hence it is important to export crisp and optimised flat graphics from Illustrator.

### 📂 Folder structure
This is a generic folder structure for flat graphics, which is zipped and uploaded to RNGS. It is important to keep the zippack size as small as possible and definitely below 100mb.
```
+- [SLUG-AS-FOLDERNAME]
  +- EPS
    +- [SLUG-AS-FILENAME].eps
    +- [SLUG-AS-FILENAME].jpg
  +- IMG
    +- [SLUG-AS-FILENAME].jpg
```


### 📃 Graphics template
If you do not have a template, you can get the latest [here](https://github.com/reuters-graphics/style-ai-templates/tree/main/ai-templates/flat)


### ⚙️ Export preferences for EPS
 - `File` > `Save As` > `Illustrator EPS`

 - Choose your artboards to export. Make sure raster layers (e.g. imported images) are embedded and not merely linked.
 ![image](https://user-images.githubusercontent.com/7580745/144425776-a4002b83-faa6-4b97-9092-a1d08f4e07c1.png)


 - Change the default export version to an old one like CS5 (Recent versions are incompatible with many CMS). Keep the other settings as follows. If your graphic uses gradient meshes, check the box accordingly for accurate rendering.
![image](https://user-images.githubusercontent.com/7580745/144425957-ed7ca778-9d0e-46dd-84b6-729f48a5d877.png)





### ⚙️ Export preferences for Image (jpg only)
 - `File` > `Export` > `Save for Web`

 - `Format: jpg` `Quality: 100%` `Size: 200%` `Rendering: Type Optimized` 
![image](https://user-images.githubusercontent.com/7580745/144426597-1c4f7746-a3cf-4977-a5de-339625078fb4.png)


## Additional tips

### 💡 Pixel-perfect graphics
If your graphic contains lots of lines that need to appear crisp or even otherwise, consider using the `Make Pixel Perfect` feature. Right click on any path and select the option. [Read More](https://helpx.adobe.com/illustrator/using/pixel-perfect.html)

**DO NOT USE THIS ON DATA-BOUND CHART ELEMENTS AS IT WILL MOVE THINGS FROM THEIR ACTUAL PLACES!**
![image](https://user-images.githubusercontent.com/7580745/144450326-4270c8b0-d8a3-4c65-a2b9-50f828c99237.png)


### 💡 Crisp arrows without art optimisation
When you export images with `Rendering: Type Optimized` instead of `Rendering: Art Optimized`, thin lines like arrows can get blurry because of fuzzy stroke rendering. One way to avoid that is to convert your stroke based elements to outlines (arrow line and head gets separated into filled shapes)
![image](https://user-images.githubusercontent.com/7580745/144431205-2934f0b9-0818-4a63-b260-8b34df3c7ad5.png)


### 💡 Handling hundreds of paths (e.g. in maps)
Lots of paths can bloat your EPS files. If possible, group together paths with similar appearance properties and convert into a compound path/merged shapes. Worst case scennario, convert the compound polygons (if you think it won't need editing, like vegetation polygons) into a 100-150ppi raster.
![image](https://user-images.githubusercontent.com/7580745/144450472-4e0f936b-44a6-4693-9792-49e3343a4280.png)


### 💡 Optimising Raster layers
Illustrator imports images as links or embeds. High-res images, when embedded, can bloat up the EPS files. Make sure you re-rasterise them into a lower resolution before exporting into EPS. Typical resolutions go as `Screen: 72ppi` `Medium: 150ppi` `Print: 300ppi`. A good rule of thumb is to try a medium resolution to preserve details for print. Go lower if reqiured.
![image](https://user-images.githubusercontent.com/7580745/144450897-a54bc721-38c3-4bc3-9012-3786f68411e2.png)


### 💡 Shipping clean files for clients
The EPS files are actually meant for clients to edit and reuse as they see fit. It goes without saying that the files should be made easy to work with. Delete scratch layers and hidden objects. Keep the layers organised, unlocked and named (as much as possible while chasing a deadline)!
