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
 * It is responsible for fetching the data and passing it down to more specific features.
 */

export const StrainCatalogContainer = () => {
  const [{ queryVariables }] = useCatalogStore()
  const { loading, error, data, fetchMore } = useQuery(GET_STRAIN_LIST, {
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
        />
      </Grid>
      <Grid item xs={12}>
        {content}
      </Grid>
    </Grid>
  )
}

export default StrainCatalogContainer
