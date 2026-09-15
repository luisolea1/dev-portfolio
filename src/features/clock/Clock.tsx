import { useEffect, useState } from 'react'
import { formatMexicoCityTime } from './formatMexicoCityTime'
import './Clock.css'

export function Clock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    // Leer el reloj del sistema en cada tick evita acumular retrasos del temporizador.
    const update = () => setNow(new Date())
    const interval = window.setInterval(update, 1000)
    const onVisibilityChange = () => { if (!document.hidden) update() }
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      window.clearInterval(interval)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  const { time, offset } = formatMexicoCityTime(now)

  return (
    <div className="clock" aria-live="off" role="timer" aria-label={`Hora en Ciudad de México: ${time}, ${offset}`}>
      <time className="clock__time" dateTime={now.toISOString()}>{time}</time>
      <span className="clock__separator" aria-hidden="true">|</span>
      <span className="clock__location">CDMX · {offset}</span>
    </div>
  )
}
