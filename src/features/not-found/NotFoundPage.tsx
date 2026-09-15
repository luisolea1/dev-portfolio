import { Link } from 'react-router-dom'
import './NotFoundPage.css'

export function NotFoundPage({ projectNotFound = false }: { projectNotFound?: boolean }) {
  return (
    <section className="not-found container">
      <div className="page-heading">
        <p className="page-heading__eyebrow">404 / Ruta no disponible</p>
        <h1 className="page-heading__title">{projectNotFound ? 'Proyecto no encontrado.' : 'Página no encontrada.'}</h1>
        <p className="page-heading__description">{projectNotFound ? 'No hay una ficha para esta dirección.' : 'Esta dirección no corresponde a una página del portafolio.'}</p>
      </div>
      <Link className="button-link" to={projectNotFound ? '/proyectos' : '/'}>{projectNotFound ? 'Volver a proyectos' : 'Volver a Home'} →</Link>
    </section>
  )
}
