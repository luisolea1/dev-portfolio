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

// Nombres, rol y fechas conservados del Home de Stitch; aún por confirmar.
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
