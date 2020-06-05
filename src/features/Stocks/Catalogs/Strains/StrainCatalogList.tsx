import React from "react"
import VirtualizedList from "common/components/VirtualizedList"
import CatalogListHeader from "features/Stocks/Catalogs/common/CatalogListHeader"
import StrainCatalogListItem from "./StrainCatalogListItem"
import { CartItem } from "features/Stocks/Catalogs/types/cart"

type Props = {
  data: Array<CartItem>
  loadMoreItems: any
}

/**
 * StrainCatalogList provides the virtualized list of data.
 */

const StrainCatalogList = ({ data, loadMoreItems }: Props) => (
  <VirtualizedList
    data={data}
    loadMoreItems={loadMoreItems}
    headerComponent={<CatalogListHeader stockType="strain" />}>
    {StrainCatalogListItem}
  </VirtualizedList>
)

export default StrainCatalogList
