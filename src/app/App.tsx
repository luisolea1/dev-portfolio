import { Route, Routes } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader/SiteHeader'
import { SiteFooter } from '../components/SiteFooter/SiteFooter'
import { HomePage } from '../features/home/HomePage'
import { ProjectsPage } from '../features/projects/ProjectsPage'
import { ProjectDetailPage } from '../features/projects/ProjectDetailPage'
import { CvPage } from '../features/cv/CvPage'
import { ContactPage } from '../features/contact/ContactPage'
import { NotFoundPage } from '../features/not-found/NotFoundPage'
import { RouteEffects } from './RouteEffects'

export function App() {
  return (
    <div className="site-layout">
      <RouteEffects />
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <SiteHeader />
      <main className="site-layout__main" id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/proyectos/:slug" element={<ProjectDetailPage />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
