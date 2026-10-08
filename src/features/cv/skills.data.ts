import type { IconType } from 'react-icons'
import { DiCss3 } from 'react-icons/di'
import { LuCodeXml, LuGauge, LuPuzzle, LuUsers } from 'react-icons/lu'
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNpm,
  SiPnpm,
  SiReact,
  SiReactrouter,
  SiVite,
} from 'react-icons/si'

interface Skill {
  name: string
  icon: IconType
  color: string
  description?: string
}

interface SkillGroup {
  id: string
  title: string
  description: string
  items: readonly Skill[]
}

export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'abilities',
    title: 'Habilidades',
    description: 'Cómo trabajo y resuelvo retos.',
    items: [
      { name: 'Desarrollo Web Frontend', icon: LuCodeXml, color: '#ff9a6c', description: 'Interfaces accesibles y responsive.' },
      { name: 'Optimización de Rendimiento', icon: LuGauge, color: '#ff9a6c', description: 'Carga rápida y navegación fluida.' },
      { name: 'Trabajo en Equipo', icon: LuUsers, color: '#ff9a6c', description: 'Colaboración y comunicación clara.' },
      { name: 'Resolución de Problemas', icon: LuPuzzle, color: '#ff9a6c', description: 'Análisis, depuración e integración de APIs REST.' },
    ],
  },
  {
    id: 'stacks',
    title: 'Stacks',
    description: 'Pilas tecnológicas · MERN y ecosistema web.',
    items: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
      { name: 'Express.js', icon: SiExpress, color: '#e5e2e1' },
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: DiCss3, color: '#1572b6' },
      { name: 'React Router', icon: SiReactrouter, color: '#f44250' },
    ],
  },
  {
    id: 'tools',
    title: 'Herramientas de Desarrollo y Construcción',
    description: 'Del código al build, con control de versiones.',
    items: [
      { name: 'Vite', icon: SiVite, color: '#a78bfa' },
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, color: '#e5e2e1' },
      { name: 'npm', icon: SiNpm, color: '#ef5b5b' },
      { name: 'pnpm', icon: SiPnpm, color: '#f69220' },
    ],
  },
]
