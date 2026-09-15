interface Profile {
  name: string | null
  role: string
  introduction: string | null
  email: string | null
  linkedInUrl: string | null
  githubUrl: string | null
  cvUrl: string | null
  cvSummary: string | null
  education: string | null
  skills: readonly string[]
}

// null = información real pendiente. No inferir identidad ni contactos de las referencias.
export const profile: Profile = {
  name: null,
  role: 'Frontend Developer',
  introduction: null,
  email: null,
  linkedInUrl: null,
  githubUrl: null,
  cvUrl: null,
  cvSummary: null,
  education: null,
  skills: [],
}

export const displayName = profile.name ?? 'Luis'
