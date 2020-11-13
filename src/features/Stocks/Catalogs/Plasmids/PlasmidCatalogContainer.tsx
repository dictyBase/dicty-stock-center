import React from "react"
import { useQuery } from "@apollo/client"
import CatalogDisplay from "features/Stocks/Catalogs/common/CatalogDisplay"
import CatalogErrorMessage from "features/Stocks/Catalogs/common/CatalogErrorMessage"
import PlasmidCatalogList from "./PlasmidCatalogList"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"

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

type Props = {
  /** Search query 'filter' from URL */
  filter: string | null
}

/**
 * PlasmidCatalogContainer is the main component for the plasmid catalog page.
 * It is responsible for fetching the data and passing it down to more specific features.
 */

const PlasmidCatalogContainer = ({ filter }: Props) => {
  const [hasMore, setHasMore] = React.useState(true)
  const {
    state: { query, queryVariables },
  } = useCatalogStore()
  const { loading, error, data, fetchMore } = useQuery(query, {
    variables: queryVariables,
  })

  let content = <div />

  if (error) {
    content = <CatalogErrorMessage error={error} />
  }

  const loadMoreItems = async () => {
    const newCursor = data.listPlasmids.nextCursor
    if (newCursor === 0) {
      setHasMore(false)
      return
    }
    await fetchMore({
      query: query,
      variables: {
        cursor: data.listPlasmids.nextCursor,
        filter: queryVariables.filter,
        limit: queryVariables.limit,
      },
    })
  }

  if (data) {
    content = (
      <PlasmidCatalogList
        data={data.listPlasmids.plasmids}
        loadMoreItems={loadMoreItems}
        hasMore={hasMore}
      />
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
