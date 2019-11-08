// @flow
import React from "react"
import { Link } from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
        <Grid item xs={1} className={classes.backButton}>
          <IconButton
            component={Link}
            to="/strains"
            title="Back to strain catalog"
            aria-label="strain catalog">
            <FontAwesomeIcon icon="arrow-left" size="lg" />
          </IconButton>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h4">{name}</Typography>
          <Typography variant="h6" color="textSecondary">
            <em>{id}</em>{" "}
            <IconButton
              onClick={() => {
                navigator.clipboard.writeText(id)
              }}
              title="Copy ID to clipboard"
              aria-label="copy icon">
              <FontAwesomeIcon icon="copy" size="xs" />
            </IconButton>{" "}
          </Typography>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Grid>
  )
}

export default DetailsHeader
