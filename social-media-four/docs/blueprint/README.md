# PostShelf product blueprint

A clickable mockup of PostShelf as a **UPSC study companion**, with every planned feature in place. Use it as the target picture when building a ticket: what the screen should contain, and how it connects to the rest of the app.

**Live, clickable version:** https://claude.ai/artifact/GMWgzujfwBwEEubSNmhjh5
Press **Play** on any screen and use the sidebar to move between them. The link is private until it's shared from the page's Share menu.

## Screens

| # | Screen | Ticket | Status | What it shows |
|---|---|---|---|---|
| 1 | Login & Sign up | PS-102 | ✅ Built | Email + password form, "or", Google sign-in, Sign up link |
| 2 | Home feed | posts | ✅ Built | Create a post, a shared answer for peer review, a doubt, a "Today" panel and syllabus coverage |
| 3 | Current Affairs | PS-101, PS-104, PS-107 | PS-101 built, PS-104 in progress | UPSC theme buttons, news cards with **Save to notes**, loading and error states |
| 4 | My Notes | PS-105 | Spec ready | Private notes grid, pinned note, revise reminders, a note saved from the news, edit panel |
| 5 | Syllabus Tracker | PS-106 | Backlog | Overall coverage, progress per paper, GS2 topic tree with note counts, weak areas |
| 6 | Answer Writing: write & capture | PS-108 | Backlog | Question, time taken, capture or upload the handwritten pages, **Evaluate with AI** |
| 7 | Answer Writing: AI feedback | PS-108 | Backlog | Overall score, words, time, **writing speed**, rubric scores, what the AI read, speed trend |
| 8 | Pricing | PS-109 | Backlog | Free vs Premium, monthly/yearly toggle, **Upgrade to Premium**, how the upgrade works |
| 9 | Billing settings | PS-109 | Backlog | Current plan and status, renewal date, today's usage, cancel, payment history |
| 10 | Limit reached dialog | PS-109 | Backlog | Shown after the free 3 evaluations a day, with **See Premium** or **Maybe later** |

Values in brackets (`[days left]`, `[x]%`, `[Polity headline from GNews]`) stand for real data. Numbers such as scores and progress bars are sample values for illustration.

## Roadmap

[ROADMAP.md](../../ROADMAP.md) has the phases, target dates and rules for getting from here to a public beta and a paid launch.

## Technical design

[TECHNICAL.md](TECHNICAL.md) explains how these screens are built: the stack, the Firestore data model and security rules, the components and state for each screen, the AI-evaluation backend for Answer Writing, and the order the tickets depend on.

## Design basics

The blueprint is a target, not a pixel spec: build it with Bootstrap, staying close to these choices.

| | |
|---|---|
| Layout | Top bar (logo, Prelims countdown, user, Log out) + left sidebar + content area. On phones the sidebar stacks above the content. |
| Primary colour | Blue `#2450C9` for the one main action on each screen (Bootstrap's `btn-primary` is close) |
| Highlights | Amber `#8A4108` on `#FDF1E3` for tags, countdowns and "needs attention" |
| Success | Green `#1E6B4A` on `#E6F4EE` (saved, finished in time) |
| Fonts | Inter for text, Space Grotesk for the logo and big numbers |
| Touch targets | Buttons and links at least 44 px tall |

## Source files

`source/` holds the design files the live canvas was built from: one `.dc.html` per screen, plus `canvas.json` for the layout. They run inside the design canvas, not as standalone pages; open the live link to view them. They're kept here so the design is versioned with the code.

## Keeping it up to date

When a feature's design changes, update the live canvas, then copy its files back into `source/` and commit with the feature's ticket id.
