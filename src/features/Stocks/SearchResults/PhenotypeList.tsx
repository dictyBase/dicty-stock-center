import React from "react"
import VirtualizedList from "common/components/VirtualizedList"
import PhenotypeListHeader from "./PhenotypeListHeader"
import PhenotypeListItem from "./PhenotypeListItem"

type Props = {
  data: any
  loadMoreItems: any
  phenotype: string
}

/**
 * PhenotypeList is used to display a list of phenotypes.
 */

const PhenotypeList = ({ data, loadMoreItems, phenotype }: Props) => (
  <VirtualizedList
    data={data}
    loadMoreItems={loadMoreItems}
    headerComponent={<PhenotypeListHeader />}>
    {PhenotypeListItem}
  </VirtualizedList>
)

export default PhenotypeList
