const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function MenuIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  )
}

export function CloseIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  )
}

export function PinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  )
}

export function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  )
}

export function ClockIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

export function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M14.5 21v-7.5H17l.5-3.3h-3V8.1c0-.95.3-1.6 1.7-1.6H17.6V3.5A21 21 0 0 0 15.2 3.4c-2.4 0-4 1.5-4 4.2v2.6H8.6V13.5h2.6V21" />
    </svg>
  )
}

export function ArrowIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
