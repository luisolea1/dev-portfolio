import { displayName, profile } from '../../profile/profile.data'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">

      <div className="hero__content">
        
        <h1 id="hero-title" className="hero__title">Hola, soy {displayName}. Desarrollo interfaces web y experiencias digitales<span className="hero__dot" aria-hidden="true">.</span></h1>
        <div className="hero__introduction">
          <p className="hero__role">{profile.role}</p>
          <p className="hero__description">{profile.introduction ?? 'Disfruto convertir ideas en sitios que se ven bien y se sienten fáciles de usar. Busco aportar esa perspectiva a cada proyecto.'}</p>
        </div>
      </div>
    </section>
  )
}
