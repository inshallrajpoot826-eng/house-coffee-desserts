export default function WhiskIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M32 6v20" />
      <path d="M20 26c0 8 5 14 12 14s12-6 12-14" />
      <path d="M24 26c0 6 3.5 11 8 11s8-5 8-11" />
      <path d="M28 26c0 4 1.8 8 4 8s4-4 4-8" />
      <path d="M20 50h24" />
      <path d="M24 50v6M32 50v6M40 50v6" opacity="0.6" />
    </svg>
  )
}
