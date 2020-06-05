import React from "react"
import VirtualizedList from "common/components/VirtualizedList"
import CatalogListHeader from "features/Stocks/Catalogs/common/CatalogListHeader"
import PlasmidCatalogListItem from "./PlasmidCatalogListItem"
import { CartItem } from "features/Stocks/Catalogs/types/cart"

type Props = {
  data: Array<CartItem>
  loadMoreItems: any
}

/**
 * PlasmidCatalogList provides the virtualized list of data.
 */

export const PlasmidCatalogList = ({ data, loadMoreItems }: Props) => (
  <VirtualizedList
    data={data}
    loadMoreItems={loadMoreItems}
    headerComponent={<CatalogListHeader stockType="plasmid" />}>
    {PlasmidCatalogListItem}
  </VirtualizedList>
)

export default PlasmidCatalogList
