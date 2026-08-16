export default function SprigIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 12h44" />
      <path d="M76 12h40" />
      <circle cx="60" cy="12" r="5" />
      <path d="M48 12c3-4 6-4 8 0" opacity="0.6" />
      <path d="M64 12c3-4 6-4 8 0" opacity="0.6" />
    </svg>
  )
}
