import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Award, Clock } from 'lucide-react'
import { useCourses } from '../hooks/useCourses'
import CourseCard from '../components/ui/CourseCard'
import Spinner from '../components/ui/Spinner'

const stats = [
  { icon: BookOpen, value: '40+',  label: 'Courses Offered'  },
  { icon: Users,    value: '2,000+', label: 'Students Enrolled' },
  { icon: Award,    value: '98%',  label: 'Completion Rate'  },
  { icon: Clock,    value: '15+',  label: 'Years of Excellence' },
]

export default function Home() {
  const { courses, loading } = useCourses({ limit: 3 })

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy-800 overflow-hidden">

        <div className="section-wrapper relative py-20 sm:py-28">
          <div className="max-w-2xl">
            <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-600 uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Admissions Open 2026
            </span>
            <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5">
              Bright Futures<br />
              <span className="text-amber-400">Start Here.</span>
            </h1>
            <p className="text-navy-200 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              Explore our programmes, meet our community, and apply online — all in one place.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/courses" className="btn-primary text-base px-6 py-3">
                Browse Courses <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-secondary text-base px-6 py-3">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-amber-500 py-10">
        <div className="section-wrapper">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <Icon className="mx-auto mb-2 text-amber-900/60" size={22} />
                <div className="font-display font-800 text-3xl text-white">{value}</div>
                <div className="text-amber-900/80 text-sm font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured courses ── */}
      <section className="py-16 sm:py-20">
        <div className="section-wrapper">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-amber-600 text-xs font-700 uppercase tracking-widest mb-1">Our Programmes</p>
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-navy-800">Featured Courses</h2>
            </div>
            <Link to="/courses" className="text-navy-600 hover:text-amber-600 text-sm font-600 flex items-center gap-1 transition-colors">
              View all <ArrowRight size={14} />
            </Link>
          </div>

          {loading ? (
            <div className="flex justify-center py-12"><Spinner /></div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(c => <CourseCard key={c.id} course={c} />)}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-navy-800 py-14">
        <div className="section-wrapper text-center">
          <h2 className="font-display font-800 text-2xl sm:text-3xl text-white mb-3">
            Ready to take the next step?
          </h2>
          <p className="text-navy-300 mb-7 max-w-md mx-auto">
            Create an account and submit your application in minutes. Admissions are open now.
          </p>
          <Link to="/register" className="btn-primary text-base px-7 py-3">
            Apply Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}