import { useEffect, useState } from 'react'
import { getAnnouncements, createAnnouncement, updateAnnouncement, deleteAnnouncement } from '../../services/announcements'
import Spinner from '../../components/ui/Spinner'

export default function ManageAnnouncements(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [editingId, setEditingId] = useState(null)

  useEffect(()=>{
    setLoading(true)
    getAnnouncements().then(r=>setItems(r.data)).finally(()=>setLoading(false))
  },[])

  const add = async (e)=>{
    e.preventDefault()
    const res = await createAnnouncement({ title, content, created_at: new Date().toISOString().slice(0,10) })
    setItems(prev=>[res.data,...prev])
    setTitle('')
    setContent('')
  }

  const startEdit = (it)=>{ setEditingId(it.id); setTitle(it.title); setContent(it.content) }
  const cancel = ()=>{ setEditingId(null); setTitle(''); setContent('') }
  const save = async ()=>{ const res = await updateAnnouncement(editingId,{ title, content, created_at: new Date().toISOString().slice(0,10) }); setItems(prev=>prev.map(i=>i.id===editingId?res.data:i)); cancel() }
  const remove = async (id)=>{ if(!confirm('Delete announcement?')) return; await deleteAnnouncement(id); setItems(prev=>prev.filter(i=>i.id!==id)) }

  if(loading) return <div className="flex justify-center py-12"><Spinner /></div>

  return (
    <div className="section-wrapper py-12">
      <h1 className="font-display font-800 text-2xl mb-6">Manage Announcements</h1>

      <form onSubmit={add} className="mb-6 max-w-2xl">
        <input className="field-input mb-2" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} required />
        <textarea className="field-textarea mb-2" placeholder="Content" value={content} onChange={e=>setContent(e.target.value)} required />
        <div className="flex gap-2">
          <button className="btn-primary" type="submit">Add Announcement</button>
          {editingId && <button type="button" className="btn-secondary" onClick={cancel}>Cancel edit</button>}
        </div>
      </form>

      <div className="space-y-4">
        {items.map(it=> (
          <div key={it.id} className="card p-4">
            <div className="font-700">{it.title}</div>
            <div className="text-sm text-slate-600 mt-2">{it.content}</div>
            <div className="mt-3 flex gap-2">
              <button className="btn-secondary" onClick={()=>startEdit(it)}>Edit</button>
              <button className="btn-danger" onClick={()=>remove(it.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
