import { useEffect, useState } from 'react'
import { getSchoolInfo } from '../services/schoolinfo'

export default function About() {
  const [info, setInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSchoolInfo()
      .then(r => setInfo(r.data))
      .catch(() => setInfo({}))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return (
    <div className="section-wrapper py-12">
      <h1 className="font-display font-800 text-2xl mb-4">About Sunshine School</h1>
      <p className="text-slate-700">Loading...</p>
    </div>
  )

  const data = info || {}

  return (
    <div className="section-wrapper py-12">
      <h1 className="font-display font-800 text-3xl mb-6">About Sunshine School</h1>

      <section className="mb-8">
        <h2 className="font-display font-700 text-xl mb-2">Our Story</h2>
        <p className="text-slate-700 mb-2">
          {data.about || 'Sunshine School is a leading institution in Nairobi offering practical, career-focused programmes.'}
        </p>
        <p className="text-slate-600 text-sm">Founded: 2010 · Location: Nairobi · Accreditation: National Council of Higher Education</p>
      </section>

      <section className="mb-8 grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-display font-700 text-lg mb-2">Our Mission</h3>
          <p className="text-slate-700">
            {data.mission || 'To equip students with the skills and knowledge to thrive in a competitive world.'}
          </p>
        </div>

        <div>
          <h3 className="font-display font-700 text-lg mb-2">Quick Facts</h3>
          <ul className="list-disc ml-5 text-slate-700">
            <li>Established: 2010</li>
            <li>Graduates: 2,000+</li>
            <li>Industry partners: 30+</li>
            <li>Full-time faculty: 120+</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="font-display font-700 text-lg mb-2">What We Offer</h3>
        <p className="text-slate-700">We offer undergraduate degree programmes across engineering, health sciences, business and applied sciences. Our practical, project-based curriculum is designed to prepare students for the workplace.</p>
      </section>

      <section className="mb-8">
        <h3 className="font-display font-700 text-lg mb-2">History & Milestones</h3>
        <ol className="list-decimal ml-5 text-slate-700 space-y-2">
          <li><strong>2010</strong> — Sunshine School opens with community classroom programs.</li>
          <li><strong>2014</strong> — Expanded to full diploma and certificate offerings.</li>
          <li><strong>2018</strong> — Launched degree-level programmes and employer partnerships.</li>
          <li><strong>2023</strong> — Introduced career placement services and internships.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h3 className="font-display font-700 text-lg mb-2">Key Achievements</h3>
        <ul className="list-disc ml-5 space-y-2 text-slate-700">
          {data.achievements ? data.achievements.split(';').map((a, i) => <li key={i}>{a.trim()}</li>) : (
            <>
              <li>Graduated over 2,000 students with strong placement rates.</li>
              <li>Launched partnerships with local employers for internships.</li>
              <li>Recognized for excellence in community outreach.</li>
            </>
          )}
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="font-display font-700 text-lg mb-2">Campus & Facilities</h3>
        <p className="text-slate-700">Our campus includes modern classrooms, computer labs, science and engineering workshops, a clinical skills lab, and a student resource center. We prioritize safety and accessibility across campus.</p>
      </section>

      <section className="mb-8 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="font-display font-700 text-lg mb-2">Student Life</h3>
          <p className="text-slate-700 mb-2">Students at Sunshine School combine classroom learning with hands-on projects, group labs, and community placements. Clubs, mentorship programmes, and career services help students build portfolios and secure internships.</p>
          <p className="text-slate-700">Our learning spaces are designed for collaboration — you'll find study groups in the library, team projects in the workshops, and frequent guest lectures from industry partners.</p>
        </div>

        <div>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop&crop=faces" alt="Students studying together" className="w-full rounded-lg shadow-lg object-cover" />
        </div>
      </section>

      <section className="mb-8">
        <h3 className="font-display font-700 text-lg mb-2">Leadership</h3>
        <p className="text-slate-700">Our executive team combines academic leadership and industry experience to guide curriculum and student support.</p>
      </section>

      <p className="mt-6 text-sm text-slate-500">Want to learn more or arrange a visit? See the Contact page or reach out via email.</p>
    </div>
  )
}