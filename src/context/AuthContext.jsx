import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import api from '../services/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('AuthProvider mounted, checking token...')
    const checkAuth = async () => {
      const token = localStorage.getItem('ss_token')
      console.log('Token found:', token ? 'YES' : 'NO')
      if (token) {
        try {
          const res = await api.get('/auth/me')
          console.log('Auth check success:', res.data)
          setUser(res.data)
        } catch (err) {
          console.error('Auth check failed:', err.response?.data || err.message)
          localStorage.removeItem('ss_token')
          setUser(null)
        }
      }
      setLoading(false)
    }
    checkAuth()
  }, [])

  const login = useCallback(async (email, password) => {
    console.log('Login attempt:', email)
    const params = new URLSearchParams()
    params.append('username', email)
    params.append('password', password)

    const res = await api.post('/auth/login', params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    
    console.log('Login response:', res.data)
    const token = res.data.access_token
    localStorage.setItem('ss_token', token)
    console.log('Token saved to localStorage')
    
    console.log('Fetching user info...')
    const userRes = await api.get('/auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
    console.log('User info:', userRes.data)
    setUser(userRes.data)
    return userRes.data
  }, [])

  const register = useCallback(async ({ email, password }) => {
    console.log('Register attempt:', email)
    try {
      await api.post('/auth/register', {
        email,
        password,
        full_name: ""
      })
      console.log('Register success, auto-logging in...')
      await login(email, password)
    } catch (err) {
      console.error('Register failed:', err.response?.data || err.message)
      throw err
    }
  }, [login])

  const logout = useCallback(() => {
    localStorage.removeItem('ss_token')
    setUser(null)
  }, [])

  const isAdmin = user?.is_admin || false

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

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