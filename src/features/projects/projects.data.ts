import kaliPreview from '../../assets/kali-preview.png'
import type { Project } from './project.types'

const pendingContent = {
  summary: null,
  context: null,
  contributions: [],
  outcome: null,
  technologies: [],
  liveUrl: null,
  repositoryUrl: null,
  contentStatus: 'pending-confirmation' as const,
}

// Rol y fechas conservados del Home de Stitch; aún por confirmar.
// Las ilustraciones representan la referencia visual, no resultados del proyecto.
export const projects: readonly Project[] = [
  {
    ...pendingContent,
    slug: 'kali',
    number: '01',
    name: 'KALI',
    role: 'Frontend Developer',
    startYear: 2026,
    endYear: 'present',
    summary: 'Diseñé, desarrollé y desplegué el sitio web responsive de Constructora KALI.',
    context: 'Asumí la responsabilidad completa del diseño visual, la experiencia de usuario y la implementación frontend.',
    contributions: [
      'Creé la interfaz y adapté la experiencia para computadoras, tabletas y dispositivos móviles.',
      'Desarrollé el sitio con React, Vite, JavaScript y CSS mediante componentes reutilizables y una arquitectura basada en datos.',
      'Centralicé la información de los proyectos para facilitar las actualizaciones de contenido e implementé la carga dinámica de imágenes.',
      'Mejoré el rendimiento y la usabilidad mediante optimización de imágenes, lazy loading, HTML semántico, accesibilidad y navegación por teclado.',
      'Desplegué el sitio en producción y continúo realizando actualizaciones y mantenimiento ocasional.',
    ],
    outcome: 'El cliente aprobó la propuesta después de una sola ronda de ajustes y continúa confiándome actualizaciones y mantenimiento ocasional.',
    technologies: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'Diseño web responsive'],
    liveUrl: 'https://www.kaliconstructora.com/',
    repositoryUrl: 'https://github.com/luisolea1/kali-constructora',
    visual: 'image',
    image: kaliPreview,
    imageAlt: 'Mockup de referencia de KALI: interfaz oscura con acentos naranjas',
  },
  ...(['chart', 'palette', 'terminal'] as const).map((visual, index): Project => ({
    ...pendingContent,
    slug: `proyecto-0${index + 2}`,
    number: `0${index + 2}`,
    name: null,
    role: 'Frontend Developer',
    startYear: null,
    endYear: null,
    visual,
    image: null,
    imageAlt: null,
  })),
]

export const getProject = (slug: string) => projects.find((project) => project.slug === slug)
export const getProjectName = (project: Project) => project.name ?? `[PROYECTO ${project.number}]`
export const getProjectPeriod = (project: Project) => `${project.startYear ?? '[AÑO DE INICIO]'} – ${project.endYear === 'present' ? 'presente' : project.endYear ?? '[AÑO DE FIN]'}`
