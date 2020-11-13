import React from "react"
import { useQuery } from "@apollo/client"
import CatalogDisplay from "features/Stocks/Catalogs/common/CatalogDisplay"
import CatalogErrorMessage from "features/Stocks/Catalogs/common/CatalogErrorMessage"
import VirtualizedList from "common/components/VirtualizedList"
import CatalogListHeader from "features/Stocks/Catalogs/common/CatalogListHeader"
import PlasmidCatalogListItem from "./PlasmidCatalogListItem"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import useLoadMoreItems from "common/hooks/useLoadMoreItems"

const leftDropdownItems = [
  {
    name: "All Plasmids",
    value: "all",
  },
  {
    name: "Available Plasmids",
    value: "available",
  },
  {
    name: "Unavailable Plasmids",
    value: "unavailable",
  },
]

const rightDropdownItems = [
  {
    value: "plasmid_name",
    name: "Name",
  },
  {
    value: "summary",
    name: "Description",
  },
  {
    value: "id",
    name: "ID",
  },
]

/**
 * normalizeDataObject converts the GraphQL data response into a normalized object.
 */
const normalizeDataObject = (data: any) => {
  let convertedData = data

  if (data.listPlasmids) {
    convertedData = data.listPlasmids
  }
  if (data.listPlasmidsWithAnnotation) {
    convertedData = data.listPlasmidsWithAnnotation
  }

  return convertedData
}

type Props = {
  /** Search query 'filter' from URL */
  filter: string | null
}

/**
 * PlasmidCatalogContainer is the main component for the plasmid catalog page.
 * It is responsible for fetching the data and passing it down to more specific features.
 */

const PlasmidCatalogContainer = ({ filter }: Props) => {
  const {
    state: { query, queryVariables },
  } = useCatalogStore()
  const { loading, error, data, fetchMore } = useQuery(query, {
    variables: queryVariables,
  })
  const { loadMoreItems, hasMore } = useLoadMoreItems()

  let content = <div />

  if (error) {
    content = <CatalogErrorMessage error={error} />
  }

  if (data) {
    const normalizedData = normalizeDataObject(data)
    content = (
      <VirtualizedList
        data={normalizedData.plasmids}
        loadMoreItems={() => loadMoreItems(normalizedData, fetchMore)}
        hasMore={hasMore}
        headerComponent={<CatalogListHeader stockType="plasmid" />}>
        {PlasmidCatalogListItem}
      </VirtualizedList>
    )
  }

  return (
    <CatalogDisplay
      stockType="Plasmid"
      leftDropdownItems={leftDropdownItems}
      rightDropdownItems={rightDropdownItems}
      loading={loading}>
      {content}
    </CatalogDisplay>
  )
}

export default PlasmidCatalogContainer
