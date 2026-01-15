/**
 * Firebase Configuration
 * 
 * To get your Firebase config:
 * 1. Go to https://console.firebase.google.com/project/peakleads
 * 2. Click on Project Settings (gear icon)
 * 3. Scroll down to "Your apps" and click on the web app (</> icon)
 * 4. Copy the configuration values
 * 
 * Create a .env.local file with:
 * NEXT_PUBLIC_FIREBASE_API_KEY=
 * NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=peakleads.firebaseapp.com
 * NEXT_PUBLIC_FIREBASE_PROJECT_ID=peakleads
 * NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=peakleads.firebasestorage.app
 * NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
 * NEXT_PUBLIC_FIREBASE_APP_ID=
 * NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
 */

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'peakleads.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'peakleads',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'peakleads.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || ''
};
