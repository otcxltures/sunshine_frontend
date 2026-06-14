import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="section-wrapper py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="font-display font-bold text-lg mb-2">Sunshine School</h3>
          <p className="text-sm text-navy-200">
            Empowering futures through quality education and accessible admissions.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/courses" className="hover:text-amber-400">Courses</Link></li>
            <li><Link to="/about" className="hover:text-amber-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-amber-400">Contact</Link></li>
            <li><Link to="/apply" className="hover:text-amber-400">Apply Now</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-2">Contact</h4>
          <p className="text-sm text-navy-200">123 School Road, Nairobi, Kenya</p>
          <p className="text-sm text-navy-200">info@sunshineschool.ac.ke</p>
          <p className="text-sm text-navy-200">+254 700 000 000</p>
        </div>
      </div>

      <div className="border-t border-navy-700 py-4 text-center text-xs text-navy-300">
        © {new Date().getFullYear()} Sunshine School. All rights reserved.
      </div>
    </footer>
  );
}