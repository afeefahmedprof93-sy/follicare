# FolliCare

A premium, responsive DTC hair-care storefront built with Next.js App Router, TypeScript, and Tailwind CSS. The first version uses static product data and a `localStorage` cart, so it deploys cleanly to Vercel without a database or paid backend.

## Features

- Home, catalog, product detail, cart, checkout, about, contact, and FAQ pages
- Responsive premium wellness design
- Category filtering and price sorting
- Persistent local cart with quantity controls
- Demo checkout with COD, bKash, and Nagad placeholders
- Static product data and statically generated product routes
- Next.js Image optimization and page-level metadata

## Tech stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- Lucide icons
- Local product data and localStorage

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production check:

```bash
npm run lint
npm run build
npm start
```

## Product data

Edit `data/products.ts` to change products, prices, descriptions, benefits, ingredients, and usage instructions. Product slugs become URLs under `/products/[slug]`.

## Replace product images

Product artwork lives in `public/products`. To replace an image:

1. Add the new image to `public/products`.
2. Keep the current filename, or update the product's `image` path in `data/products.ts`.
3. Prefer `.webp`, `.jpg`, or `.png` files at least 1200px wide.
4. Update `imageAlt` with an accurate description.

The current catalog photography is copied from the repository's `images`
folder into `public/products` with descriptive filenames. Keep storefront
assets in `public/products` so Next.js can optimize them.

## Deploy to Vercel

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel will detect Next.js automatically.
4. Keep the default build command (`next build`) and deploy.

No environment variables are required for this demo.

## Before a real launch

Connect checkout to an order backend, add real payment and courier integrations, verify all product claims and policies, replace placeholder contact details, and add analytics and consent handling as required.
