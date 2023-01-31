import { initializeApp } from 'firebase/app';
import { User } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD1o9aHNKluriDJADv7485vB7u3Dng3Wrc',
  authDomain: 'github-stats-c8942.firebaseapp.com',
  projectId: 'github-stats-c8942',
  storageBucket: 'github-stats-c8942.appspot.com',
  messagingSenderId: '791730288453',
  appId: '1:791730288453:web:7a09cfd45d34244d68f02c',
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
