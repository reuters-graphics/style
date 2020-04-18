Metadata is incredibly important to making sure your page is discoverable and attracts a strong audience on social media. The rig ensures your page is filled out with necessary metadata before you publish and by default won't build your package unless you have the minimum metadata filled in.

## Contents

- [Where is the metadata?](#Where-is-the-metadata?)
  - [Locale-specific metadata](#Locale-specific-metadata)
  - [Project-wide metadata](#Project-wide-metadata)
- [What's in the metadata?](#Whats-in-the-metadata?)
  - [Locale metadata reference](#Locale-metadata-reference)
  - [Package metadata reference](#Package-metadata-reference)
- [How do I fill out metadata?](#How-do-I-fill-out-metadata?)

## Where is the metadata?

The rig injects metatags automatically from JSON files when building your package.

The metadata files are located in two places:

#### Locale-specific metadata

Translatable metadata is kept with all other locale-specific content in the `locales/` directory.

> - locales/
>   - en/
>     - **metadata.json**
>   - de/
>     - **metadata.json**

#### Package-wide metadata

Other metadata that applies to all pages regardless of locale is kept in your project's `package.json` under a `reuters` key.

> - bin/
> - config/
> - locales/
> - src/
> - **package.json**

## What's in the metadata?

#### Locale metadata reference

```js
{
  // SLUGS used to build published page URLs
  "slugs": {
    "root": "HEALTH-CORONAVIRUS", // The main topic-related slug
    "wild": "ITALY" // A more project-specific slug
  },

  // SEO title & description used for search results
  "seoTitle": "Italy's coronavirus crisis: Maps, statistics and analysis",
  "seoDescription": "Tracking the daily toll of the virus with the latest data",

  // SHARE title & description used for social share cards
  "shareTitle": "Italy's coronavirus crisis",
  "shareDescription": "Tracking the daily toll of the virus",

  // The share image
  "image": {
    "path": "img/share.jpg",
    "width": 1200,
    "height": 600
  },

  // Graphics server specific IDs and URLs for this locale
  "editions": {
    "media": {
      "interactive": {
        "id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
        "url": "https://graphics.reuters.com/HEALTH-CORONAVIRUS-ITALY/XXXXXXXXXXX/"
      },
      "media-interactive": {
        "id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
      }
    },
    "public": {
      "interactive": {
        "id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
        "url": "https://graphics.reuters.com/HEALTH-CORONAVIRUS-ITALY/XXXXXXXXXXX/"
      }
    }
  }
}
```

Note:  Not all of this metadata may be filled in during development.

#### Package metadata reference

```js
{
  // ...
  // Metadata is in the "reuters" key in package.json
  "reuters": {

    // IDs for the card and board in Trello
    "trello": {
      "card": "XXXXXXXXXXXXXXXXXXXXXXXX",
      "board": "XXXXXXXXXXXXXXXXXXXXXXXX"
    },

    // A URI used to publish previews to the testfiles bucket on AWS
    "awsPreviewURI": "YYYY/XXXXXXXXXXXX",

    // The desk the package is publishing from
    "desk": "london",

    // Publish date for the project
    "publishDate": "2020-04-18T13:00:02.789Z",

    // An array of package authors
    "authors": [
      {
        "name": "Jon McClure",
        "link": "https://www.twitter.com/JonRMcClure"
      }
    ],

    // Referral links used to create referrals at the end of the page, up to 4
    "referrals": [
      "https://..."
    ],

    // The ID of the graphic package in the graphics server
    "graphicId": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
  }
}

```

Note:  Not all of this metadata may be filled in during development.

## How do I fill out metadata?

Most metadata is filled in automatically by the rig.

When you build your page, the rig will prompt you for any metadata you have to supply, like the share and SEO titles and descriptions.

```
$ runner build
```

You can add or edit metadata in their respective JSON files, BUT generally **you should not edit any of the IDs or URLs related to external platforms like the graphics server, Trello or AWS.**
