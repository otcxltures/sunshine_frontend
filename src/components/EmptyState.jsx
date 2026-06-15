export default function EmptyState({ title = "Nothing here yet", message, icon }) {
  return (
    <div className="text-center py-16">
      {icon && <div className="mb-4 flex justify-center text-slate-400">{icon}</div>}
      <h3 className="font-display font-semibold text-lg text-navy-800 mb-2">
        {title}
      </h3>
      {message && <p className="text-sm text-slate-500">{message}</p>}
    </div>
  );
}