import React from "react"
import ListItem from "@material-ui/core/ListItem"

type Props = {
  index: number
  style: Object
  data: any
}

const PhenotypeListItem = ({ index, style, data }: Props) => {
  const strain = data.item[index]

  return (
    <ListItem
      key={strain.id}
      // className={classes.row}
      style={style}>
      {strain.label}
    </ListItem>
  )
}

export default PhenotypeListItem
