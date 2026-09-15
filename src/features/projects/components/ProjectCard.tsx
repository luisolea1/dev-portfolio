import { Link } from 'react-router-dom'
import type { Project } from '../project.types'
import { getProjectName, getProjectPeriod } from '../projects.data'
import { ProjectVisual } from './ProjectVisual'
import './ProjectCard.css'

export function ProjectCard({ project, headingAs: Heading = 'h3' }: { project: Project; headingAs?: 'h2' | 'h3' }) {
  const name = getProjectName(project)
  return (
    <Link className="project-card" to={`/proyectos/${project.slug}`} aria-label={`Ver ficha de ${name}`}>
      <ProjectVisual project={project} />
      <div className="project-card__content">
        <div className="project-card__heading">
          <Heading className="project-card__title">{name}</Heading>
          <span className="project-card__arrow" aria-hidden="true">↗</span>
        </div>
        <p className="project-card__meta">{project.role ?? '[ROL]'} · {getProjectPeriod(project)}</p>
      </div>
    </Link>
  )
}
