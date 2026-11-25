# PostShelf blueprint: technical design

How the screens in the [blueprint](README.md) are built: the stack, where data lives, which components and state each screen needs, and the order the work depends on. Each feature's own spec in `docs/features/<name>/README.md` has the step-by-step detail; this page is the map that connects them.

## Stack

| Layer | Today | Planned |
|---|---|---|
| UI | React 19, Vite 8, Bootstrap 5.3, react-icons | Same |
| Auth | Firebase Auth: Google popup, email + password | Add `uid` to the auth context (PS-105 S5) |
| Data | React state and Context (`useReducer` for posts) | **Firestore**, private per student |
| Files | None | **Firebase Storage** for answer photos (PS-108) |
| Backend | None | **Firebase Cloud Functions** for AI evaluation (PS-108); needs the Blaze plan |
| External APIs | GNews (headlines), dummyjson (sample posts) | Claude API, called only from the Cloud Function |
| Payments | None | **Razorpay** subscriptions in test mode: Checkout in the client, webhooks in Cloud Functions (PS-109) |
| Navigation | `selectedTab` state in `App.jsx` + Sidebar `tabs` array | Same; a router (React Router) is optional later, for shareable URLs |

## App shell

```
<AuthProvider>                     Store/Auth-store.jsx: user, loading, logout, refreshUser
  <PostListProvider>               Store/Posts-List-store.jsx: postList + add/delete
    <App>
      loading      → <LoadingSpinner />
      no user      → <Login /> or <SignUp />          (authPage state)
      logged in    → <Header /> + <Sidebar /> + the selected tab
```

| Sidebar tab (`id`) | Renders | Folder |
|---|---|---|
| `Home` | `PostList` + composer | `src/Components/` |
| `News` | `NewsFeed` | `src/features/news-feed/` |
| `Notes` | `NotesPage` | `src/features/notes/` |
| `Syllabus` | `SyllabusPage` | `src/features/syllabus-tracker/` |
| `Answer` | `AnswerWriting` | `src/features/answer-writing/` |

The header's **Prelims countdown** reads a date the student sets; it's stored in their profile document (`users/{uid}`).

## Data model (Firestore)

Everything a student owns lives under their own document, which keeps the security rules simple.

```
users/{uid}                          profile: name, prelimsDate, dailyEvalCount, dailyEvalDate
users/{uid}/notes/{noteId}           PS-105
users/{uid}/syllabusProgress/{paper} PS-106: { topicId: true, ... } per paper
users/{uid}/answers/{answerId}       PS-108
posts/{postId}                       shared feed (a later ticket moves posts here from local state)
```

| Collection | Key fields |
|---|---|
| `notes` | `title`, `body`, `subject`, `pinned`, `source?` (`{ url, name, publishedAt }` when saved from news), `nextReviewAt?`, `createdAt`, `updatedAt` |
| `syllabusProgress` | One document per paper (`gs1`, `gs2`…), a map of covered topic ids |
| `answers` | `question`, `paper`, `marks`, `wordLimit`, `timeTakenSec`, `imagePaths[]`, `status` (`uploaded` → `evaluating` → `done` / `failed`), `feedback` (below), `createdAt` |
| `posts` | `authorId`, `authorName`, `title`, `body`, `tags[]`, `kind` (`post` / `doubt` / `answer-review`), `createdAt` |

**Security rules (outline):**
```
match /users/{uid}/{document=**} {
  allow read, write: if request.auth != null && request.auth.uid == uid;
}
match /posts/{postId} {
  allow read: if request.auth != null;
  allow create: if request.auth != null && request.resource.data.authorId == request.auth.uid;
  allow update, delete: if request.auth != null && resource.data.authorId == request.auth.uid;
}
```
`answers/*/feedback` is written only by the Cloud Function (Admin SDK), so a student can't fake a score: the rules should reject client writes that change `feedback` or `status`.

**Storage:** `users/{uid}/answers/{answerId}/page-{n}.jpg`, readable and writable only by that `uid`; images only, up to about 5 MB each, at most 4 pages.

## Screens

### 1 · Login & Sign up (PS-102, built)
- **Components:** `Login.jsx`, `SignUp.jsx` in `src/Components/`
- **Firebase:** `signInWithPopup`, `signInWithEmailAndPassword`, `createUserWithEmailAndPassword` + `updateProfile`
- **State:** refs for inputs, `error` state with friendly messages mapped from `error.code`
- **Next:** create `users/{uid}` on first sign-up; "Forgot password" (`sendPasswordResetEmail`)

