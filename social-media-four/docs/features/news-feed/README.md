# News Feed

**Ticket:** PS-101 · **Branch:** `news-feed` · **Deadline:** Fri, 27 Nov 2026 · **Status:** In progress (N1–N2 done)

## Goal
A "Today's News" tab that shows today's top real-world headlines from the GNews API, so PostShelf has live content alongside users' own posts.

## Files
| File | Role |
|---|---|
| `src/features/news-feed/NewsFeed.jsx` | Fetches headlines and renders them. |
| `src/Components/Sidebar.jsx` | `tabs` array entry `{ id: "News", label: "Today's News", Icon: FaNewspaper }`. |
| `src/App.jsx` | Renders `<NewsFeed />` when `selectedTab === "News"`. |
| `.env` | Holds `VITE_GNEWS_KEY`. Ignored by git (`.gitignore`). |

## How it works
```
Sidebar "Today's News" click
  → setSelectedTab("News")            (state lives in App)
  → App renders <NewsFeed />
  → useEffect(..., [])                runs once on mount
      → fetch GNews top-headlines
      → setNews(data.articles)
  → NewsFeed re-renders with articles
```

**State in `NewsFeed`:**
- `news`: array of articles, starts as `[]`
- *(N4)* `loading`, `error`: for the spinner and the error message

## External services / config
- **API:** `GET https://gnews.io/api/v4/top-headlines?lang=en&max=10&apikey=<key>`
- **Response:** `{ totalArticles, articles: [{ title, description, url, image, publishedAt, source: { name } }] }`
- **Key:** `VITE_GNEWS_KEY` in `.env`, read with `import.meta.env.VITE_GNEWS_KEY`. Restart `npm run dev` after editing `.env`.
- **Limits:** the free plan allows about 100 requests/day.

## React concepts used
- **Lifting state up:** `selectedTab` lives in `App`; `Sidebar` gets `setSelectedTab`.
- **`useEffect` with `[]`:** fetch once when the component mounts.
- **An async function inside the effect:** the effect callback itself can't be `async`.
- **StrictMode:** in development, effects run, clean up, and run again, so the fetch fires twice. A cleanup function handles this.
- **Environment variables:** only `VITE_`-prefixed variables reach browser code.

## Steps
- [x] N1: move the GNews key into `.env` and read it with `import.meta.env`
- [x] N2: add the "Today's News" tab in `Sidebar.jsx` and render `<NewsFeed />` in `App.jsx`
- [ ] N3: fetch headlines in `useEffect` (`try/catch`, check `res.ok`, `setNews`)
- [ ] N4: loading spinner and error message; cleanup for StrictMode
- [ ] N5: render articles as cards: image, title, source, date, "Read more" link
- [ ] N6 *(stretch)*: category filter (general, technology, sports, business)

## Testing
1. Log in, then click **Today's News**.
2. Network tab: a `gnews.io` request returns **200**.
3. The headlines render; with the network turned off, an error message shows instead.
4. `npm run lint` shows no errors from `src/features/news-feed/`.

## Decisions and known limits
- **The key is visible in the browser bundle.** `.env` keeps it out of git, but every `VITE_` value ships to the client. Fine for a learning project; a production app would call GNews from a backend.
- **Feature folder:** this is the first feature to use `src/features/<name>/`. Shared components (`LoadingSpinner`, `Message`) are imported from `src/Components/`.
- **Branch:** `news-feed` was created from `add-social-media-four`, so it also carries the PS-102 sign-up WIP commit. Merge PR #1 first, or rebase onto `main`, before opening this feature's PR.
