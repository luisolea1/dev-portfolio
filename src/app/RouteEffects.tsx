import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { getProject, getProjectName } from '../features/projects/projects.data'
import { displayName } from '../features/profile/profile.data'

const pageTitles: Record<string, string> = {
  '/': 'Home',
  '/proyectos': 'Proyectos',
  '/cv': 'CV',
  '/contacto': 'Contacto',
}

export function RouteEffects() {
  const { pathname } = useLocation()
  const previousPath = useRef(pathname)

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/$/, '') || '/'
    const slug = normalizedPath.startsWith('/proyectos/') ? normalizedPath.slice('/proyectos/'.length) : ''
    const project = getProject(slug)
    const title = pageTitles[normalizedPath] ?? (project ? getProjectName(project) : 'Página no encontrada')
    document.title = `${title} · ${displayName} · Frontend Developer`

    if (previousPath.current !== pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.getElementById('main-content')?.focus({ preventScroll: true })
      previousPath.current = pathname
    }
  }, [pathname])

  return null
}
