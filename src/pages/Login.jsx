import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const submit = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
      navigate(from, { replace: true })
    } catch (err) {
      alert(err.message || 'Login failed')
    }
  }

  return (
    <div className="section-wrapper py-12">
      <h1 className="font-display font-800 text-2xl mb-4">Login</h1>
      <form onSubmit={submit} className="max-w-md">
        <label className="field-label">Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} className="field-input mb-4" required />

        <label className="field-label">Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="field-input mb-4" required />

        <button className="btn-primary" type="submit">Sign in</button>
      </form>
    </div>
  )
}
