Translation is a first-class function of the rig. It's also very easy to create multiple versions of your page for each locale you want to publish in.

## Contents

- [Locales directory](#Locales-directory)
- [Creating new locales](#Creating-new-locales)
- [Extracting text](#Extracting-text)
- [Previewing translated pages](#Previewing-translated-pages)

## Locales directory

**All** translatable content goes in the locales directory under a sub-folder named after an [ISO 639-1 two-letter language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

> - locales/
>   - **en/**
>   - **es/**
>   - **de/**

**You must at least have an `en` locale directory.** (Included by default!)

The **folder name is critical** and used as a key throughout the rig to get content and indicate which locale is being built.

Beyond the folder, your content files can be named whatever you like. That said, all translation tools in the rig -- including [localeMarkdown](../writing-code/#localeMarkdown), [localeData](../writing-code/#localeData), [gt.gettext](../writing-code/#gtgettext) and [ttags](../writing-code/#Translation-with-ttag) -- **expect all locale folders to contain the same files.** So be sure each locale folder is a mirror of the others.

> - locales/
>   - en/
>     - **intro.md**
>     - **messages.gettext.po**
>     - **data.json**
>   - de/
>     - **intro.md**
>     - **messages.gettext.po**
>     - **data.json**

## Creating new locales

Creating a new locale is dead simple. Just add a new folder using the [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for your translation.

As a shortcut to scaffold your new locale, you can use the `add-locale` command to create a copy of all the translation files in your `en` locale:

```bash
$ runner add-locale
```

If you *don't* use the command, you'll need to run the `extract-text` command to create `.po` files once you've created the directory and then be sure the new folder mirrors other locales.

## Extracting text

If you've used [gt.gettext](../writing-code/#gtgettext) in your templates or [ttags](../writing-code/#Translation-with-ttag) in your scripts to create translatable strings, use the `extract-text` command to automatically create `.po` files to use for translation.

```
$ runner extract-text
```

Running the command multiple times to pick up new text is safe and won't erase translations you've already done. If you need to start from scratch, you can pass a `--reset` flag to the command.

## Previewing translated pages

As of now, the only way to preview translations is to build the English version of the page. Use the `preview` command to see the page built for your translation, for example at `http://localhost:{port}/de/`.

```
$ runner preview
```
