'use server';
// firebase.config.ts
import { initializeApp, getApps, getApp, cert } from 'firebase-admin/app';
import { getFirestore as getFirestoreInstance } from 'firebase-admin/firestore';
import { getAuth as getAuthInstance } from 'firebase-admin/auth';

const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!;
const clientEmail = process.env.PRIVATE_FIREBASE_CLIENT_EMAIL!;
const privateKey = JSON.parse(process.env.PRIVATE_FIREBASE_PRIVATE_KEY!);
const databaseURL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL!;

const app = !getApps().length
  ? initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey,
      }),
      databaseURL,
    })
  : getApp();

export const getFirestore = () => getFirestoreInstance(app);
export const getAuth = () => getAuthInstance(app);
