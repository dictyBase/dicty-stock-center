// @flow
import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import Grid from "@material-ui/core/Grid"
import CatalogHeader from "components/Stocks/Catalogs/common/CatalogHeader"
import DetailsLoader from "components/Stocks/Details/common/DetailsLoader"
import CatalogErrorMessage from "components/Stocks/Catalogs/common/CatalogErrorMessage"
import CatalogAppBar from "components/Stocks/Catalogs/common/CatalogAppBar"
import PlasmidCatalogList from "./PlasmidCatalogList"
import { useCatalogState } from "components/Stocks/Catalogs/common/CatalogContext"
import useStyles from "components/Stocks/Catalogs/styles"

const GET_PLASMIDS_FILTER = gql`
  query PlasmidListFilter($cursor: Int!, $filter: String!) {
    listPlasmids(input: { cursor: $cursor, limit: 10, filter: $filter }) {
      nextCursor
      plasmids {
        id
        name
        summary
        in_stock
      }
    }
  }
`

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
 * It is responsible for fetching the data and passing it down to more specific components.
 */

export const PlasmidCatalogContainer = () => {
  const [{ query, queryVariables }] = useCatalogState()
  const { loading, error, data, fetchMore } = useQuery(query, {
    variables: queryVariables,
  })
  const classes = useStyles()

  if (loading) return <DetailsLoader />

  const content = error ? (
    <CatalogErrorMessage error={error} />
  ) : (
    <PlasmidCatalogList
      data={data.listPlasmids.plasmids}
      fetchMore={fetchMore}
      cursor={data.listPlasmids.nextCursor}
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
          query={GET_PLASMIDS_FILTER}
        />
      </Grid>
      <Grid item xs={12}>
        {content}
      </Grid>
    </Grid>
  )
}

export { GET_PLASMIDS_FILTER }
export default PlasmidCatalogContainer
