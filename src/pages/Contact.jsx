import { useState } from 'react'
import api from '../services/api'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    try {
      await api.post('/inquiries', { name, email, message })
      alert('Message sent — we will reply soon')
      setName(''); setEmail(''); setMessage('')
    } catch (err) {
      alert(err.message || 'Failed to send')
    }
  }

  return (
    <div className="section-wrapper py-12 max-w-lg">
      <h1 className="font-display font-800 text-2xl mb-4">Contact Us</h1>
      <form onSubmit={submit}>
        <label className="field-label">Name</label>
        <input value={name} onChange={e => setName(e.target.value)} className="field-input mb-4" required />

        <label className="field-label">Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} className="field-input mb-4" required />

        <label className="field-label">Message</label>
        <textarea value={message} onChange={e => setMessage(e.target.value)} className="field-textarea mb-4" rows={6} required />

        <button className="btn-primary" type="submit">Send message</button>
      </form>
    </div>
  )
}
