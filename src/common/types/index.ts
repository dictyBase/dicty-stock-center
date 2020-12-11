interface CartItem {
  /** Stock ID */
  id: string
  /** Stock name (label/descriptor) */
  name: string
  /** Stock summary */
  summary: string
  /** Strain or plasmid */
  type?: "strain" | "plasmid"
}

interface CartItemWithFee extends CartItem {
  /** Price of stock */
  fee: string
}

interface CartItemWithStatus extends CartItem {
  /** Stock inventory status */
  in_stock: boolean
}

type User = {
  id: number
  first_name: string
  last_name: string
  email: string
  roles: Array<{
    id: number
    role: string
    permissions?: Array<{
      id: number
      permission: string
      resource: string
    }>
  }>
}

export type { CartItem, CartItemWithFee, CartItemWithStatus, User }
