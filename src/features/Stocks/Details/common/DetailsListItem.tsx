import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import ListItem from "@material-ui/core/ListItem"
import characterConverter from "features/Stocks/utils/characterConverter"
import useStyles from "../styles"

type Props = {
  data: {
    /** Type of content to display (i.e. Strain Descriptor, Genotypes, etc.) */
    title: string
    /** The actual data for that field */
    content: any
  }
}

const DetailsListItem = ({ data }: Props) => {
  const classes = useStyles()

  let content = data.content
  if (typeof content === "string") {
    // convert any html entities
    content = characterConverter(content)
  }

  return (
    <ListItem className={classes.details} divider>
      <Grid item xs={12} sm={3} className={classes.listItem}>
        <Typography variant="body2" className={classes.detailsItem}>
          {data.title}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Typography component={"span"} variant="body1">
          {content}
        </Typography>
      </Grid>
    </ListItem>
  )
}

export default DetailsListItem
