import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDra4Lfyx8ta8i2QG3mpH1Z2f433ih9UH0',
  authDomain: 'learninghub-6d394.firebaseapp.com',
  projectId: 'learninghub-6d394',
  storageBucket: 'learninghub-6d394.firebasestorage.app',
  messagingSenderId: '52798536842',
  appId: '1:52798536842:web:778c1f99477ca1a9404173',
  measurementId: 'G-T87W95NPTN',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

// Set persistence to local (session persists until browser is closed)
setPersistence(auth, browserLocalPersistence)
