import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="card">
      {course.image && (
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-navy-800 mb-1">
          {course.title}
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
          {course.description}
        </p>
        <Link to={`/courses/${course.id}`} className="btn-secondary">
          View Details
        </Link>
      </div>
    </div>
  );
}