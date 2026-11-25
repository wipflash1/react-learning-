# PostShelf roadmap

PostShelf is a UPSC study companion: current affairs, private notes, a syllabus tracker and handwritten-answer practice with AI feedback. This roadmap takes it from a learning prototype to a public product.

**Written:** 25 Nov 2026 · **Assumes:** one developer, about 10–12 hours a week, learning along the way. Add a ~30% buffer; working full-time roughly halves the durations.

See the [product blueprint](docs/blueprint/README.md) for the screens and [TECHNICAL.md](docs/blueprint/TECHNICAL.md) for how they're built.

## Milestones

| Milestone | Target |
|---|---|
| 🚀 **Public beta (free)**: 20–50 real aspirants using it | **Late Feb 2027** |
| 💎 **Paid launch**: Premium live with real payments | **May 2027** (depends on Razorpay KYC) |

## Phases

### Phase 0 · Foundations (2–3 weeks, target mid-Dec 2026)
- [ ] PS-104: finish the news category filter (Step 3b, spec, PR)
- [ ] Move PostShelf into its own repository
- [ ] Add React Router so each screen has its own URL
- [ ] Add `uid` to the auth context (PS-105 S5)
- [ ] Turn on Firestore with security rules

### Phase 1 · Free MVP (6–8 weeks, target end of Jan 2027)
- [ ] PS-105: Student Notes, saved in Firestore
- [ ] Move posts from React state to Firestore
- [ ] PS-106: Syllabus Tracker
- [ ] PS-107: GS-tagged current affairs + save to notes

### Phase 2 · Production hardening (3–4 weeks, target late Feb 2027)
- [ ] Review the security rules; turn on Firebase App Check
- [ ] Error monitoring
- [ ] Basic tests, and CI that runs lint and tests on every PR
- [ ] Loading, empty and error states on every screen; accessibility pass
- [ ] Firebase Hosting and a domain
- [ ] Privacy policy and terms (personal data under India's DPDP Act)
- [ ] A news source licensed for public use (a paid GNews plan or an alternative)
- [ ] **🚀 Public beta:** invite aspirants, collect feedback

### Phase 3 · AI answer evaluation (4–5 weeks, target end of Mar 2027)
- [ ] Validate the rubric first: compare AI feedback with a teacher's marks on 20–30 real handwritten answers
- [ ] PS-108: capture, Storage, the `evaluateAnswer` Cloud Function, feedback screen, speed trend
- [ ] Daily limits and AI cost monitoring

### Phase 4 · Premium (3–4 weeks plus KYC, target May 2027)
- [ ] PS-109: Razorpay subscriptions in test mode, webhooks, billing screens
- [ ] Set the price so it covers AI cost per Premium user
- [ ] Razorpay KYC, live keys, refund and cancellation policy, invoices
- [ ] **💎 Paid launch**

### Any time after Phase 2
- [ ] PS-103: installable phone app (PWA), about 1 week

## Rules until the public beta
1. **Backlog freeze.** No new tickets before the public beta. New ideas go to the Later list below.
2. **Free beta before payments.** Real aspirants use the free version first; their feedback decides what Premium includes.
3. **Validate the AI before building its UI.** The product's credibility depends on fair feedback.

## Risks we're watching
| Risk | Mitigation |
|---|---|
| Scope creep | The backlog freeze; one ticket in progress at a time |
| No persistence yet | Firestore in Phase 0–1 before any new feature |
| News licensing | A licensed source before the public beta |
| AI cost vs price | Daily limits, cost monitoring, and pricing based on real usage |
| Legal and data protection | Privacy policy and terms in Phase 2; KYC and refund policy in Phase 4 |

## Later (ideas parked until after the beta)
- Spaced-revision reminders for notes
- Mistake log and personal MCQ bank
- Daily target planner and study streaks
