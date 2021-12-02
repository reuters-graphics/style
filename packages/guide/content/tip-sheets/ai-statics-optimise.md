---
title: Optimise and export statics from Illustrator # Required!
description: Export crisp jpg/png and optimised EPS of AI flat graphics # Required!
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
    +- [SLUG-AS-FILENAME].jpg/png
  +- IMG
    +- [SLUG-AS-FILENAME].jpg/png
```


### 📃 Graphics template
If you do not have a template, you can get the latest [here](https://github.com/reuters-graphics/style-ai-templates/tree/main/ai-templates/flat)


### ⚙️ Export preferences for EPS
 - `File` > `Save As` > `Illustrator EPS`

 - Choose your artboards to export
 ![image](https://user-images.githubusercontent.com/7580745/144425776-a4002b83-faa6-4b97-9092-a1d08f4e07c1.png)


 - Change the default export version to an old one like CS5 (Recent versions are incompatible with many CMS). Keep the other settings as follows. If your graphic uses gradient meshes, check the box accordingly for accurate rendering.
![image](https://user-images.githubusercontent.com/7580745/144425957-ed7ca778-9d0e-46dd-84b6-729f48a5d877.png)





### ⚙️ Export preferences for Image
 - `File` > `Export` > `Save for Web`

 - For JPEG - `Quality: 100%` `Size: 200%` `Rendering: Type Optimized` 
 - For PNG - `Format: PNG-24` `Transparency: Off` `Size: 200%` `Rendering: Type Optimized`
![image](https://user-images.githubusercontent.com/7580745/144426597-1c4f7746-a3cf-4977-a5de-339625078fb4.png)


## Additional tips

### 💡 Pixel-perfect graphics
If your graphic contains lots of lines that need to appear crisp or even otherwise, consider using the `Make Pixel Perfect` feature. Right click on any path and select the option. [Read More](https://helpx.adobe.com/illustrator/using/pixel-perfect.html)

**DO NOT USE THIS ON DATA-BOUND CHART ELEMENTS AS IT WILL MOVE THINGS FROM THEIR ACTUAL PLACES!**

### 💡 Crip arrows without art optimisation
When you export images with `Rendering: Type Optimized` instead of `Rendering: Art Optimized`, thin lines like arrows can get blurry because of fuzzy stroke rendering. One way to avoid that is to convert your stroke based elements to 
![image](https://user-images.githubusercontent.com/7580745/144431205-2934f0b9-0818-4a63-b260-8b34df3c7ad5.png)

