import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-navy-800 text-white">
      <nav className="section-wrapper flex items-center justify-between h-16">
        <Link to="/" className="font-display font-bold text-lg">
          Sunshine School
        </Link>
        <div className="flex gap-6 text-sm">
          <NavLink to="/" className="hover:text-amber-400">Home</NavLink>
          <NavLink to="/courses" className="hover:text-amber-400">Courses</NavLink>
          <NavLink to="/about" className="hover:text-amber-400">About</NavLink>
          <NavLink to="/courses" className="hover:text-amber-400">Apply</NavLink>
          <NavLink to="/contact" className="hover:text-amber-400">Contact</NavLink>
          <NavLink to="/login" className="hover:text-amber-400">Login</NavLink>
        </div>
      </nav>
    </header>
  );
}
