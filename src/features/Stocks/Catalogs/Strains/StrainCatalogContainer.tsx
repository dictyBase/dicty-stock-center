import React from "react"
import { useQuery } from "@apollo/client"
import CatalogDisplay from "features/Stocks/Catalogs/common/CatalogDisplay"
import CatalogErrorMessage from "features/Stocks/Catalogs/common/CatalogErrorMessage"
import VirtualizedList from "common/components/VirtualizedList"
import CatalogListHeader from "features/Stocks/Catalogs/common/CatalogListHeader"
import StrainCatalogListItem from "./StrainCatalogListItem"
import {
  CatalogActionType,
  Action as CatalogAction,
} from "features/Stocks/Catalogs/context/CatalogContext"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import {
  GET_STRAIN_LIST,
  GET_BACTERIAL_STRAIN_LIST,
} from "common/graphql/queries"
import useLoadMoreItems from "common/hooks/useLoadMoreItems"

const leftDropdownItems = [
  {
    name: "All Strains",
    value: "all",
  },
  {
    name: "GWDI Strains",
    value: "gwdi",
  },
  {
    name: "Available Strains",
    value: "available",
  },
  {
    name: "Unavailable Strains",
    value: "unavailable",
  },
  {
    name: "Bacterial Strains",
    value: "bacterial",
  },
]

const rightDropdownItems = [
  {
    name: "Descriptor",
    value: "label",
  },
  {
    name: "Summary",
    value: "summary",
  },
  {
    name: "ID",
    value: "id",
  },
]

type Strain = {
  id: string
  label: string
  summary: string
  in_stock: boolean
}

type CatalogQueryResponse = {
  __typename: string
  nextCursor: number
  totalCount: number
  strains: Array<Strain>
}

type BacterialStrainsData = {
  bacterialFoodSource: CatalogQueryResponse
  symbioticFarmerBacterium: CatalogQueryResponse
}

type ListStrainsData = {
  listStrains: CatalogQueryResponse
}

/**
 * normalizeBacterialStrainsData normalizes the bacterial strain data
 * response into the standard listStrains object. This is necessary since
 * the query actually issues two queries together.
 */
const normalizeBacterialStrainsData = (data: BacterialStrainsData) => ({
  listStrains: {
    __typename: data.bacterialFoodSource.__typename,
    nextCursor: 0,
    totalCount:
      data.bacterialFoodSource.totalCount +
      data.symbioticFarmerBacterium.totalCount,
    strains: [
      ...data.bacterialFoodSource.strains,
      ...data.symbioticFarmerBacterium.strains,
    ],
  },
})

/**
 * dispatchStrainList sends a dispatch to update the query
 * and query variables for "all" and "gwdi" filters. The
 * only difference between the two is that GWDI needs to have
 * the label filter.
 */
const dispatchStrainList = (
  dispatch: (arg0: CatalogAction) => void,
  filter: string,
) => {
  let gqlFilter = ""
  dispatch({
    type: CatalogActionType.SET_QUERY,
    payload: GET_STRAIN_LIST,
  })
  if (filter === "gwdi") {
    gqlFilter = "label=~gwdi"
  }
  dispatch({
    type: CatalogActionType.SET_QUERY_VARIABLES,
    payload: {
      cursor: 0,
      limit: 10,
      filter: gqlFilter,
    },
  })
}

/**
 * normalizeDataObject converts the GraphQL data response into a normalized object.
 */
const normalizeDataObject = (data: any) => {
  let convertedData = data

  if (data.listStrains) {
    convertedData = data.listStrains
  }
  if (data.bacterialFoodSource) {
    convertedData = normalizeBacterialStrainsData(data).listStrains
  }
  if (data.listStrainsWithAnnotation) {
    convertedData = data.listStrainsWithAnnotation
  }

  return convertedData
}

type Props = {
  /** Search query 'filter' from URL */
  filter: string | null
}

/**
 * StrainCatalogContainer is the main component for the strain catalog page.
 * It is responsible for fetching the data and passing it down to more specific features.
 */

const StrainCatalogContainer = ({ filter }: Props) => {
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
        case "all":
        case "gwdi":
          dispatchStrainList(dispatch, filter)
          break
        case "bacterial":
          dispatch({
            type: CatalogActionType.SET_QUERY,
            payload: GET_BACTERIAL_STRAIN_LIST,
          })
          break
        case "available":
        case "unavailable":
          console.log("inventory query")
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
        data={normalizedData.strains}
        loadMoreItems={() => loadMoreItems(normalizedData, fetchMore)}
        hasMore={hasMore}
        headerComponent={<CatalogListHeader stockType="plasmid" />}>
        {StrainCatalogListItem}
      </VirtualizedList>
    )
  }

  return (
    <CatalogDisplay
      stockType="Strain"
      leftDropdownItems={leftDropdownItems}
      rightDropdownItems={rightDropdownItems}
      loading={loading}>
      {content}
    </CatalogDisplay>
  )
}

export { normalizeBacterialStrainsData }
export default StrainCatalogContainer
