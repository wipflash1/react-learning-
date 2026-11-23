# Contributing to PostShelf

## Workflow: one step = one commit

Every change, however small, is checked in before moving to the next step:

```
write code → npm run lint → git status → git add <files> → git commit → next step
```

1. **Work on the ticket's branch.** Each ticket has its own branch (e.g. PS-101 → `news-feed`). Check with `git branch --show-current` before you start.
2. **Keep commits small.** One finished step per commit, so each one is easy to read and easy to undo.
3. **Review what you stage.** Run `git status --short .` before committing. Only the files for this step should be staged.
4. **Never commit** `.env` (secrets), `generated_images/` or `.claude/`.

## Commit message format

```
PS-<ticket>: <what changed, in the imperative>
```

| ✅ Good | ❌ Rejected |
|---|---|
| `PS-102: remove unused result variable in Login` | `fixed stuff` |
| `PS-101: fetch top headlines from GNews (N3)` | `PS-101 fetch headlines` (no colon) |
| `PS-102: add Name field to SignUp form` | `update` |

- Start with the ticket id and a colon.
- Describe *what* changed, starting with a verb: add, remove, fix, rename, move.
- Optional: leave a blank line, then add a body explaining *why*.

The ticket list and deadlines live in Slack, in `#postshelf-dev`.

## Enforcement

A git hook at the repository root, `.githooks/commit-msg`, rejects PostShelf commits without a `PS-<number>:` prefix. Merge and revert messages are allowed, and commits to other projects in this repository aren't checked.

After cloning the repository, turn the hooks on once from the repository root:

```bash
git config core.hooksPath .githooks
```

## Feature structure

New features get a code folder `src/features/<name>/` and a spec `docs/features/<name>/README.md`. See `docs/features/README.md` (on the `news-feed` branch until it is merged).
