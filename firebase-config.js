import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const CONFIG_KEY = "mdd_firebase_config_v1";

export function getSavedFirebaseConfig() {
  try {
    const raw = localStorage.getItem(CONFIG_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveFirebaseConfig(config) {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
}

export function clearFirebaseConfig() {
  localStorage.removeItem(CONFIG_KEY);
}

export function parseFirebaseConfig(input) {
  let text = String(input || "").trim();
  if (!text) throw new Error("Paste your Firebase config first.");

  // Accept either a raw object {...} or Firebase's copied snippet: const firebaseConfig = {...};
  const match = text.match(/firebaseConfig\s*=\s*({[\s\S]*?})\s*;?/);
  if (match) text = match[1];

  // Convert Firebase's JS object format into JSON-like text.
  text = text
    .replace(/([,{]\s*)([A-Za-z0-9_]+)\s*:/g, '$1"$2":')
    .replace(/'/g, '"')
    .replace(/,\s*}/g, '}');

  let config;
  try {
    config = JSON.parse(text);
  } catch {
    throw new Error("I couldn't read that config. Paste the full Firebase config object from your Web App settings.");
  }

  const required = ["apiKey", "authDomain", "projectId", "appId"];
  const missing = required.filter(k => !config[k]);
  if (missing.length) throw new Error(`Missing: ${missing.join(", ")}`);
  return config;
}

export function initFirebase(config = getSavedFirebaseConfig()) {
  if (!config) return { app: null, auth: null, db: null, configured: false };
  const app = getApps().length ? getApps()[0] : initializeApp(config);
  return { app, auth: getAuth(app), db: getFirestore(app), configured: true };
}
