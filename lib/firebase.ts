import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { getAnalytics, Analytics } from 'firebase/analytics';
import { firebaseConfig } from '@/config/firebase.config';

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let storage: FirebaseStorage;
let analytics: Analytics | null = null;

// Initialize Firebase only if it hasn't been initialized yet
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
  
  // Analytics only works in browser
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
} else {
  app = getApps()[0];
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
  
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
}

export { app, auth, db, storage, analytics };
