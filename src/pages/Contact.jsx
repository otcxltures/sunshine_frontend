import { Mail, Phone, MapPin } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'

const contactItems = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Get in touch with our support team for questions, applications, or general assistance.',
    value: 'hello@sunshineschool.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Call our admissions office during business hours for fast support.',
    value: '+254 700 123 456',
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Visit us at our campus office for a guided tour and in-person support.',
    value: 'Cookie House Lane, Nairobi, Kenya',
  },
]

export default function Contact() {
  return (
    <main>
      <PageHeader
        title="Contact Sunshine School"
        subtitle="Our support team is here to help you with course information, applications, and enrollment guidance."
      />

      <section className="section-wrapper py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {contactItems.map(({ icon: Icon, title, description, value }) => (
            <div key={title} className="card p-6">
              <div className="inline-flex items-center justify-center rounded-2xl bg-amber-100 text-amber-700 w-14 h-14 mb-5">
                <Icon size={22} />
              </div>
              <h2 className="text-xl font-semibold text-navy-900 mb-2">{title}</h2>
              <p className="text-slate-600 mb-4">{description}</p>
              <div className="text-sm font-semibold text-navy-900">{value}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-navy-900 rounded-[2rem] p-10 text-white">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-3">Need help with your application?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Our admissions advisors are happy to provide personalised support. Reach out at any time, and we&apos;ll guide you through the next steps.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-amber-300 mb-2">Admissions office</p>
                <p className="text-lg font-semibold">Mon – Fri</p>
                <p className="text-slate-300">8:30 AM – 6:00 PM</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-amber-300 mb-2">Weekend inquiries</p>
                <p className="text-lg font-semibold">Email support</p>
                <p className="text-slate-300">hello@sunshineschool.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
