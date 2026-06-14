export default function StatusBadge({ status }) {
  const statusMap = {
    pending: { label: "Pending", className: "badge-pending" },
    approved: { label: "Approved", className: "badge-approved" },
    rejected: { label: "Rejected", className: "badge-rejected" },
  };

  const config = statusMap[status?.toLowerCase()] || statusMap.pending;

  return <span className={config.className}>{config.label}</span>;
}