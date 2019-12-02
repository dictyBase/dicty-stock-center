// @flow
import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import Grid from "@material-ui/core/Grid"
import CatalogHeader from "components/Stocks/Catalogs/common/CatalogHeader"
import DetailsLoader from "components/Stocks/Details/common/DetailsLoader"
import CatalogErrorMessage from "components/Stocks/Catalogs/common/CatalogErrorMessage"
import CatalogAppBar from "components/Stocks/Catalogs/common/CatalogAppBar"
import StrainCatalogList from "./StrainCatalogList"
import { useCatalogState } from "components/Stocks/Catalogs/common/CatalogContext"
import useStyles from "components/Stocks/Catalogs/styles"

const GET_STRAINS_FILTER = gql`
  query StrainListFilter($cursor: Int!, $filter: String!) {
    listStrains(input: { cursor: $cursor, limit: 10, filter: $filter }) {
      nextCursor
      strains {
        id
        label
        summary
        in_stock
      }
    }
  }
`

/** Need to update values */

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
    name: "ID",
    value: "id",
  },
  {
    name: "Descriptor",
    value: "label",
  },
  {
    name: "Summary",
    value: "summary",
  },
]

/**
 * StrainCatalogContainer is the main component for the strain catalog page.
 * It is responsible for fetching the data and passing it down to more specific components.
 */

export const StrainCatalogContainer = () => {
  const [{ query, queryVariables }] = useCatalogState()
  const { loading, error, data, fetchMore } = useQuery(query, {
    variables: queryVariables,
  })
  const classes = useStyles()

  if (loading) return <DetailsLoader />

  // use conditional so both error and data appear below search bar
  const content = error ? (
    <CatalogErrorMessage error={error} />
  ) : (
    <StrainCatalogList
      data={data.listStrains.strains}
      fetchMore={fetchMore}
      cursor={data.listStrains.nextCursor}
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
          query={GET_STRAINS_FILTER}
        />
      </Grid>
      <Grid item xs={12}>
        {content}
      </Grid>
    </Grid>
  )
}

export { GET_STRAINS_FILTER }
export default StrainCatalogContainer
