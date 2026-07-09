# My Dissertation Dashboard – Blank Template

This is a blank, shareable copy of **My Dissertation Dashboard**.

It includes a first-time setup screen so users can paste their own Firebase configuration without editing code.

## What is included

- Dashboard
- Research Library / Research Workspace
- Chapter tracking
- Tasks
- Schedule
- Settings and backup tools
- Firebase setup wizard
- Firestore security rules

## First-time setup for a new user

1. Create a Firebase project at https://console.firebase.google.com
2. Enable **Authentication → Email/Password**
3. Create a **Firestore Database**
4. Register a **Web App** in Firebase project settings
5. Copy the Firebase config object
6. Open this template site
7. Paste the Firebase config into the setup screen
8. Create an account
9. Start using the dashboard

## Firestore rules

Use the included `firestore.rules` file in Firebase Console → Firestore Database → Rules.

These rules allow each signed-in user to read/write only their own data:

```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Hosting

This template can be hosted with GitHub Pages.

1. Upload all files to a public GitHub repository.
2. Go to Settings → Pages.
3. Deploy from the `main` branch, `/root` folder.

## Notes

- This template does not include personal Firebase credentials.
- Users must connect their own Firebase project.
- No PDF uploads are included in this version.
