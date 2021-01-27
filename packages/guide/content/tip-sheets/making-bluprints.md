---
title: Making templates with bluprint
description: Make your code easily reusable and shareable.
categories:
  - templates
  - tools
---

## Making templates with bluprint

Reusing code is the easiest way to speed up your dev time...

[bluprint](https://github.com/reuters-graphics/bluprint), our in-house scaffolding engine, makes it extremely easy to create templates you can use to build your next project.


### What's a bluprint?

A bluprint is any code base you want to use as a template. Big ones, small ones; doesn't matter -- anything from complex tools like the graphics rig to a simple chart you know you'll make again.

### How do I make a bluprint?

Start by installing bluprint:

```
$ yarn global add @reuters-graphics/bluprint
```

Now, there are only two things you need to do to make any code into a bluprint:

1. Add a `.bluprintrc` file to the root folder of your project template
2. Commit your code to GitHub

The bluprint CLI makes it easy to create a correctly formatted `.bluprintrc`. In the root of your project, just run:

```
$ bluprint new
```

At a minimum, all you need is to give your bluprint a name, but there's lots more you can do to templatize your code. Read more in [bluprint's docs](https://github.com/reuters-graphics/bluprint), especially the section about [Actions](https://github.com/reuters-graphics/bluprint#%EF%B8%8F-actions), which you can use to customize your files for each project.

### How do I use my new bluprint?

Once you've committed your code to GitHub with a `.bluprintrc` file, you can register your bluprint with the CLI.

```bash
$ bluprint add reuters-graphics/<your repo>
```

Now create a new directory for your project and use the CLI to start scaffolding your project:

```bash
$ mkdir my-new-project
$ cd my-new-project
$ bluprint start
```

### 📽️ Video

Watch a video [tutorial](TK).
