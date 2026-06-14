import CourseCard from '../components/ui/CourseCard'
import EmptyState from '../components/ui/EmptyState'
import PageHeader from '../components/ui/PageHeader'
import Spinner from '../components/ui/Spinner'
import { useCourses } from '../hooks/useCourses'

export default function Courses() {
  const { courses, loading, error } = useCourses()

  return (
    <main>
      <PageHeader
        title="Our Courses"
        subtitle="Browse all available programmes and discover the right path for your future."
      />

      <section className="bg-slate-50 border-t border-slate-200">
        <div className="section-wrapper py-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <p className="inline-flex rounded-full bg-amber-100 text-amber-700 px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase">
              Student-first learning
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-navy-900 tracking-tight">
              Courses designed for real people.
            </h2>
            <p className="text-slate-600 sm:text-lg">
              Each programme combines hands-on practice, friendly support, and a clear path to the next step in your career.
            </p>
          </div>
        </div>
      </section>

      <section className="section-wrapper py-12">
        {loading ? (
          <div className="flex justify-center py-16">
            <Spinner size="lg" />
          </div>
        ) : error ? (
          <EmptyState
            title="Unable to load courses"
            message={error}
          />
        ) : courses.length === 0 ? (
          <EmptyState
            title="No courses found"
            message="We are updating our course list. Please check back soon."
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
