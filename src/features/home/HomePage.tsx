import { Link } from 'react-router-dom'
import { Hero } from './components/Hero'
import { projects } from '../projects/projects.data'
import { ProjectCard } from '../projects/components/ProjectCard'
import './HomePage.css'

export function HomePage() {
  return (
    <>
      <Hero />
      <section className="work-section container" aria-labelledby="work-heading">
        <div className="work-section__inner">
          <div className="work-section__header">
            <h2 id="work-heading" className="work-section__title">Experiencia laboral</h2>
            <Link className="text-link" to="/proyectos">Ver proyectos<span className="text-link__arrow" aria-hidden="true">→</span></Link>
          </div>
          <div className="work-section__list">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        </div>
      </section>
    </>
  )
}
