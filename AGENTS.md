# AGENTS.md

## Project overview

This repository is Syamsul Arifin's personal site. It is built with Astro 5 and TypeScript, uses MDX content collections, and is deployed to Cloudflare Workers via the Astro Cloudflare adapter and Wrangler.

The site has three content sections:

- `src/content/writing/` — long-form posts; drafts are hidden from listings and RSS.
- `src/content/notes/` — short notes; drafts are hidden from listings.
- `src/content/reading/` — reading entries and their status.

Their required frontmatter and allowed fields are defined in `src/content/config.ts`. Update that schema whenever a content field changes.

## Tooling and commands

Use pnpm (pinned in `package.json`); do not create or update `package-lock.json`.

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm deploy
pnpm cf-typegen
```

`pnpm build` runs `astro check` before the production build. Run it after source, configuration, or content-schema changes. `preview` and `deploy` build first and then invoke Wrangler; do not deploy unless explicitly requested.

## Code and design conventions

- Keep routes in `src/pages/` and shared site chrome in `src/layouts/` and `src/components/`.
- Use Astro components by default. This site is intentionally lightweight and has no client-side framework.
- Global editorial styling and design tokens live in `src/styles/global.css`; keep page-specific styles colocated in the `.astro` page or component.
- Preserve the dark, editorial visual language: Newsreader for display/body copy, IBM Plex Mono for metadata, and the existing CSS custom properties for colour and spacing.
- Use `BaseLayout` for standard pages and `EssayLayout` for long-form writing. Keep the SEO title and description props meaningful.
- Dates are parsed by the collection schema and formatted through `src/lib/format.ts`.
- Preserve trailing-slash internal URLs (for example, `/writing/example/`) to match Astro's directory build output.

## Deployment and generated files

- `astro.config.mjs` sets the production site URL, MDX/sitemap integrations, and Cloudflare adapter.
- `wrangler.jsonc` configures the Workers entry point and static `dist/` assets.
- Do not edit generated `dist/`, `.astro/`, `worker-configuration.d.ts`, `node_modules/`, or `.wrangler/` output. `dist/` and `.astro/` are already ignored.
- Keep credentials out of the repository. Use local ignored `.env`/`.dev.vars` files when needed.
