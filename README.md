# KeralaMist.in

Premium holiday stay website for KeralaMist.in (Vagamon, Kerala).
Built with Next.js (App Router), TypeScript, Tailwind CSS and Lucide icons.

## Requirements

- Node.js 20.9 or newer
- npm

## Install and run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. To test the production build:

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New > Project** and import the repository.
3. Keep the default settings (framework: Next.js) and press **Deploy**.
4. Under **Settings > Domains** add `keralamist.in` and follow the DNS steps.

Every push to the main branch redeploys the site.
If the live domain is not `https://www.keralamist.in`, change `SITE.url` in `src/lib/site.ts`
(it is used for the sitemap, robots.txt and social sharing links).

## Project structure

```
public/images/
  logo/                     KeralaMist logo
  hero/                     banner and section photographs
  properties/<slug>/        photographs for each property
src/
  app/
    page.tsx                Homepage
    about-us/               About Us
    properties/             All properties
    properties/[slug]/      Individual property pages
    contact-us/             Contact Us (enquiry form opens WhatsApp)
    terms-and-conditions/   Terms & Conditions
    sitemap.ts, robots.ts   SEO files
  components/               Header, Footer, PropertyCard, Gallery, etc.
  lib/
    site.ts                 Phone numbers, email, Instagram, WhatsApp messages, navigation
    properties.ts           All property names, descriptions, features and photos
  fonts/                    Inter and Playfair Display (Google Fonts, self-hosted)
```

## Replace or add property photographs

1. Put the photo in `public/images/properties/<slug>/`, for example
   `public/images/properties/eagle-camp/pool.jpg`. Use JPG or WebP, landscape,
   ideally 1600px wide or more.
2. To replace the card photo, overwrite `cover.jpg` in that folder.
3. To add gallery photos, open `src/lib/properties.ts` and add them to that property's `gallery`:

```ts
gallery: [
  { src: "/images/properties/eagle-camp/pool.jpg", alt: "Swimming pool at Eagle Camp, Vagamon" },
],
```

The detail page shows the cover first, then the gallery photos. Always write a short `alt` description.
The hero banner is `public/images/hero/vagamon-sunrise.jpg` and the logo is
`public/images/logo/keralamist-logo.png`; overwrite them to replace.

## Add a new property

Add a new entry to the `properties` array in `src/lib/properties.ts` with a unique `slug`,
and create the matching folder in `public/images/properties/`. The card, detail page,
navigation dropdown, sitemap and WhatsApp message are generated automatically.
Set `highlighted: true` to show it on the homepage and `featured: true` for the yellow ribbon.

## Add a new Kerala destination

Each property has a `location` field. For a property in a new destination, set for example
`location: "Munnar"`. The card, detail page and WhatsApp message use it automatically.
Page headings that say "Vagamon" are in `src/app/page.tsx` and `src/app/properties/page.tsx`;
update them when the first non-Vagamon property goes live.

## Change contact details

Edit `src/lib/site.ts`. The WhatsApp number is `whatsappNumber` (country code, no `+` or spaces).

## Before publishing

- The homepage, About Us, Contact Us and page-banner images in `public/images/hero/` are
  illustrations, not photographs of the properties. Replace them with real photos when available.
- Have the Terms & Conditions in `src/app/terms-and-conditions/page.tsx` reviewed, and add
  specific payment, cancellation and check-in policies once they are decided.
- If the live address is not `https://www.keralamist.in`, update `SITE.url` in `src/lib/site.ts`.
