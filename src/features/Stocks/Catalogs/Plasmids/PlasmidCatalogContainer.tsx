import React from "react"
import { useQuery } from "@apollo/client"
import CatalogDisplay from "features/Stocks/Catalogs/common/CatalogDisplay"
import CatalogErrorMessage from "features/Stocks/Catalogs/common/CatalogErrorMessage"
import VirtualizedList from "common/components/VirtualizedList"
import CatalogListHeader from "features/Stocks/Catalogs/common/CatalogListHeader"
import CatalogListItem from "features/Stocks/Catalogs/common/CatalogListItem"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import useLoadMoreItems from "common/hooks/useLoadMoreItems"
import {
  PlasmidListFilterDocument,
  ListPlasmidsInventoryDocument,
} from "dicty-graphql-schema"
import { CatalogActionType } from "features/Stocks/Catalogs/context/CatalogContext"

const leftDropdownItems = [
  {
    name: "Regular Plasmids",
    value: "regular",
  },
  {
    name: "Available Plasmids",
    value: "available",
  },
  // {
  //   name: "GoldenBraid Plasmids",
  //   value: "goldenbraid",
  // },
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
    dispatch,
  } = useCatalogStore()
  const { loading, error, data, fetchMore } = useQuery(query, {
    variables: queryVariables,
  })
  const { loadMoreItems, hasMore } = useLoadMoreItems()

  React.useEffect(() => {
    const updateData = async () => {
      switch (filter) {
        case "regular":
          dispatch({
            type: CatalogActionType.SET_QUERY,
            payload: PlasmidListFilterDocument,
          })
          dispatch({
            type: CatalogActionType.SET_QUERY_VARIABLES,
            payload: {
              cursor: 0,
              limit: 10,
              filter: "",
            },
          })
          break
        case "available":
          dispatch({
            type: CatalogActionType.SET_QUERY,
            payload: ListPlasmidsInventoryDocument,
          })
          dispatch({
            type: CatalogActionType.SET_QUERY_VARIABLES,
            payload: {
              cursor: 0,
              limit: 10,
              filter: "",
            },
          })
          break
        default:
          return
      }
    }

    updateData()
  }, [dispatch, filter])

  let content = <div />

  if (error && !loading) {
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
        {CatalogListItem}
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
