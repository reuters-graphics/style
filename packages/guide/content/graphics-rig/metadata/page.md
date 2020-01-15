Metadata is incredibly important to making sure your page is discoverable and attracts a strong audience on social media. The rig ensures your page is filled out with necessary metadata before you publish and by default won't build your package unless you have the minimum metadata filled in.

## Contents

- [Where is the metadata?](#Where-is-the-metadata?)
- [How do I fill out metadata?](#How-do-I-fill-out-metadata?)
- [What metadata is required?](#What-metadata-is-required?)

## Where is the metadata?

You may notice a conspicuous absence of metatags in our page EJS templates. The rig injects metatags automatically from JSON files when building your package.

The metadata files are located in two places:

1. Translatable metadata is kept with all other locale-specific content in the `locales/` directory.

2. Other metadata that applies to all pages regardless of locale is kept in your project's `package.json` under a `reuters` key.

> - locales
>   - en
>     - **metadata.json**
>   - de
>     - **metadata.json**
> - **package.json**


## How do I fill out metadata?

The easiest way is to build your project. The `build` command will check your metadata, create any missing `metadata.json` files in your locales and prompt you for any pieces of required information that are missing. Going through the prompt will create the minimum metadata you need to publish your page.

```
$ yarn build
```

If you need to edit or add to your metadata, you can do so in the locale-specific metadata files or in the `reuters` key in `package.json`.

## What metadata is required?

**Required from you**

*For each locale:*
- A title and description optimized for sharing on social media
- A title and description optimized for search
- A path to a share image in `src/static/img` (Can be the same for each locale.)

*For the package:*
- At least one author

**Required but filled in automatically by the rig**

*For each locale:*
- The dimensions of the share image
- The ID and URL of each locale page

*For the package:*
- Publish date
- The latest update date, if there was one
- The workspace ID of the package on the graphics server

**Optional metadata from you**

*For the package:*
- Referral links
- Additional authors
