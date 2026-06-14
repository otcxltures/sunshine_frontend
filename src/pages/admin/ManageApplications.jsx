import { useState, useEffect } from 'react'
import api from '../../services/api'
import Spinner from '../../components/ui/Spinner'

export default function ManageApplications() {
  const [apps, setApps] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    api.get('/applications').then(res => setApps(res.data)).finally(() => setLoading(false))
  }, [])

  // helper removed; inline calls used for simplicity

  if (loading) return <div className="flex justify-center py-12"><Spinner /></div>

  return (
    <div className="section-wrapper py-12">
      <h1 className="font-display font-800 text-2xl mb-6">Manage Applications</h1>
      <div className="space-y-4">
        {apps.map(a => (
          <div key={a.id} className="card p-4 flex justify-between items-center">
            <div>
              <div className="font-600">{a.name}</div>
              <div className="text-sm text-slate-500">Course ID: {a.course_id}</div>
            </div>
            <div className="flex gap-2">
              <button className="btn-primary" onClick={() => api.put(`/applications/${a.id}`, null, { params: { status: 'Approved' } }).then(() => window.location.reload())}>Approve</button>
              <button className="btn-danger" onClick={() => api.put(`/applications/${a.id}`, null, { params: { status: 'Rejected' } }).then(() => window.location.reload())}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
