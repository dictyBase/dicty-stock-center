import React from "react"
import { useQuery } from "@apollo/client"
import Grid from "@material-ui/core/Grid"
import CatalogHeader from "features/Stocks/Catalogs/common/CatalogHeader"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import CatalogErrorMessage from "features/Stocks/Catalogs/common/CatalogErrorMessage"
import CatalogAppBar from "features/Stocks/Catalogs/common/CatalogAppBar"
import StrainCatalogList from "./StrainCatalogList"
import { useCatalogStore } from "features/Stocks/Catalogs/common/CatalogContext"
import useStyles from "features/Stocks/Catalogs/styles"

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

/**
 * StrainCatalogContainer is the main component for the strain catalog page.
 * It is responsible for fetching the data and passing it down to more specific features.
 */

const StrainCatalogContainer = () => {
  const [hasMore, setHasMore] = React.useState(true)
  const {
    state: { query, queryVariables },
  } = useCatalogStore()
  const { loading, error, data, fetchMore } = useQuery(query, {
    variables: queryVariables,
  })
  const classes = useStyles()

  if (loading) return <DetailsLoader />

  const loadMoreItems = async () => {
    const newCursor = data.listStrains.nextCursor
    if (newCursor === 0) {
      setHasMore(false)
      return
    }
    await fetchMore({
      query,
      variables: {
        cursor: data.listStrains.nextCursor,
        filter: queryVariables.filter,
        limit: queryVariables.limit,
      },
    })
  }

  // use conditional so both error and data appear below search bar
  const content = error ? (
    <CatalogErrorMessage error={error} />
  ) : (
    <StrainCatalogList
      data={data.listStrains.strains}
      loadMoreItems={loadMoreItems}
      hasMore={hasMore}
    />
  )

  return (
    <Grid container className={classes.layout}>
      <Grid item xs={12}>
        <CatalogHeader title="Strain Catalog" />
      </Grid>
      <Grid item xs={12}>
        <CatalogAppBar
          leftDropdownItems={leftDropdownItems}
          rightDropdownItems={rightDropdownItems}
        />
      </Grid>
      <Grid item xs={12}>
        {content}
      </Grid>
    </Grid>
  )
}

export default StrainCatalogContainer
