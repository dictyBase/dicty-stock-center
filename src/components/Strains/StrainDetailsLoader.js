import React from "react"
import Skeleton from "react-loading-skeleton"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import createStyles from "@material-ui/core/styles/createStyles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const styles = (theme: Theme) =>
  createStyles({
    layout: {
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.up(1300 + theme.spacing.unit * 3 * 2)]: {
        width: 1300,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    title: {
      textAlign: "center",
    },
  })

type Props = {
  classes: Object,
}

const StrainDetailsLoader = (props: Props) => {
  const { classes } = props

  return (
    <Grid container spacing={16} className={classes.layout}>
      <Grid item xs={12}>
        <h1>
          <Skeleton />
        </h1>
      </Grid>
      <Grid item xs={12}>
        <Skeleton count={10} />
        <br />
        <br />
        <Skeleton count={10} />
        <br />
        <br />
        <Skeleton count={10} />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(StrainDetailsLoader)