### 2 · Home feed (built, partly planned)
- **Today:** `PostList`, `CreatePost`, `Posts` with `PostListProvider` (`useReducer`); sample posts from dummyjson
- **Planned:** posts in Firestore (`posts`), tags, `kind: "answer-review"` for shared answers; the **Today** panel reads counts from notes due for revision, saved news and the latest answer

### 3 · Current Affairs (PS-101 built, PS-104 in progress, PS-107 planned)
- **Components:** `NewsFeed.jsx`, `NewsCard.jsx` in `src/features/news-feed/`
- **API:** `GET https://gnews.io/api/v4/top-headlines?category=…&lang=en&max=10&apikey=…` (key in `.env` as `VITE_GNEWS_KEY`)
- **State:** `news`, `loading`, `error`, `category`; `useEffect([category])` with an `AbortController` cleanup
- **PS-104 Step 3b:** spinner and error render below the always-visible category buttons
- **PS-107:** India focus (`country=in`), UPSC themes mapped to GNews categories or `search` keywords; **Save to notes** writes a note with `source`, and dedupes on the article URL
- **Limit:** the GNews free plan is about 12 hours behind and rate-limited; the key is visible in the bundle, acceptable for this key only

### 4 · My Notes (PS-105, spec ready)
- **Components:** `NotesPage`, `NoteCard`, `NoteEditor`, `notes-api.js` in `src/features/notes/`
- **State:** `notes`, `editingNote`, `search`, `subject`; the visible list is **derived** (filter + sort, pinned first)
- **Data:** stage 1 in local state, stage 2 `users/{uid}/notes`
- **Spaced revision (later):** `nextReviewAt` steps 1 → 3 → 7 → 21 days; the Home panel counts notes due today

### 5 · Syllabus Tracker (PS-106, backlog)
- **Components:** `SyllabusPage`, `PaperProgress`, `TopicTree` (recursive) in `src/features/syllabus-tracker/`
- **Data:** the syllabus as a static `syllabus.json` (papers → sections → topics with stable ids), written from the official UPSC notification; progress in `localStorage` first, then `users/{uid}/syllabusProgress`
- **Derived:** percentage per paper and overall; **weak areas** = topics with no linked notes or none revised for 30+ days (needs a `topicId` on notes)

### 6–7 · Answer Writing with AI feedback (PS-108, backlog)
- **Components:** `AnswerWriting` (question, timer, capture), `PageCapture`, `AnswerFeedback`, `SpeedTrend` in `src/features/answer-writing/`
- **Timer:** `setInterval` in `useEffect` with cleanup; Done stores `timeTakenSec`
- **Capture:** `<input type="file" accept="image/*,application/pdf" capture="environment" multiple>`, resized in the browser before upload to Storage
- **Flow:**
  ```
  client: upload pages → create answers/{id} (status "uploaded") → call evaluateAnswer(id)
  function: check auth + daily limit → read images from Storage → call Claude → write feedback, status "done"
  client: listens to answers/{id} (onSnapshot) → shows the feedback
  ```
- **Cloud Function `evaluateAnswer`** (callable, Node + `@anthropic-ai/sdk`):
  - the key lives in Firebase secrets (`ANTHROPIC_API_KEY`), never in the client
  - model `claude-opus-5-5` with image inputs (the page photos), the question, word limit and rubric
  - **structured output** (`output_config.format` with a JSON schema) so the reply always matches `feedback`
  - enforces the daily limit (for example 3 per day) in a transaction on `users/{uid}`
  - on failure sets `status: "failed"` with a friendly message; the count isn't used up
- **`feedback` shape:**
  ```js
  {
    transcription: string,
    estimatedWords: number,
    wordsPerMinute: number,          // estimatedWords ÷ (timeTakenSec / 60), computed in the function
    scores: { introduction, bodyDimensions, examplesAndData, conclusionWayForward, structureAndPresentation },
    overall: number,                 // out of 10
    strengths: string[], improvements: string[], missedPoints: string[]
  }
  ```
- **UI rules:** show the transcription so students can check it; label feedback "guidance, not official UPSC marking"; **Share for peer review** creates a `posts` document with `kind: "answer-review"`

## Build order and dependencies

