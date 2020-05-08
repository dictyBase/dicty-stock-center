import React from "react"
import { Link } from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DetailsHeaderCopyIcon from "./DetailsHeaderCopyIcon"
import characterConverter from "features/Stocks/utils/characterConverter"
import useStyles from "features/Stocks/Details/styles"

type Props = {
  /** Stock ID */
  id: string
  /** Strain descriptor or plasmid name */
  name: string
  /** Type of stock (strain or plasmid) */
  stockType: string
}

/**
 * DetailsHeader is the header at the top of every stock details page.
 */

const DetailsHeader = ({ name, id, stockType }: Props) => {
  const classes = useStyles()

  const capitalizedStockType =
    stockType.charAt(0).toUpperCase() + stockType.slice(1)

  return (
    <Grid item xs={12} className={classes.header}>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={2} className={classes.backButton}>
          <Button
            className={classes.backButton}
            component={Link}
            to={`/${stockType}s`}
            title={`Back to ${stockType} catalog`}
            aria-label="back to catalog page"
            startIcon={<FontAwesomeIcon icon="arrow-left" size="lg" />}>
            {capitalizedStockType} Catalog
          </Button>
        </Grid>
        <Grid item xs={12} sm={8} zeroMinWidth>
          <Typography variant="h4" noWrap>
            {characterConverter(name)}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            <em>{id}</em>
            <DetailsHeaderCopyIcon id={id} />
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
      </Grid>
    </Grid>
  )
}

export default DetailsHeader
