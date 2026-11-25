# PostShelf feature docs

For the big picture of every screen, see the [product blueprint](../blueprint/README.md).

Each feature gets **two folders** with the same name:

| Folder | What goes in it |
|---|---|
| `src/features/<feature-name>/` | The feature's code: its components, hooks and helpers. |
| `docs/features/<feature-name>/` | Its technical spec, in `README.md`. |

## Features

| Ticket | Feature | Code | Spec | Branch | Status |
|---|---|---|---|---|---|
| PS-101 | News Feed | [`src/features/news-feed/`](../../src/features/news-feed/) | [spec](news-feed/README.md) | `news-feed` | Done (N1–N5), N6 deferred |

Older features (posts, Google login) were built before this convention, so they still live in `src/Components/` and `src/Store/`.

## Adding a new feature

1. Pick a short kebab-case name, e.g. `user-profile`.
2. Create `src/features/<name>/` and put the feature's components there.
3. Copy [`_template.md`](_template.md) to `docs/features/<name>/README.md` and fill it in.
4. Add a row to the table above.
5. Keep the spec updated as the feature grows; tick off steps as you finish them.

Shared pieces used by many features (`LoadingSpinner`, `Message`, `Header`…) stay in `src/Components/`.
