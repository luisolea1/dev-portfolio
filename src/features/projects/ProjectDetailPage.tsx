import { Link, useParams } from 'react-router-dom'
import { getProject, getProjectName, getProjectPeriod } from './projects.data'
import { ProjectVisual } from './components/ProjectVisual'
import { NotFoundPage } from '../not-found/NotFoundPage'
import './ProjectDetailPage.css'

export function ProjectDetailPage() {
  const { slug = '' } = useParams()
  const project = getProject(slug)
  if (!project) return <NotFoundPage projectNotFound />

  return (
    <article className="project-detail container">

      <header className="page-heading">
        <Link className="text-link" to="/proyectos">← Volver a proyectos</Link>
        <p className="page-heading__eyebrow project-detail__eyebrow">Proyecto / {project.number}</p>
        <h1 className="page-heading__title">{getProjectName(project)}</h1>
        <p className="page-heading__description">{project.summary ?? '[DESCRIPCIÓN DEL PROYECTO]'}</p>
      </header>


      <dl className="project-detail__metadata">
        <div className="project-detail__datum"><dt>rol :</dt><dd>{project.role ?? '[ROL]'}</dd></div>
        <div className="project-detail__datum"><dt>período :</dt><dd>{getProjectPeriod(project)}</dd></div>
        <div className="project-detail__datum"><dt>tecnologías :</dt><dd>{project.technologies.length ? project.technologies.join(' · ') : '[TECNOLOGÍAS]'}</dd></div>
      </dl>


      <figure className="project-detail__figure">
        <ProjectVisual project={project} />
        {!project.image && project.contentStatus === 'pending-confirmation' && <figcaption className="project-detail__caption">Referencia visual provisional · contenido pendiente de confirmar.</figcaption>}
      </figure>


      <div className="project-detail__body">
        <section className="project-detail__section" aria-labelledby="project-context">
          <h2 id="project-context" className="project-detail__section-title">Contexto</h2>
          <p className="project-detail__text">{project.context ?? '[CONTEXTO, OBJETIVO Y NECESIDADES DEL PROYECTO]'}</p>
        </section>

        <section className="project-detail__section" aria-labelledby="project-contributions">
          <h2 id="project-contributions"
          className="project-detail__section-title">Mi contribución</h2>
          {project.contributions.length ?
          <ul className="project-detail__contributions">{project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul> : <p className="project-detail__text">[RESPONSABILIDADES, DECISIONES Y APORTACIONES REALES]</p>}
        </section>

        <section className="project-detail__section" aria-labelledby="project-outcome">
          <h2 id="project-outcome" className="project-detail__section-title">Resultados</h2>
          <p className="project-detail__text">{project.outcome ?? '[RESULTADOS Y APRENDIZAJES VERIFICABLES]'}</p>
        </section>
      </div>

      <div className="project-detail__links">
        {project.liveUrl ? <a className="button-link" href={project.liveUrl} target="_blank" rel="noreferrer">Ver proyecto ↗</a> : <span className="project-detail__pending">Demo · pendiente</span>}
        {project.repositoryUrl ? <a className="button-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">Repositorio ↗</a> : <span className="project-detail__pending">Repositorio · pendiente</span>}
      </div>
    </article>
  )
}
