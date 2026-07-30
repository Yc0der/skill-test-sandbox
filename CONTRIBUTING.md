# Contributing

## Branching

We use GitHub Flow. `main` is always deployable. There is no `develop` branch.

Every change starts as a short-lived branch off `main`:

- `feature/<short-name>` — new functionality
- `fix/<short-name>` — bug fix
- `hotfix/<short-name>` — urgent production fix

Branches are deleted after merge.

```bash
git checkout main && git pull
git checkout -b feature/user-profile
```

## Commits

Commits follow [Conventional Commits](https://www.conventionalcommits.org/). This is
enforced locally by a `commit-msg` hook — a malformed message is rejected before it
lands, not flagged in review.

Format: `<type>(<optional scope>): <subject>`

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`,
`build`, `ci`.

Examples:

```
feat(auth): add password reset flow
fix(profile): stop avatar upload from silently failing on 413
chore(deps): bump next to 16.2.12
```

For a breaking change, add `!` after the type and explain it in the body:

```
feat(api)!: drop v1 response envelope
```

This format is not bureaucracy — `CHANGELOG.md` is generated from it by git-cliff.
A commit message of `wip` produces a useless changelog entry, so it's blocked.

## Hooks

`pnpm install` installs the git hooks via husky:

- `pre-commit` — lint-staged runs eslint `--fix` and prettier on staged files only
- `commit-msg` — commitlint validates the message

If hooks aren't firing, run `pnpm install` again — husky installs them from the
`prepare` script.

## Pull requests

**Every change goes through a PR, including your own solo work.** The PR is the
checkpoint where CI runs typecheck, lint, tests, and build. Direct pushes to `main`
are blocked by branch protection.

```bash
git push -u origin feature/user-profile
gh pr create --fill
```

Fill in the PR template, wait for CI to go green, then squash-merge.

## Changelog

Generated, never hand-written. To preview locally:

```bash
pnpm changelog
```

On `main`, a workflow regenerates and commits it automatically.
