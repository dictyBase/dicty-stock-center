// @flow
import React from "react"
import { useQuery } from "@apollo/react-hooks"
import Grid from "@material-ui/core/Grid"
import CatalogHeader from "components/Stocks/Catalogs/common/CatalogHeader"
import DetailsLoader from "components/Stocks/Details/common/DetailsLoader"
import CatalogErrorMessage from "components/Stocks/Catalogs/common/CatalogErrorMessage"
import StrainCatalogList from "./StrainCatalogList"
import StrainCatalogAppBar from "./StrainCatalogAppBar"
import { useCatalogState } from "components/Stocks/Catalogs/common/CatalogContext"
import useStyles from "components/Stocks/Catalogs/styles"

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

  let content

  if (loading) return <DetailsLoader />

  if (error) {
    content = <CatalogErrorMessage error={error} />
  } else {
    content = (
      <StrainCatalogList
        data={data.listStrains.strains}
        fetchMore={fetchMore}
        cursor={data.listStrains.nextCursor}
      />
    )
  }

  return (
    <Grid container className={classes.layout}>
      <Grid item xs={12}>
        <CatalogHeader title="Strain Catalog" />
      </Grid>
      <Grid item xs={12}>
        <StrainCatalogAppBar />
      </Grid>
      <Grid item xs={12}>
        {content}
      </Grid>
    </Grid>
  )
}

export default StrainCatalogContainer
