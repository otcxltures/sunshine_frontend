import { useState } from 'react'
import { Search } from 'lucide-react'
import { useCourses } from '../hooks/useCourses'
import CourseCard from '../components/ui/CourseCard'
import Spinner from '../components/ui/Spinner'

export default function Courses() {
  const { courses, loading, error } = useCourses()
  const [search, setSearch] = useState('')

  const filtered = courses.filter(c => {
    const q = search.toLowerCase()
    return (
      (c.title || c.name || '').toLowerCase().includes(q) ||
      (c.description || '').toLowerCase().includes(q) ||
      (c.duration || '').toLowerCase().includes(q)
    )
  })

  if (loading) return <div className="flex justify-center py-12"><Spinner /></div>

  if (error) return (
    <div className="section-wrapper py-12">
      <h1 className="font-display font-800 text-2xl mb-6">All Courses</h1>
      <p className="text-red-600">Failed to load courses: {error}. Please make sure the backend server is running.</p>
    </div>
  )

  return (
    <div className="section-wrapper py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display font-800 text-3xl mb-2">All Courses</h1>
        <p className="text-slate-500 text-sm">{courses.length} programmes available</p>
      </div>

      {/* Search bar */}
      <div className="relative mb-8 max-w-md">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
        />
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <p className="text-lg font-medium">No courses match "{search}"</p>
          <p className="text-sm mt-1">Try a different keyword</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(c => <CourseCard key={c.id} course={c} />)}
        </div>
      )}
    </div>
  )
}