```
PS-104 categories ─────────────┐
PS-105 notes (S1–S4 local) ─┐  ├─► PS-107 current affairs + save to notes
PS-105 S5 uid in context ───┼──┤
PS-105 S6–S7 Firestore ─────┘  ├─► PS-106 syllabus (progress in Firestore, weak areas)
                               └─► PS-108 answer writing (Storage + Cloud Function + Claude)
PS-103 PWA: any time after the screens settle
PS-108 Cloud Functions ─────────► PS-109 Premium (Razorpay subscriptions)
```

## Premium and payments (PS-109, Razorpay test mode)

### Screens
- **8 · Pricing** (`PricingPage`), **9 · Billing** (`BillingPage`), **10 · Limit reached** (`LimitReachedDialog`, opened when `evaluateAnswer` returns `limit-reached`)
- **Folder:** `src/features/premium/`

### Plans and entitlements
| | Free | Premium |
|---|---|---|
| AI evaluations per day | 3 | [n] |
| Answer history | Last 7 days | All |
| Detailed feedback, monthly PDF | — | ✅ |

Entitlements are checked **on the server** (`evaluateAnswer`, the PDF function). The UI only mirrors them; hiding a button never counts as enforcement.

### Payment flow
```
React "Upgrade"
  → callable Cloud Function createSubscription()
      uses RAZORPAY_KEY_SECRET → Razorpay Subscriptions API → returns subscription_id
  → Razorpay Checkout opens (Checkout.js, public key_id only)
  → student pays (test mode: Razorpay test UPI and test cards)
  → Checkout returns payment_id + signature to the client  (shown as "Activating…", never trusted)
  → Razorpay → HTTPS Cloud Function razorpayWebhook
      1. verify X-Razorpay-Signature using HMAC-SHA256 with RAZORPAY_WEBHOOK_SECRET over the raw body
      2. skip if this event id was already processed (idempotency)
      3. update users/{uid}/billing/subscription and users/{uid}.plan
  → the client listens (onSnapshot) → Premium unlocks
```

### Data
```
users/{uid}                              plan: "free" | "premium", planExpiresAt
users/{uid}/billing/subscription         razorpaySubscriptionId, status, currentPeriodEnd, cancelAtPeriodEnd
users/{uid}/billing/payments/{paymentId} amount, currency, status, createdAt
webhookEvents/{eventId}                  processedAt   (server only, for idempotency)
```
- **Rules:** a student can **read** their own billing documents but never **write** `plan`, `planExpiresAt` or anything under `billing/`; only the Cloud Functions (Admin SDK) write them. `webhookEvents` has no client access.

### Subscription states
| Razorpay event | Our status | Plan |
|---|---|---|
| `subscription.activated`, `subscription.charged` | `active` | premium; `planExpiresAt` = the end of the current period |
| `payment.failed` / `subscription.pending` | `past_due` | premium during a short grace period, with a "payment due" banner |
| `subscription.halted` | `halted` | free |
| `subscription.cancelled` (at the period end) | `cancelled` | premium until `currentPeriodEnd`, then free |

Check the exact event names against Razorpay's webhook docs when building; the mapping is what matters.

### Secrets and config
| Name | Where |
|---|---|
| `RAZORPAY_KEY_ID` (public) | The client may use it to open Checkout |
| `RAZORPAY_KEY_SECRET` | Cloud Functions secret only |
| `RAZORPAY_WEBHOOK_SECRET` | Cloud Functions secret only |
| Plan ids (monthly, yearly) | Created in the Razorpay **test** dashboard and stored in function config |

### What to test (test mode)
- Successful payment → Premium appears within seconds
- Faking "success" in DevTools → **no** Premium (only the webhook grants it)
- Sending the same webhook twice → the period isn't extended twice
- A webhook with a wrong signature → rejected with 400, nothing changes
- Cancel → Premium until the period end; renewal failure → `past_due` banner

### Before taking real money (not part of PS-109)
Razorpay account activation (KYC), live keys, a privacy policy, terms of service, a refund and cancellation policy, and tax invoices.

## Cross-cutting rules
- **Secrets:** only `VITE_GNEWS_KEY` may reach the browser. Claude and any paid keys stay in Cloud Functions.
- **Every async screen** has loading, error and empty states, and cancels or ignores stale requests.
- **Privacy:** notes, syllabus progress and answers are private per student; only posts are shared.
- **Accessibility:** real buttons and labels, 44 px touch targets, and text contrast of at least 4.5:1.
- **Costs:** GNews free-plan limits; the Claude daily limit per student; the Firebase Blaze plan with a budget alert.
- **Payments:** never trust the client for payment success; only a signature-verified webhook changes a plan.
