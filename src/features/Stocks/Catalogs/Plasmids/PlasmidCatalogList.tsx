import React from "react"
import VirtualizedList from "common/components/VirtualizedList"
import CatalogListHeader from "features/Stocks/Catalogs/common/CatalogListHeader"
import PlasmidCatalogListItem from "./PlasmidCatalogListItem"
import { CartItem } from "features/Stocks/Catalogs/types/cart"

type Props = {
  data: Array<CartItem>
  loadMoreItems: any
  hasMore: boolean
}

/**
 * PlasmidCatalogList provides the virtualized list of data.
 */

export const PlasmidCatalogList = ({ data, loadMoreItems, hasMore }: Props) => (
  <VirtualizedList
    data={data}
    hasMore={hasMore}
    loadMoreItems={loadMoreItems}
    headerComponent={<CatalogListHeader stockType="plasmid" />}>
    {PlasmidCatalogListItem}
  </VirtualizedList>
)

export default PlasmidCatalogList
