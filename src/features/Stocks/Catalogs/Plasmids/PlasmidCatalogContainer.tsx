import React from "react"
import { useQuery } from "@apollo/client"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"
import CatalogHeader from "features/Stocks/Catalogs/common/CatalogHeader"
import CatalogErrorMessage from "features/Stocks/Catalogs/common/CatalogErrorMessage"
import CatalogAppBar from "features/Stocks/Catalogs/common/CatalogAppBar"
import PlasmidCatalogList from "./PlasmidCatalogList"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
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
  const classes = useStyles()

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
    <Grid container spacing={0} className={classes.layout}>
      <Grid item xs={12}>
        <CatalogHeader title="Plasmid Catalog" />
      </Grid>
      <Grid item xs={12}>
        <CatalogAppBar
          leftDropdownItems={leftDropdownItems}
          rightDropdownItems={rightDropdownItems}
        />
      </Grid>
      <Grid item xs={12}>
        {loading && (
          <div className={classes.spinner}>
            <CircularProgress data-testid="catalog-spinner" size={100} />
          </div>
        )}
        {content}
      </Grid>
    </Grid>
  )
}

export default PlasmidCatalogContainer
