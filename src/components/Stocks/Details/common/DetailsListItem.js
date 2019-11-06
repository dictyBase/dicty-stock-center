// @flow
import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import ListItem from "@material-ui/core/ListItem"
import useStyles from "../styles"

type Props = {
  data: {
    /** Type of content to display (i.e. Strain Descriptor, Genotypes, etc.) */
    title: string,
    /** The actual data for that field */
    content: string,
  },
}

const DetailsListItem = ({ data }: Props) => {
  const classes = useStyles()

  return (
    <ListItem className={classes.details} divider>
      <Grid item xs={3} className={classes.listTitle}>
        <Typography variant="body2">{data.title}</Typography>
      </Grid>
      <Grid item xs={9} className={classes.listContent}>
        {data.content}
      </Grid>
    </ListItem>
  )
}

export default DetailsListItem
