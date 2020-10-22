import React from "react"
import VirtualizedList from "common/components/VirtualizedList"
import PhenotypeListHeader from "./PhenotypeListHeader"
import PhenotypeListItem from "./PhenotypeListItem"

type Props = {
  data: any
  loadMoreItems: any
  hasMore: boolean
}

/**
 * PhenotypeList is used to display a list of phenotypes.
 */

const PhenotypeList = ({ data, loadMoreItems, hasMore }: Props) => (
  <VirtualizedList
    data={data}
    loadMoreItems={loadMoreItems}
    hasMore={hasMore}
    headerComponent={<PhenotypeListHeader />}
    rowHeight={65}>
    {PhenotypeListItem}
  </VirtualizedList>
)

export default PhenotypeList
