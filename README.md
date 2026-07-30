# v2-nextjs-with-skill

Next.js web application (App Router, TypeScript). Deployed continuously from `main`.

## Requirements

- Node.js 22 or newer (vitest 4 needs `^20.19 || >=22.12`)
- pnpm 11 (pinned via `packageManager` in `package.json` — run `corepack enable`)

## Install

```bash
pnpm install
```

## Run

```bash
pnpm dev      # http://localhost:3000
```

## Checks

```bash
pnpm typecheck   # tsc --noEmit
pnpm lint        # eslint
pnpm test        # vitest
pnpm build       # next build
```

CI runs all four on every pull request.

## Contributing

Branching, commit format, and the PR flow are in [CONTRIBUTING.md](CONTRIBUTING.md).
`CHANGELOG.md` is generated from commit history — don't edit it by hand.
