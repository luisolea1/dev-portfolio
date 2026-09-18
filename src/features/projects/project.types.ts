export type ProjectVisual = 'image' | 'chart' | 'palette' | 'terminal'

export interface Project {
  slug: string
  number: string
  name: string | null
  role: string | null
  startYear: number | null
  endYear: number | 'present' | null
  summary: string | null
  context: string | null
  contributions: readonly string[]
  outcome: string | null
  technologies: readonly string[]
  liveUrl: string | null
  repositoryUrl: string | null
  visual: ProjectVisual
  image: string | null
  imageAlt: string | null
  imageWidth?: number
  imageHeight?: number
  contentStatus: 'pending-confirmation' | 'confirmed'
}
