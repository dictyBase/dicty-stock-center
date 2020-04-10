import React from "react"
import Grid from "@material-ui/core/Grid"
import useStyles from "./formStyles"

type Props = {
  title: string
}

const RequiredTextLabel = ({ title }: Props) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} md={3}>
      <span className={classes.requiredText}>*</span> {title}:
    </Grid>
  )
}

export default RequiredTextLabel
