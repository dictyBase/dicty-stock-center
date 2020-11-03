interface CatalogItemProps {
  index: number
  style: Object
  cartItems?: Array<Object>
  removeItem?: Function
}

interface StrainItem {
  label: string
  id: string
  summary: string
  in_stock: boolean
}

interface StrainListItemProps extends CatalogItemProps {
  data: {
    item: Array<StrainItem>
  }
}

interface PlasmidItem {
  name: string
  id: string
  summary: string
  in_stock: boolean
}

interface PlasmidListItemProps extends CatalogItemProps {
  data: {
    item: Array<PlasmidItem>
  }
}

export type {
  StrainListItemProps,
  PlasmidListItemProps,
  StrainItem,
  PlasmidItem,
}
