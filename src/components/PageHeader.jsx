export default function PageHeader({ title, subtitle }) {
  return (
    <div className="page-header">
      <div className="section-wrapper">
        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-navy-200 max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}