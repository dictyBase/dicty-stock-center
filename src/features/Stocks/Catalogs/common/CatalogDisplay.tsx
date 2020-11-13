import React from "react"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"
import CatalogHeader from "features/Stocks/Catalogs/common/CatalogHeader"
import CatalogAppBar from "features/Stocks/Catalogs/common/CatalogAppBar"
import useStyles from "features/Stocks/Catalogs/styles"

type DropdownItem = {
  value: string
  name: string
}

type Props = {
  stockType: "Strain" | "Plasmid"
  leftDropdownItems: Array<DropdownItem>
  rightDropdownItems: Array<DropdownItem>
  loading: boolean
  children: React.ReactNode
}

/**
 * CatalogDisplay handles the display for the catalog pages.
 */

const CatalogDisplay = ({
  stockType,
  leftDropdownItems,
  rightDropdownItems,
  loading,
  children,
}: Props) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.layout}>
      <Grid item xs={12}>
        <CatalogHeader title={`${stockType} Catalog`} />
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
        {children}
      </Grid>
    </Grid>
  )
}

export default CatalogDisplay
