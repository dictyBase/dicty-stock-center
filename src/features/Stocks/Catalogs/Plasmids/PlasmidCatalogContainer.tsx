import React from "react"
import { useQuery } from "@apollo/react-hooks"
import Grid from "@material-ui/core/Grid"
import CatalogHeader from "features/Stocks/Catalogs/common/CatalogHeader"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import CatalogErrorMessage from "features/Stocks/Catalogs/common/CatalogErrorMessage"
import CatalogAppBar from "features/Stocks/Catalogs/common/CatalogAppBar"
import PlasmidCatalogList from "./PlasmidCatalogList"
import { useCatalogStore } from "features/Stocks/Catalogs/common/CatalogContext"
import { GET_PLASMID_LIST } from "common/graphql/queries"
import useStyles from "features/Stocks/Catalogs/styles"

const leftDropdownItems = [
  {
    name: "All Plasmids",
    value: "",
  },
  {
    name: "Available Plasmids",
    value: "",
  },
  {
    name: "Unavailable Plasmids",
    value: "",
  },
]

const rightDropdownItems = [
  {
    value: "id",
    name: "ID",
  },
  {
    value: "plasmid_name",
    name: "Name",
  },
  {
    value: "summary",
    name: "Description",
  },
]

/**
 * PlasmidCatalogContainer is the main component for the plasmid catalog page.
 * It is responsible for fetching the data and passing it down to more specific features.
 */

export const PlasmidCatalogContainer = () => {
  const [{ queryVariables }] = useCatalogStore()
  const { loading, error, data, fetchMore } = useQuery(GET_PLASMID_LIST, {
    variables: queryVariables,
  })
  const classes = useStyles()

  if (loading) return <DetailsLoader />

  const loadMoreItems = () =>
    fetchMore({
      query: GET_PLASMID_LIST,
      variables: {
        cursor: data.listPlasmids.nextCursor,
        filter: queryVariables.filter,
      },
      updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) return previousResult
        const previousEntry = previousResult.listPlasmids
        const previousPlasmids = previousEntry.plasmids
        const newPlasmids = fetchMoreResult.listPlasmids.plasmids
        const newCursor = fetchMoreResult.listPlasmids.nextCursor
        const allPlasmids = [...previousPlasmids, ...newPlasmids]

        // fix issue where response always brings back a duplicate of last item;
        // check if first item of new batch equals last item of previous batch
        // if dupes, then remove it
        if (
          newPlasmids[0].id === previousPlasmids[previousPlasmids.length - 1].id
        ) {
          allPlasmids.pop()
        }

        return {
          listPlasmids: {
            nextCursor: newCursor,
            plasmids: [...new Set(allPlasmids)], // remove any duplicate entries
            __typename: previousEntry.__typename,
          },
        }
      },
    })

  const content = error ? (
    <CatalogErrorMessage error={error} />
  ) : (
    <PlasmidCatalogList
      data={data.listPlasmids.plasmids}
      loadMoreItems={loadMoreItems}
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
        />
      </Grid>
      <Grid item xs={12}>
        {content}
      </Grid>
    </Grid>
  )
}

export default PlasmidCatalogContainer
