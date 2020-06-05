import React from "react"
import VirtualizedList from "common/components/VirtualizedList"
import ResultsHeader from "./ResultsHeader"
import PhenotypeListItem from "./PhenotypeListItem"

type Props = {
  data: any
  loadMoreItems: any
  phenotype: string
}

/**
 * PhenotypeList is used to display a list of phenotypes.
 */

const PhenotypeList = ({ data, loadMoreItems, phenotype }: Props) => {
  console.log(data)

  return (
    <div style={{ textAlign: "center" }}>
      <VirtualizedList
        data={data}
        loadMoreItems={loadMoreItems}
        headerComponent={
          <ResultsHeader property="Phenotype" description={phenotype} />
        }>
        {PhenotypeListItem}
      </VirtualizedList>
    </div>
  )
}

export default PhenotypeList
