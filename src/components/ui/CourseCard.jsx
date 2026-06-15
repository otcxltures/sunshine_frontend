import { Link } from 'react-router-dom'
import { Clock, Users, ArrowRight } from 'lucide-react'

const CATEGORY_COLORS = {
  bsc:     'from-blue-400 to-blue-600',
  bba:     'from-emerald-400 to-emerald-600',
  bcom:    'from-violet-400 to-violet-600',
  llb:     'from-rose-400 to-rose-600',
  diploma: 'from-amber-400 to-amber-600',
  default: 'from-amber-400 to-amber-600',
}

function getColor(name = '') {
  const prefix = name.split('_')[0].toLowerCase()
  return CATEGORY_COLORS[prefix] || CATEGORY_COLORS.default
}

export default function CourseCard({ course }) {
  const { id, name, title, description, duration, seats } = course
  const displayTitle = title || name || 'Untitled Course'
  const color = getColor(name)

  return (
    <article className="card flex flex-col group hover:shadow-lg transition-shadow duration-200">
      {/* Colour stripe */}
      <div className={`h-1.5 bg-gradient-to-r ${color} rounded-t`} />

      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="font-display font-700 text-navy-800 text-lg leading-snug group-hover:text-amber-600 transition-colors">
          {displayTitle}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">
          {description || 'No description available.'}
        </p>

        <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mt-1">
          {duration && (
            <span className="flex items-center gap-1">
              <Clock size={12} /> {duration}
            </span>
          )}
          {seats !== undefined && seats !== null && (
            <span className="flex items-center gap-1">
              <Users size={12} /> {seats} seats
            </span>
          )}
        </div>

        <Link
          to={`/courses/${id}`}
          className="mt-2 inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700 text-sm font-600 transition-colors"
        >
          View details <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  )
}