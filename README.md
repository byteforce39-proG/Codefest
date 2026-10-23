# PrepPilot AI — Interview Preparation Frontend

A responsive React + Tailwind CSS frontend prototype for an AI interview preparation platform, with a light powder-blue visual system.

## Requirements
- Node.js 18+ (recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Included
- Powder-blue design system, responsive sidebar, mobile navigation, reusable cards/forms/tables
- Dashboard and practice hub
- Interview setup, company selection, lobby, live interview demo, pause/reconnect, completion and feedback
- Technical, behavioral, HR, group discussion, coding practice, question bank, question details and bookmarks
- Resume Lab, resume upload flow, ATS-style illustrative score and suggestions
- Feedback, answer review, transcript/replay placeholder, learning plan, history, comparison, analytics, leaderboard and badges
- Organization dashboard, roster, student progress, cohort analytics, assignments and organization settings
- Platform admin dashboard, user/org management, content management, moderation and system settings
- Landing page, sign in/up, password recovery/reset, career onboarding, preferences, profile, privacy and accessibility/notification controls

## Important implementation notes
This is a frontend prototype, not a production-connected service. Demo data and scores are illustrative. Authentication, OAuth, AI-generated questions/feedback, resume parsing, persistent storage, real session timers, recording/replay, secure code execution, organization invitations and admin actions require backend services and appropriate security controls. The resume file input only selects a local file; it does not upload it. The coding editor does not execute code.
