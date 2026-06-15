import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../services/api'
import { getCourse } from '../services/courses'

export default function Apply() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [course, setCourse] = useState(null)

  useEffect(() => {
    if (!id) return
    getCourse(id).then(res => setCourse(res.data)).catch(() => setCourse(null))
  }, [id])

  const submit = async (e) => {
    e.preventDefault()
    try {
      await api.post('/apply', { name, course_id: Number(id) })
      navigate('/my-applications')
    } catch (err) {
      alert(err.message || 'Failed to submit')
    }
  }

  return (
    <div className="section-wrapper py-12">
      <h1 className="font-display font-800 text-2xl mb-4">Apply{course ? ` — ${course.title || course.name}` : ''}</h1>
      <form onSubmit={submit} className="max-w-md">
        <label className="field-label">Full name</label>
        <input value={name} onChange={e => setName(e.target.value)} className="field-input mb-4" required />

        <button className="btn-primary" type="submit">Submit application</button>
      </form>
    </div>
  )
}
