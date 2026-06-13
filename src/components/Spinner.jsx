export default function Spinner({ size = "md" }) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-12 w-12 border-3",
  };

  return (
    <div className="flex items-center justify-center py-8">
      <div
        className={`${sizes[size]} border-navy-200 border-t-navy-600 rounded-full animate-spin`}
      />
    </div>
  );
}
