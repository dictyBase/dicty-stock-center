import React from "react"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import LeftCardHeader from "features/Stocks/Details/common/LeftCardHeader"
import DetailsListItem from "features/Stocks/Details/common/DetailsListItem"
import useStyles from "features/Stocks/Details/styles"

type Props = {
  rows: Array<{
    id: number
    title: string
    content: any
  }>
  stockType: string
  species: string
}

/**
 * LeftCardDisplay is the base display for either of the stock details cards
 * on the left side of the page.
 */

const LeftCardDisplay = ({ rows, stockType, species }: Props) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} md={9} lg={10} className={classes.header}>
      <Card raised>
        <Grid container>
          <List className={classes.list}>
            <ListItem divider className={classes.cardHeader}>
              <LeftCardHeader stockType={stockType} species={species} />
            </ListItem>
            {rows.map((data) => (
              <DetailsListItem data={data} key={data.id} />
            ))}
          </List>
        </Grid>
      </Card>
    </Grid>
  )
}

export default LeftCardDisplay
