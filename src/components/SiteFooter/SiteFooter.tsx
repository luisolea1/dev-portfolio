import { Link } from 'react-router-dom'
import { displayName, profile } from '../../features/profile/profile.data'
import './SiteFooter.css'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <p className="site-footer__copyright"><span className="site-footer__name">{displayName}</span> · © {new Date().getFullYear()}</p>
        <nav className="site-footer__links" aria-label="Enlaces de contacto y redes">
          {profile.email ? <a href={`mailto:${profile.email}`}>{profile.email}</a> : <span className="site-footer__pending" title="Correo pendiente de completar">[EMAIL]</span>}
          {profile.linkedInUrl ? <a href={profile.linkedInUrl} target="_blank" rel="noreferrer">LinkedIn</a> : <span className="site-footer__pending" title="Perfil de LinkedIn pendiente de completar">LinkedIn · pendiente</span>}
          <Link to="/cv">CV</Link>
        </nav>
      </div>
    </footer>
  )
}
