Put media files (images, videos, etc.) and any other static assets (fonts, etc.) your page may need in the `static` directory.

> - src/
>    - html/
>    - js/
>    - scss/
>    - **static/**

Please note: **Anything you put into this directory will be published with your page**, so keep large raw files or working drafts out of this folder. (Put that stuff in `project-files/`.)

**WARNING:** The graphics server **may reject your project** if you put any non-standard web files in this directory. (Use `project-files/`!)


## Contents

- [Organizing media files](#Organizing-media-files)
- [Referencing media files in your code](#Referencing-media-files-in-your-code)
- [Share image](#Share-image)
- [Responsive images](#Responsive-images)

## Organizing media files

You should always make sub-folders in `src/static/` to organize your media files. For example:

> - src/
>    - static/
>      - **img/**
>        - picture.jpg
>      - **data/**
>         - people.json


## Referencing media files in your code

Media files are always published alongside your index.html page for each locale.

For example, a directory with an image like this ...

> - src/
>   - html/
>     - index.ejs
>   - static/
>     - img/
>       - **picture.jpg**

... will publish like this:


> - index.html
>   - img/
>     - **picture.jpg**

That means you can use a relative path to the image in your code.

```javascript
<img src="./img/picture.jpg" alt="A picture" />
```

You can use the same technique for media used in scripts and styles:

> - static/
>   - data/
>     - **myData.json**
>   - fonts/
>     - **myFont.woff2**

```javascript
fetch('./data/myData.json')
  .then(response => response.json())
  .then(data => { ... });
```

```scss
@font-face {
	font-family: MyFont;
	src: url('./fonts/myFont.woff2') format('woff2');
}
```

In general, you should **always use relative path references** to media. It makes our packages more portable for clients who may wish to publish our page on their own servers.

## Share image

The one exception to the relative path rule is the share image, which must use an absolute path (i.e., with "https://...").

While you should **still put your share image in the `static/img/` directory**, we want to render the absolute reference in `meta` tags.

Luckily, the rig handles this exception for you! Read more on the [Metadata](../metadata) page.

## Responsive images

Images are often the largest parts of any page bundle, and frequently most of that data *is a waste*. A 2400px wide image can be expensive overkill for someone reading your page on a 425px wide device, downloading often **more than 10 times the data needed**.

Using [responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) helps make sure readers are only downloading what they need and, on photo-intensive projects, can dramatically decrease page load time.

The **srcset img tag** lets us specify a set of images at different widths and let the browser pick the one that's optimal for our reader's device. Read more about how it works [here](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#How_do_you_create_responsive_images).

The rig includes a command to quickly generate responsive sets of images (**.jpg only!**) and also outputs the finicky-to-write image tag you can use in your code. Here's how:


Put an image at the largest resolution you want to support in your `static` directory.

> - static/
>   - img/
>     - **bigPicture.jpg**

Now to make a responsive image set, run the srcset command in the terminal:

```
$ runner make-srcset bigPicture.jpg
```

The command will create images at a few standard widths, but you can specify your own:

```
$ runner make-srcset bigPicture.jpg -s 300 -s 600 -s 1200 -s 1500
```

The command will create a new directory with your new images...

> > - static/
>   - img/
>     - bigPicture.jpg
>     - bigPicture/
>       - **600.jpg**
>       - **1200.jpg**
>       - **2400.jpg**
>       - **img.html**

... and inside `img.html` is a prefab img tag with correct relative references to your new responsive images.

```html
<img srcset="img/bill/600.jpg 600w, img/bill/1200.jpg 1200w, img/bill/2400.jpg 2400w" src="img/bill/2400.jpg" alt="WRITE ME">
```

Use the tag directly in your code. You can safely delete the original image if you're happy with the responsive sized ones.
