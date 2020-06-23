import React from "react"
import { useQuery } from "@apollo/react-hooks"
import Grid from "@material-ui/core/Grid"
import CatalogHeader from "features/Stocks/Catalogs/common/CatalogHeader"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import CatalogErrorMessage from "features/Stocks/Catalogs/common/CatalogErrorMessage"
import CatalogAppBar from "features/Stocks/Catalogs/common/CatalogAppBar"
import StrainCatalogList from "./StrainCatalogList"
import { useCatalogStore } from "features/Stocks/Catalogs/common/CatalogContext"
import { GET_STRAIN_LIST } from "common/graphql/queries"
import useStyles from "features/Stocks/Catalogs/styles"

const leftDropdownItems = [
  {
    name: "All Strains",
    value: "",
  },
  {
    name: "GWDI Strains",
    value: "",
  },
  {
    name: "Available Strains",
    value: "",
  },
  {
    name: "Unavailable Strains",
    value: "",
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

export const StrainCatalogContainer = () => {
  const [hasMore, setHasMore] = React.useState(true)
  const [{ queryVariables }] = useCatalogStore()
  const { loading, error, data, fetchMore } = useQuery(GET_STRAIN_LIST, {
    variables: queryVariables,
  })
  const classes = useStyles()

  if (loading) return <DetailsLoader />

  const loadMoreItems = () =>
    fetchMore({
      query: GET_STRAIN_LIST,
      variables: {
        cursor: data.listStrains.nextCursor,
        filter: queryVariables.filter,
      },
      updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) return previousResult
        const previousEntry = previousResult.listStrains
        const previousStrains = previousEntry.strains
        const newStrains = fetchMoreResult.listStrains.strains
        const newCursor = fetchMoreResult.listStrains.nextCursor
        const allStrains = [...previousStrains, ...newStrains]

        if (newCursor === 0) {
          setHasMore(false)
        }

        return {
          listStrains: {
            nextCursor: newCursor,
            strains: [...new Set(allStrains)], // remove any duplicate entries
            __typename: previousEntry.__typename,
          },
        }
      },
    })

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
          stockType="strain"
        />
      </Grid>
      <Grid item xs={12}>
        {content}
      </Grid>
    </Grid>
  )
}

export default StrainCatalogContainer
