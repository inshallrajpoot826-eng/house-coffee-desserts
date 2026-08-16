import { useState } from 'react'

/**
 * Renders a photo with a graceful fallback: if the hotlinked URL ever
 * breaks, we show a soft branded gradient instead of a broken-image icon,
 * so the layout never looks broken even if an external image 404s.
 */
export default function Photo({ src, alt, className = '', loading = 'lazy' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <div className={`photo-fallback ${className}`} role="img" aria-label={alt} />
  }

  return <img src={src} alt={alt} className={className} loading={loading} onError={() => setFailed(true)} />
}
