type CartItem = {
  /** Stock ID */
  id: string
  /** Stock name (label/descriptor) */
  name: string
  /** Stock summary */
  summary: string
  /** Price of stock */
  fee: string
  /** Quantity added to cart */
  quantity: number
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

export type { CartItem, User }
