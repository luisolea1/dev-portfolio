import aroundCover from '../../assets/around-cover.webp'
import homelandCover from '../../assets/homeland-cover.png'
import kaliCover from '../../assets/kali-cover.webp'
import tvExplorerCover from '../../assets/tv-explorer-cover.webp'
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

// Los datos pendientes se conservan como null hasta confirmarlos.
// Las portadas son capturas proporcionadas por el autor.
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
    image: kaliCover,
    imageAlt: 'Portada de Constructora KALI con su propuesta de construcción y una vivienda con piscina',
    imageWidth: 1604,
    imageHeight: 1250,
  },
  {
    ...pendingContent,
    slug: 'proyecto-02',
    number: '02',
    name: 'TV Explorer',
    role: 'Frontend Developer',
    startYear: 2026,
    endYear: 2026,
    summary: 'Diseñé, desarrollé y desplegué TV Explorer como mi proyecto final de TripleTen.',
    context: 'Asumí la responsabilidad completa del diseño visual, la experiencia de usuario, la arquitectura frontend y la publicación de la aplicación.',
    contributions: [
      'Desarrollé la interfaz con React, Vite, JavaScript y React Router.',
      'Integré la API REST pública de TVmaze mediante Fetch para buscar y mostrar información actualizada sobre series.',
      'Implementé resultados con carga progresiva y fichas con título, imagen, géneros, idioma, calificación, estado y descripción.',
      'Creé una vista modal para consultar información detallada sin abandonar los resultados de búsqueda.',
      'Gestioné estados de carga, resultados vacíos y errores durante las solicitudes a la API.',
      'Construí una experiencia responsive con CSS y metodología BEM para computadoras, tabletas y dispositivos móviles.',
      'Analicé la calidad del código con Oxlint y desplegué la aplicación en Vercel.',
    ],
    outcome: 'Completé el proyecto desde el diseño inicial hasta su despliegue en producción en menos de una semana, entre el 17 y el 20 de agosto de 2026.',
    technologies: ['React', 'Vite', 'JavaScript', 'React Router', 'API REST', 'Fetch', 'HTML5', 'CSS3', 'BEM', 'Git', 'Oxlint', 'Vercel'],
    liveUrl: 'https://tv-explorer-frontend.vercel.app/',
    repositoryUrl: 'https://github.com/luisolea1/tv-explorer-frontend',
    visual: 'image',
    image: tvExplorerCover,
    imageAlt: 'Portada de TV Explorer con la presentación de la aplicación y el botón Explorar series',
    imageWidth: 1684,
    imageHeight: 1090,
  },
  {
    ...pendingContent,
    slug: 'proyecto-03',
    number: '03',
    name: 'Around The U.S.',
    role: 'Full-stack Developer',
    startYear: 2026,
    endYear: 2026,
    summary: 'Desarrollé el frontend y el backend de Around The U.S.',
    context: 'Una aplicación web full-stack basada en un diseño proporcionado por TripleTen.',
    contributions: [
      'Construí una interfaz adaptable con React y JavaScript.',
      'Implementé los flujos de registro, inicio de sesión y cierre de sesión.',
      'Añadí autenticación mediante JWT almacenado en localStorage, rutas protegidas y verificación del token al iniciar la aplicación.',
      'Desarrollé funcionalidades para editar el perfil y el avatar, publicar tarjetas, indicar que gustan y eliminar publicaciones propias.',
      'Creé una API REST con Node.js y Express, conectada a una base de datos MongoDB.',
      'Integré el frontend y el backend para gestionar usuarios, autenticación y tarjetas.',
      'Desplegué el servidor en una máquina virtual de Google Cloud y utilicé PM2 para mantener la aplicación disponible en producción.',
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'API REST', 'JWT', 'Git', 'PM2', 'Google Cloud'],
    liveUrl: 'https://aroundtw.mooo.com/signin',
    repositoryUrl: 'https://github.com/luisolea1/web_project_api_full',
    visual: 'image',
    image: aroundCover,
    imageAlt: 'Interfaz de Around The U.S. con el perfil de usuario y tarjetas de Bariloche y Francia',
    imageWidth: 939,
    imageHeight: 885,
  },
  {
    ...pendingContent,
    slug: 'proyecto-04',
    number: '04',
    name: 'Homeland',
    role: 'Frontend Developer',
    startYear: 2026,
    endYear: 2026,
    summary: 'Desarrollé Homeland, un sitio web responsivo que presenta las ciudades de origen de nuestros colegas en línea.',
    context: 'Fue uno de mis primeros proyectos de desarrollo web. Lo utilicé para practicar la construcción de interfaces adaptables, la organización del código y buenas prácticas de desarrollo.',
    contributions: [
      'Estructuré el contenido con HTML5 semántico para crear una página clara y accesible.',
      'Construí un diseño adaptable con CSS, Flexbox y posicionamiento de elementos.',
      'Organicé los estilos con la metodología BEM para mantener un código CSS claro y escalable.',
      'Trabajé con un diseño en Figma como referencia visual para desarrollar la interfaz.',
      'Gestioné el control de versiones con Git y GitHub.',
      'Desplegué el proyecto en GitHub Pages para hacerlo accesible en línea.',
    ],
    outcome: 'Publiqué el sitio en GitHub Pages y lo conservo como una muestra de mis primeros pasos en desarrollo web. Continuaré mejorándolo para practicar TypeScript e incorporar las nuevas herramientas que vaya aprendiendo.',
    technologies: ['HTML5', 'CSS3', 'Flexbox', 'Position', 'BEM', 'Figma', 'Git', 'GitHub', 'GitHub Pages', 'Diseño web responsive'],
    liveUrl: 'https://luisolea1.github.io/web_project_homeland/',
    repositoryUrl: 'https://github.com/luisolea1/web_project_homeland',
    visual: 'image',
    image: homelandCover,
    imageAlt: 'Portada de Homeland con el título De patria a patria y una fotografía costera en blanco y negro',
    imageWidth: 1121,
    imageHeight: 764,
    imagePosition: 'center top',
  },
]

export const getProject = (slug: string) => projects.find((project) => project.slug === slug)
export const getProjectName = (project: Project) => project.name ?? `[PROYECTO ${project.number}]`
export const getProjectPeriod = (project: Project) => {
  if (project.startYear !== null && project.startYear === project.endYear) return String(project.startYear)
  return `${project.startYear ?? '[AÑO DE INICIO]'} – ${project.endYear === 'present' ? 'presente' : project.endYear ?? '[AÑO DE FIN]'}`
}
