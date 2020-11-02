type strainListItemProps = {
  index: number
  style: Object
  data: {
    item: Array<{
      label: string
      id: string
      summary: string
      in_stock: boolean
    }>
  }
  cartItems?: Array<Object>
  removeItem?: Function
}

type plasmidListItemProps = {
  index: number
  style: Object
  data: {
    item: Array<{
      name: string
      id: string
      summary: string
      in_stock: boolean
    }>
  }
  cartItems?: Array<Object>
  removeItem?: Function
}

export type { strainListItemProps, plasmidListItemProps }
