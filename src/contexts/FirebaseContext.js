// src/contexts/FirebaseContext.js
import React, { createContext, useContext } from 'react'
import { db } from '../firebase/firebase'

const FirebaseContext = createContext()

export function FirebaseProvider({ children }) {
  return (
    <FirebaseContext.Provider value={{ db }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export function useFirebase() {
  const context = useContext(FirebaseContext)
  if (!context) {
    return { db: null }
  }
  return context

}
