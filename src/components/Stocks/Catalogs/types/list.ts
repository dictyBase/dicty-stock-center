export type strainListItemProps = {
  index: number
  style: Object
  data: {
    item: Array<{
      label: string
      id: string
      summary: string
    }>
  }
  cartItems?: Array<Object>
  removeItem?: Function
}

export type plasmidListItemProps = {
  index: number
  style: Object
  data: {
    item: Array<{
      name: string
      id: string
      summary: string
    }>
  }
  cartItems?: Array<Object>
  removeItem?: Function
}
