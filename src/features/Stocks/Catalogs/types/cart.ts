type CartItem = {
  label?: string
  name?: string
  id: string
  summary: string
  type?: string
  in_stock?: boolean
}

type AddToCartProps = {
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
  /** Stock inventory status */
  inStock: boolean
  /** Function to add to checked items array */
  setCheckedItems?: Function
  /** Size of icon */
  size?: "small" | "medium" | undefined
}

export type { CartItem, AddToCartProps }
