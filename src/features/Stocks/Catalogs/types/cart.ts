export type CartItem = {
  label?: string
  name?: string
  id: string
  summary: string
  type?: string
}

export type AddToCartProps = {
  /** Strain data */
  data: Array<{
    /** Strain ID number */
    id: string
    /** Strain label (name) */
    name: string
    /** Strain summary */
    summary: string
    /** strain or plasmid */
    type?: string
  }>
  /** Function to add to checked items array */
  setCheckedItems?: Function
}
