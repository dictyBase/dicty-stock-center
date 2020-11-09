import React from "react"
import { useQuery } from "@apollo/client"
import Grid from "@material-ui/core/Grid"
import CatalogHeader from "features/Stocks/Catalogs/common/CatalogHeader"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import CatalogErrorMessage from "features/Stocks/Catalogs/common/CatalogErrorMessage"
import CatalogAppBar from "features/Stocks/Catalogs/common/CatalogAppBar"
import PlasmidCatalogList from "./PlasmidCatalogList"
import { useCatalogStore } from "features/Stocks/Catalogs/common/CatalogContext"
import { GET_PLASMID_LIST } from "common/graphql/queries"
import useSearchQuery from "common/hooks/useSearchQuery"
import useStyles from "features/Stocks/Catalogs/styles"

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
 * PlasmidCatalogContainer is the main component for the plasmid catalog page.
 * It is responsible for fetching the data and passing it down to more specific features.
 */

const PlasmidCatalogContainer = () => {
  const query = useSearchQuery()
  const params = query.get("search") || "all"
  const [hasMore, setHasMore] = React.useState(true)
  const [{ queryVariables }] = useCatalogStore()
  const { loading, error, data, fetchMore } = useQuery(GET_PLASMID_LIST, {
    variables: queryVariables,
  })
  const classes = useStyles()
  const [searchTerm, setSearchTerm] = React.useState(params)

  if (loading) return <DetailsLoader />

  const loadMoreItems = async () => {
    const newCursor = data.listPlasmids.nextCursor
    if (newCursor === 0) {
      setHasMore(false)
      return
    }
    await fetchMore({
      query: GET_PLASMID_LIST,
      variables: {
        cursor: data.listPlasmids.nextCursor,
        filter: queryVariables.filter,
        limit: queryVariables.limit,
      },
    })
  }

  const content = error ? (
    <CatalogErrorMessage error={error} />
  ) : (
    <PlasmidCatalogList
      data={data.listPlasmids.plasmids}
      loadMoreItems={loadMoreItems}
      hasMore={hasMore}
    />
  )

  return (
    <Grid container spacing={0} className={classes.layout}>
      <Grid item xs={12}>
        <CatalogHeader title="Plasmid Catalog" />
      </Grid>
      <Grid item xs={12}>
        <CatalogAppBar
          leftDropdownItems={leftDropdownItems}
          rightDropdownItems={rightDropdownItems}
          stockType="plasmid"
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </Grid>
      <Grid item xs={12}>
        {content}
      </Grid>
    </Grid>
  )
}

export default PlasmidCatalogContainer
