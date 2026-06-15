import { useEffect, useState } from 'react'
import { getSchoolInfo, updateSchoolInfo } from '../../services/schoolinfo'
import Spinner from '../../components/ui/Spinner'

export default function SchoolInfoAdmin(){
  const [loading, setLoading] = useState(true)
  const [about, setAbout] = useState('')
  const [mission, setMission] = useState('')
  const [achievements, setAchievements] = useState('')

  useEffect(()=>{
    setLoading(true)
    getSchoolInfo().then(r=>{ setAbout(r.data.about||''); setMission(r.data.mission||''); setAchievements(r.data.achievements||'') }).finally(()=>setLoading(false))
  },[])

  const save = async ()=>{
    await updateSchoolInfo({ about, mission, achievements })
    alert('Saved')
  }

  if(loading) return <div className="flex justify-center py-12"><Spinner /></div>

  return (
    <div className="section-wrapper py-12">
      <h1 className="font-display font-800 text-2xl mb-6">School Information</h1>

      <div className="max-w-3xl">
        <label className="field-label">About</label>
        <textarea className="field-textarea mb-4" value={about} onChange={e=>setAbout(e.target.value)} />

        <label className="field-label">Mission</label>
        <textarea className="field-textarea mb-4" value={mission} onChange={e=>setMission(e.target.value)} />

        <label className="field-label">Achievements (comma separated)</label>
        <input className="field-input mb-4" value={achievements} onChange={e=>setAchievements(e.target.value)} />

        <div className="flex gap-2">
          <button className="btn-primary" onClick={save}>Save</button>
        </div>
      </div>
    </div>
  )
}
