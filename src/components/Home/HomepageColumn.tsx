import React from "react"
import Grid from "@material-ui/core/Grid"
import useStyles from "./homeStyles"

type Props = {
  components: any
}

/**
 * HomepageColumn handles formatting for each column on the homepage.
 */

const HomepageColumn = ({ components }: Props) => {
  const classes = useStyles()
  const content = components.map((item, index) => (
    <Grid item key={index}>
      {item}
    </Grid>
  ))

  return (
    <Grid item xs={12} sm={4} className={classes.column}>
      <Grid container direction="column">
        {content}
      </Grid>
    </Grid>
  )
}

export default HomepageColumn
