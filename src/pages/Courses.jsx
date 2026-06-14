import { useCourses } from '../hooks/useCourses'
import CourseCard from '../components/ui/CourseCard'
import Spinner from '../components/ui/Spinner'

export default function Courses() {
  const { courses, loading } = useCourses()

  if (loading) return <div className="flex justify-center py-12"><Spinner /></div>

  return (
    <div className="section-wrapper py-12">
      <h1 className="font-display font-800 text-2xl mb-6">All Courses</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(c => <CourseCard key={c.id} course={c} />)}
      </div>
    </div>
  )
}
