import { Link } from 'react-router-dom'
import { Sun, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-navy-200 mt-auto">
      <div className="section-wrapper py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-amber-500 text-white p-1.5 rounded-lg">
                <Sun size={16} />
              </span>
              <span className="font-display font-700 text-white text-base">Sunshine School</span>
            </div>
            <p className="text-sm leading-relaxed text-navy-300">
              Empowering students with quality education and clear pathways to their future careers.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-600 text-white text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[['/', 'Home'], ['/courses', 'Courses'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-amber-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-600 text-white text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-amber-500 shrink-0" />
                123 School Lane, Nairobi, Kenya
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-amber-500 shrink-0" />
                +254 700 000 000
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-amber-500 shrink-0" />
                info@sunshineschool.ac.ke
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-10 pt-6 text-center text-xs text-navy-400">
          © {year} Sunshine School. All rights reserved.
        </div>
      </div>
    </footer>
  )
}