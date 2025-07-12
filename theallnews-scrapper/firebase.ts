import { initializeApp, cert, getApps } from 'firebase-admin/app';
import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

initializeApp({
  credential: cert(serviceAccount as any),
  projectId: serviceAccount.project_id 
});


export const db = admin.firestore();

