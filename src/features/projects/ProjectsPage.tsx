import { projects } from './projects.data'
import { ProjectCard } from './components/ProjectCard'
import './ProjectsPage.css'

export function ProjectsPage() {
  return (
    <div className="projects-page container">
      <header className="page-heading">
        <p className="page-heading__eyebrow">Trabajo / {String(projects.length).padStart(2, '0')} proyectos</p>
        <h1 className="page-heading__title">Proyectos<span className="projects-page__dot">.</span></h1>
      </header>
      <div className="projects-page__list">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} headingAs="h2" />)}
      </div>
    </div>
  )
}
