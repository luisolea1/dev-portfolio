import cvPdf from '../../assets/cv-luis-olea.pdf'

interface Education {
  title: string
  institution: string
  period: string
  details?: string
}

interface Profile {
  name: string | null
  role: string
  introduction: string | null
  email: string | null
  linkedInUrl: string | null
  githubUrl: string | null
  cvUrl: string | null
  cvSummary: string | null
  education: readonly Education[]
}

// null = información real pendiente. No inferir identidad ni contactos de las referencias.
export const profile: Profile = {
  name: null,
  role: 'Frontend Developer',
  introduction: null,
  email: 'luisolea653@gmail.com',
  linkedInUrl: 'https://www.linkedin.com/in/luiss-olea/',
  githubUrl: 'https://github.com/luisolea1',
  cvUrl: cvPdf,
  cvSummary: 'Desarrollador Frontend Junior que disfruta transformar diseños e ideas visuales en interfaces responsivas para sitios comerciales y catálogos digitales. También soy licenciado en Administración de las Organizaciones, una formación que complementa mi experiencia trabajando con clientes y coordinando equipos. Construyo aplicaciones con React utilizando componentes reutilizables, navegación fluida e integración de APIs REST.',
  education: [
    {
      title: 'Bootcamp en Desarrollo Full Stack',
      institution: 'TripleTen',
      period: '2025 – 2026',
      details: 'Programa intensivo de 1 año con enfoque en desarrollo web y aplicaciones. Aprendizaje práctico mediante proyectos individuales y colaborativos, con énfasis en la resolución de problemas y la implementación de buenas prácticas de desarrollo.',
    },
    {
      title: 'Licenciatura en Administración de las Organizaciones',
      institution: 'Universidad del Estado de Morelos',
      period: 'Enero de 2022 – Diciembre de 2025',
    },
  ],
}

export const displayName = profile.name ?? ' Luis Olea'
