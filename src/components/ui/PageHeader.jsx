export default function PageHeader({ title, subtitle, children }) {
  return (
    <section className="page-header">
      <div className="section-wrapper">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display font-800 text-3xl sm:text-4xl text-navy-900 mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-slate-600 text-base sm:text-lg mx-auto max-w-2xl">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}