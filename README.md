# tc54.org

This repository contains the source code for https://tc54.org/. The site is built with [Astro](https://astro.build/) and
requires Node v18 or higher.

### Starting the Development Server

```shell
npm install
npm run start
```

### Publishing specification documents (online view)

Rendered HTML specifications are served verbatim from `public/`, each at an evergreen
URL keyed by its Ecma standard number (following the pattern used by, e.g.,
<https://tc39.es/ecma262/>). To publish (or update) a standard's online reading view,
drop the rendered HTML into the matching folder as `index.html`, alongside any asset
files it references:

| Standard | Drop location | Served at |
| --- | --- | --- |
| CycloneDX (ECMA-424) | `public/ecma424/` | `/ecma424/` |
| Package-URL (ECMA-427) | `public/ecma427/` | `/ecma427/` |
| CLE (ECMA-428) | `public/ecma428/` | `/ecma428/` |

Each folder currently holds a placeholder `index.html` — replace it. The "Read the
specification online" button on each spec page links to these paths (see the
`specHtmlUrl` prop in `src/layouts/Specification.astro`).

### Publishing schemas

Schemas are hosted under `/schemas/` and served verbatim from `public/schemas/`. The
version lives in the filename, so no version directory is needed:

| Schema | Drop location | Canonical URL |
| --- | --- | --- |
| CLE 1.0 (ECMA-428) | `public/schemas/cle/cle-1.0.0.schema.json` | `/schemas/cle/cle-1.0.0.schema.json` |

To add another schema (or a new version), drop the file into `public/schemas/<slug>/`
and add a matching entry to the `schemas` array in `src/pages/schemas/index.astro`.

## Copyright & License

Except there otherwise noted, the contents of this repository are Copyright (c) Ecma International. All Rights Reserved.

Permission to modify and redistribute is granted under the terms of the [MIT](https://github.com/Ecma-TC54/tc54.org/blob/main/LICENSE) license.
