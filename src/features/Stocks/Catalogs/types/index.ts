interface CatalogItemProps {
  index: number
  style: Object
}

interface StrainItem {
  label: string
  id: string
  summary: string
  in_stock: boolean
}

interface StrainListItemProps extends CatalogItemProps {
  data: {
    stockType: "strains"
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
    stockType: "plasmids"
    item: Array<PlasmidItem>
  }
}

export type {
  StrainListItemProps,
  PlasmidListItemProps,
  StrainItem,
  PlasmidItem,
}
