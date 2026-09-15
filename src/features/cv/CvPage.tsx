import { Link } from 'react-router-dom'
import { displayName, profile } from '../profile/profile.data'
import { projects, getProjectName, getProjectPeriod } from '../projects/projects.data'
import './CvPage.css'

export function CvPage() {
  return (
    <div className="cv-page container">
      <header className="page-heading cv-page__header">
        <div>
          <p className="page-heading__eyebrow">{displayName} / {profile.role}</p>
          <h1 className="page-heading__title">Currículum vitae<span className="cv-page__dot">.</span></h1>
        </div>
        {profile.cvUrl ? <a className="button-link" href={profile.cvUrl} download>Descargar CV ↓</a> : <span className="cv-page__pending">PDF del CV · pendiente</span>}
      </header>
      <section className="cv-page__section" aria-labelledby="cv-profile">
        <h2 id="cv-profile" className="cv-page__section-title">Perfil</h2>
        <p className="pending-field">{profile.cvSummary ?? '[RESUMEN PROFESIONAL]'}</p>
      </section>
      <section className="cv-page__section" aria-labelledby="cv-experience">
        <h2 id="cv-experience" className="cv-page__section-title">Experiencia</h2>
        <div className="cv-page__experience">
          {projects.map((project) => <div key={project.slug} className="cv-page__position">
            <h3 className="cv-page__project-name"><Link to={`/proyectos/${project.slug}`}>{getProjectName(project)} <span aria-hidden="true">↗</span></Link></h3>
            <p>{project.role ?? '[ROL]'}</p>
            <p className="cv-page__period">{getProjectPeriod(project)}</p>
          </div>)}
        </div>
      </section>
      <section className="cv-page__section" aria-labelledby="cv-education">
        <h2 id="cv-education" className="cv-page__section-title">Formación</h2>
        <p className="pending-field">{profile.education ?? '[FORMACIÓN ACADÉMICA Y CERTIFICACIONES]'}</p>
      </section>
      <section className="cv-page__section" aria-labelledby="cv-skills">
        <h2 id="cv-skills" className="cv-page__section-title">Habilidades</h2>
        <p className="pending-field">{profile.skills.length ? profile.skills.join(' · ') : '[HABILIDADES Y TECNOLOGÍAS]'}</p>
      </section>
    </div>
  )
}
