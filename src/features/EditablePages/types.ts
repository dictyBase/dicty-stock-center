type Content = {
  id: number
  content: string
  slug: string
  name: string
  updated_at: string
  created_by?: {
    id: number
    first_name: string
    last_name: string
    roles: Array<{
      role: string
    }>
  }
  /** User data for last person to update page */
  updated_by: UpdatedByUser
}

type UpdatedByUser = {
  id: number
  first_name: string
  last_name: string
  roles: Array<{
    role: string
  }>
}

export type { Content, UpdatedByUser }
