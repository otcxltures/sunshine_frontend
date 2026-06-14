import { useState, useEffect } from 'react'
import { getCourses, createCourse as apiCreate, updateCourse as apiUpdate, deleteCourse as apiDelete } from '../../services/courses'
import Spinner from '../../components/ui/Spinner'

export default function ManageCourses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')

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
            <div className="font-600">{c.title || c.name}</div>
            <div className="text-sm text-slate-500 mt-2">{c.description}</div>
            <div className="mt-4 flex gap-2">
              <button className="btn-danger" onClick={() => remove(c.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
