import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import DetailsHeaderCopyIcon from "./DetailsHeaderCopyIcon"
import characterConverter from "common/utils/characterConverter"

const useStyles = makeStyles({
  header: {
    textAlign: "center",
    marginTop: "10px",
  },
  name: {
    marginBottom: "16px",
  },
  id: {
    marginBottom: "10px",
  },
})

type Props = {
  /** Stock ID */
  id: string
  /** Strain descriptor or plasmid name */
  name: string
}

/**
 * DetailsHeader is the header at the top of every stock details page.
 */

const DetailsHeader = ({ name, id }: Props) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} className={classes.header}>
      <Grid container justify="center">
        <Grid item>
          <Typography className={classes.name} variant="h1" noWrap>
            {characterConverter(name)}
          </Typography>
          <Typography className={classes.id} variant="h3" color="textSecondary">
            <em>{id}</em>
            <DetailsHeaderCopyIcon id={id} />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DetailsHeader
