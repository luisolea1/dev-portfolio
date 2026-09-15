import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Clock } from '../../features/clock/Clock.tsx'
import { displayName, profile } from '../../features/profile/profile.data'
import './SiteHeader.css'

const navigation = [
  { to: '/', label: 'Home', end: true },
  { to: '/proyectos', label: 'Proyectos', end: false },
  { to: '/cv', label: 'CV', end: false },
  { to: '/contacto', label: 'Contacto', end: false },
]

export function SiteHeader() {
  const location = useLocation()
  const [openAtLocation, setOpenAtLocation] = useState<string | null>(null)
  const menuButton = useRef<HTMLButtonElement>(null)
  const header = useRef<HTMLElement>(null)
  const menuOpen = openAtLocation === location.key
  const closeMenu = () => setOpenAtLocation(null)

  useEffect(() => {
    // También olvidar el menú al usar Atrás/Adelante, aunque se vuelva a la misma key.
    setOpenAtLocation(null)
  }, [location.key])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 75rem)')
    const onResize = () => { if (desktop.matches) setOpenAtLocation(null) }
    desktop.addEventListener('change', onResize)
    return () => desktop.removeEventListener('change', onResize)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpenAtLocation(null)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [menuOpen])

  return (
    <header className="site-header" ref={header} onKeyDown={(event) => {
      if (event.key === 'Escape' && menuOpen) {
        closeMenu()
        menuButton.current?.focus()
      }
    }}>
      <div className="site-header__inner container">
        <div className="site-header__identity">
          <Link to="/" className="site-header__brand" aria-label="Ir a Home" onClick={closeMenu}>
            <span className="site-header__name">{displayName}</span>
            <span className="site-header__slash" aria-hidden="true">/</span>
            <span className="site-header__role">{profile.role}</span>
          </Link>
          <button ref={menuButton} className="site-header__toggle" type="button" aria-controls="primary-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'} onClick={() => setOpenAtLocation(menuOpen ? null : location.key)}>
            Menú <span className={`site-header__chevron${menuOpen ? ' site-header__chevron--open' : ''}`} aria-hidden="true">⌄</span>
          </button>
        </div>
        <div className="site-header__clock"><Clock /></div>
        <nav id="primary-navigation" className={`site-header__nav${menuOpen ? ' site-header__nav--open' : ''}`} aria-label="Navegación principal">
          {navigation.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `site-header__link${isActive ? ' site-header__link--active' : ''}`} onClick={closeMenu}>{label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
