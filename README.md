# My Dissertation Dashboard – Blank Template

This is a clean, blank copy of **My Dissertation Dashboard**. It contains the full app interface and workflow, but no personal dissertation data.

## What is included

- Dashboard
- Research Library with citation list and source workspace
- Chapter workspace for Chapters 1–5
- Tasks
- Calendar / schedule
- Firebase login support
- Firestore cloud saving

## What is not included

- No personal dissertation data
- No saved tasks
- No saved research sources
- No Firebase credentials from the original app
- No PDFs or Firebase Storage setup

## Setup steps

1. Create a Firebase project.
2. Enable **Authentication > Email/Password**.
3. Create a **Firestore Database**.
4. Register a Firebase **Web App**.
5. Copy the Firebase config into `firebase-config.js`.
6. Paste the contents of `firestore.rules` into **Firestore Database > Rules** and publish.
7. Upload these files to a GitHub repository.
8. Enable GitHub Pages.
9. Add your GitHub Pages domain to Firebase Authentication > Settings > Authorized domains.

## Data privacy

Each signed-in user saves data under:

`users/{userId}/...`

That means every user has their own private dashboard data when Firestore rules are configured correctly.

## Files

- `index.html` – app structure
- `style.css` – visual design
- `script.js` – app logic
- `firebase-config.js` – Firebase connection placeholder
- `firestore.rules` – Firestore security rules
- `README.md` – setup guide
