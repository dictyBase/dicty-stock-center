// @flow
import React from "react"
import { Link } from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DetailsHeaderCopyIcon from "./DetailsHeaderCopyIcon"
import useStyles from "components/Stocks/Details/styles"

type Props = {
  /** Stock ID */
  id: string,
  /** Strain descriptor or plasmid name */
  name: string,
  /** Type of stock (strain or plasmid) */
  stockType: string,
}

/**
 * DetailsHeader is the header at the top of every stock details page.
 */

const DetailsHeader = ({ name, id, stockType }: Props) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} className={classes.header}>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={1} className={classes.backButton}>
          <IconButton
            component={Link}
            to={`/${stockType}s`}
            title={`Back to ${stockType} catalog`}
            aria-label="back to catalog page">
            <FontAwesomeIcon icon="arrow-left" size="lg" />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={10} zeroMinWidth>
          <Typography variant="h4" noWrap>
            {name}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            <em>{id}</em>
            <DetailsHeaderCopyIcon id={id} />
          </Typography>
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
      </Grid>
    </Grid>
  )
}

export default DetailsHeader
