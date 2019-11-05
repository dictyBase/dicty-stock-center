// @flow
import React from "react"
import { Link } from "react-router-dom"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import useStyles from "./styles"

const strains = ["test1", "abc2", "nfy0", "aarA-", "lmno4"]

const RightCard = () => {
  const classes = useStyles()

  return (
    <Card raised className={classes.rightCardBottom}>
      <Typography variant="h6">More Strains</Typography>
      <Divider />
      <div className={classes.options}>
        <List>
          {strains.map(item => (
            <ListItem key={item}>
              <Typography variant="body1">
                <Link className={classes.link} to={`/strains/${item}`}>
                  {item}
                </Link>
              </Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </Card>
  )
}

export default RightCard
