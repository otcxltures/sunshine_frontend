import { useState, useEffect } from 'react'
import { getCourses, createCourse as apiCreate, updateCourse as apiUpdate, deleteCourse as apiDelete } from '../../services/courses'
import Spinner from '../../components/ui/Spinner'

export default function ManageCourses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editFields, setEditFields] = useState({ title: '', description: '', duration: '', seats: '' })

  useEffect(() => {
    setLoading(true)
    getCourses().then(res => setCourses(res.data)).finally(() => setLoading(false))
  }, [])

  const add = async (e) => {
    e.preventDefault()
    const res = await apiCreate({ name })
    setCourses(prev => [res.data, ...prev])
    setName('')
  }

  const startEdit = (c) => {
    setEditingId(c.id)
    setEditFields({
      title: c.title || c.name || '',
      description: c.description || '',
      duration: c.duration || '',
      seats: c.seats ?? '',
    })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditFields({ title: '', description: '', duration: '', seats: '' })
  }

  const saveEdit = async (id) => {
    const payload = {
      title: editFields.title,
      description: editFields.description,
      duration: editFields.duration,
      seats: editFields.seats ? Number(editFields.seats) : undefined,
    }
    const res = await apiUpdate(id, payload)
    setCourses(prev => prev.map(c => c.id === id ? res.data : c))
    cancelEdit()
  }

  const remove = async (id) => {
    if (!confirm('Delete course?')) return
    await apiDelete(id)
    setCourses(prev => prev.filter(c => c.id !== id))
  }

  if (loading) return <div className="flex justify-center py-12"><Spinner /></div>

  return (
    <div className="section-wrapper py-12">
      <h1 className="font-display font-800 text-2xl mb-6">Manage Courses</h1>

      <form onSubmit={add} className="mb-6 max-w-md">
        <div className="flex gap-2">
          <input value={name} onChange={e => setName(e.target.value)} className="field-input" placeholder="New course name" required />
          <button className="btn-primary" type="submit">Add</button>
        </div>
      </form>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(c => (
          <div key={c.id} className="card p-4">
            {editingId === c.id ? (
              <div>
                <input className="field-input mb-2" value={editFields.title} onChange={e => setEditFields(f => ({ ...f, title: e.target.value }))} />
                <textarea className="field-textarea mb-2" value={editFields.description} onChange={e => setEditFields(f => ({ ...f, description: e.target.value }))} />
                <div className="flex gap-2 mb-2">
                  <input className="field-input" placeholder="Duration" value={editFields.duration} onChange={e => setEditFields(f => ({ ...f, duration: e.target.value }))} />
                  <input className="field-input" placeholder="Seats" value={editFields.seats} onChange={e => setEditFields(f => ({ ...f, seats: e.target.value }))} />
                </div>
                <div className="flex gap-2">
                  <button className="btn-primary" onClick={() => saveEdit(c.id)}>Save</button>
                  <button className="btn-secondary" onClick={cancelEdit}>Cancel</button>
                </div>
              </div>
            ) : (
              <div>
                <div className="font-600">{c.title || c.name}</div>
                <div className="text-sm text-slate-500 mt-2">{c.description}</div>
                <div className="mt-4 flex gap-2">
                  <button className="btn-secondary" onClick={() => startEdit(c)}>Edit</button>
                  <button className="btn-danger" onClick={() => remove(c.id)}>Delete</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
