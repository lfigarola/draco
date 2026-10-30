# Draco Tech Solutions

A lightweight company website with original Sumi-e artwork, the supplied Draco dragon identity, and a rice-paper / charcoal / muted-jade palette. Built with semantic HTML, CSS, and browser JavaScript. No package installation is required.

## View and develop

Open `index.html` directly in a browser, or run `node scripts/serve.cjs` and visit `http://127.0.0.1:4173`. Stop the temporary server with Ctrl+C when finished. If npm is available, `npm run dev` is equivalent.

Run `node scripts/check.cjs` for asset, anchor, heading, and syntax checks. Run `node scripts/build.cjs` to copy the public site into `dist/`. There are no external runtime dependencies, tracking scripts, cookies, or third-party fonts.

## Contact

The inquiry form validates required fields and opens the visitor's email application with a message addressed to **info@DracoTech.com**. The visitor sends it from their email client. The page does not submit, store, or claim to deliver messages itself. A direct email link and a native mailto form remain available without JavaScript.

## Deploy

The public site is configured for [GitHub Pages](https://lfigarola.github.io/draco/), with source in [lfigarola/draco](https://github.com/lfigarola/draco). Pushing to `main` runs integrity checks, builds `dist/`, and deploys only the public build through `.github/workflows/pages.yml`. Canonical, social metadata, and sitemap use this project URL. No custom domain is configured.

The local preview server exposes only public runtime files. Do not include `References/`, `Private/`, or development utilities in the published website. The deployment workflow uploads only `dist/`.

## File ownership

- `index.html`: page content and semantic structure.
- `styles/`: design tokens, section layout, controls, responsive rules, and supplied logo presentation.
- `scripts/navigation.js`: responsive navigation and keyboard behavior.
- `scripts/contact.js`: email composition.
- `scripts/serve.cjs`, `build.cjs`, `check.cjs`: development utilities.
- `assets/images/`: required portable artwork and supplied identity.
- `References/`: local design decisions, image brief, QA evidence, and resumption notes; excluded from builds and Git.

`.gitignore` excludes local references, private files, environment files, and build output from the source repository.
