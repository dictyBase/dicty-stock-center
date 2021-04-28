type Publication = {
  id: string
  pub_date: string
  title: string
  journal: string
  volume: string
  pages: string
  doi: string
  authors: Array<{
    last_name: string
  }>
}

type DetailsRow = {
  /** Data object ID */
  id: number
  /** Title for row */
  title: string
  /** Content to display in row */
  content: string | JSX.Element | undefined | null
}

export type { Publication, DetailsRow }
