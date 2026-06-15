import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { auth } from '../firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from 'firebase/auth'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const token = await currentUser.getIdToken()
        localStorage.setItem('ss_token', token)
        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName || '',
          photoURL: currentUser.photoURL || '',
          isAnonymous: currentUser.isAnonymous,
        })
      } else {
        localStorage.removeItem('ss_token')
        setUser(null)
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const login = useCallback(async (email, password) => {
    const credential = await signInWithEmailAndPassword(auth, email, password)
    const token = await credential.user.getIdToken()
    localStorage.setItem('ss_token', token)
    setUser({
      uid: credential.user.uid,
      email: credential.user.email,
      displayName: credential.user.displayName || '',
      photoURL: credential.user.photoURL || '',
      isAnonymous: credential.user.isAnonymous,
    })
  }, [])

  const register = useCallback(async (email, password) => {
    const credential = await createUserWithEmailAndPassword(auth, email, password)
    const token = await credential.user.getIdToken()
    localStorage.setItem('ss_token', token)
    setUser({
      uid: credential.user.uid,
      email: credential.user.email,
      displayName: credential.user.displayName || '',
      photoURL: credential.user.photoURL || '',
      isAnonymous: credential.user.isAnonymous,
    })
  }, [])

  const logout = useCallback(async () => {
    await firebaseSignOut(auth)
    localStorage.removeItem('ss_token')
    setUser(null)
  }, [])

  const isAdmin = false

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
