// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import LeftCardHeader from "components/Stocks/Details/common/LeftCardHeader"
import DetailsListItem from "components/Stocks/Details/common/DetailsListItem"
import useStyles from "components/Stocks/Details/styles"

type Props = {
  rows: Array<{
    id: number,
    title: string,
    content: any,
  }>,
  stockType: string,
}

const LeftCardDisplay = ({ rows, stockType }: Props) => {
  const classes = useStyles()

  return (
    <Grid item xs={10} className={classes.header}>
      <Card className={classes.leftCard} raised>
        <Grid container>
          <List className={classes.list}>
            <ListItem divider className={classes.cardHeader}>
              <LeftCardHeader stockType={stockType} />
            </ListItem>
            {rows.map(data => (
              <DetailsListItem data={data} key={data.id} />
            ))}
          </List>
        </Grid>
      </Card>
    </Grid>
  )
}

export default LeftCardDisplay
