export default function Card({ icon, badge, title, subtitle, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {icon && <div className="mb-3 text-3xl">{icon}</div>}
      {badge && (
        <span className="mb-2 inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
          {badge}
        </span>
      )}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {subtitle && <p className="mb-2 text-sm text-gray-500">{subtitle}</p>}
      <div className="text-sm text-gray-600">{children}</div>
    </div>
  );
}
