'use client';

import { initializeAnalytics } from 'firebase/analytics';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { initializePerformance } from 'firebase/performance';

// Import the functions you need from the SDKs you want to use
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const firestore = initializeFirestore(app, {
  ignoreUndefinedProperties: true,
});
console.log('reconfigured the db to ignore undefined values', firestore.type);

// If we're on the client-side
if (app.name && typeof window !== 'undefined') {
  const perf = initializePerformance(app);
  console.log('perf enabled:', perf.dataCollectionEnabled);

  const analytics = initializeAnalytics(app);
  console.log('analytics:', analytics);
}
