// @flow
import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import ListItem from "@material-ui/core/ListItem"
import Chip from "@material-ui/core/Chip"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useStyles from "./styles"

const Item = ({ data }) => {
  const classes = useStyles()

  let content = data.content

  if (data.title === "Associated Genes") {
    content = (
      <Chip
        label={data.content}
        component="a"
        href={`/gene/${data.content}`}
        clickable
        deleteIcon={<FontAwesomeIcon icon="external-link-alt" />}
        onDelete={() => {}}
      />
    )
  }

  if (data.title === "Reference(s)") {
    content = (
      <Chip
        label={data.content}
        component="a"
        href={`/publication/${data.content}`}
        clickable
        deleteIcon={<FontAwesomeIcon icon="external-link-alt" />}
        onDelete={() => {}}
      />
    )
  }

  return (
    <ListItem className={classes.details} divider>
      <Grid item xs={3} className={classes.listTitle}>
        <Typography variant="body2">{data.title}</Typography>
      </Grid>
      <Grid item xs={9} className={classes.listContent}>
        {content}
      </Grid>
    </ListItem>
  )
}

export default Item
