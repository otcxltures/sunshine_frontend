import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    try {
      await register({ email, password })
      navigate('/login')
    } catch (err) {
      alert(err.message || 'Registration failed')
    }
  }

  return (
    <div className="section-wrapper py-12">
      <h1 className="font-display font-800 text-2xl mb-4">Create an account</h1>
      <form onSubmit={submit} className="max-w-md">
        <label className="field-label">Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} className="field-input mb-4" required />

        <label className="field-label">Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="field-input mb-4" required />

        <button className="btn-primary" type="submit">Register</button>
      </form>
    </div>
  )
}
