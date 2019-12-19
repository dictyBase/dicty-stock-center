export type CartItem = {
  label: string,
  id: string,
  summary: string,
}

export type AddToCartProps = {
  /** Strain data */
  data: Array<{
    /** Strain ID number */
    id: string,
    /** Strain label (name) */
    name: string,
    /** Strain summary */
    summary: string,
  }>,
  /** Function to add to checked items array */
  setCheckedItems: Function,
}
