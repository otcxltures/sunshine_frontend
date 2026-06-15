import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCourse } from '../services/courses'
import Spinner from '../components/ui/Spinner'

export default function CourseDetail() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getCourse(id)
      .then(res => setCourse(res.data))
      .catch(() => setCourse(null))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <div className="flex justify-center py-12"><Spinner /></div>
  if (!course) return <div className="section-wrapper py-12">Course not found</div>

  return (
    <div className="section-wrapper py-12">
      <h1 className="font-display font-800 text-2xl mb-4">{course.title || course.name}</h1>
      <p className="text-slate-600 mb-4">{course.description}</p>
      <div className="text-sm text-slate-500 mb-6">
        {course.duration && <span className="mr-4">Duration: {course.duration}</span>}
        {course.seats !== undefined && <span>Seats: {course.seats}</span>}
      </div>

      <Link to={`/apply/${course.id}`} className="btn-primary">Apply for this course</Link>
    </div>
  )
}
