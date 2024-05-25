'use server';

import { initializeApp } from 'firebase-admin';
import { cert, getApp, getApps } from 'firebase-admin/app';
import { getFirestore, initializeFirestore } from 'firebase-admin/firestore';

let app = null;
let firestore = null;
app = !getApps().length
  ? initializeApp({
      credential: cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
        clientEmail: process.env.PRIVATE_FIREBASE_CLIENT_EMAIL!,
        // Using JSON to handle newline problems when storing the key as a secret in Vercel. See:
        // https://github.com/vercel/vercel/issues/749#issuecomment-707515089
        privateKey: JSON.parse(process.env.PRIVATE_FIREBASE_PRIVATE_KEY!),
      }),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL!,
    })
  : getApp();

getFirestore().settings({ ignoreUndefinedProperties: true });

if (app != null) {
  firestore = initializeFirestore(app);
}

export { firestore };
