// @flow
import React from "react"
import { Link } from "react-router-dom"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import useStyles from "components/Stocks/Details/styles"

const plasmids = ["test1", "abc2", "nfy0"]

type Props = {
  genes: Array<string>,
}

const RelatedPlasmidsCard = ({ genes }: Props) => {
  const classes = useStyles()

  return (
    <Card raised className={classes.moreStrainsCard}>
      <Typography variant="h6" className={classes.cardHeader}>
        Related Plasmids
      </Typography>
      <Divider />
      <Typography className={classes.secondaryText} variant="body1">
        Plasmids involving gene xyz {genes}
      </Typography>
      <div className={classes.options}>
        <List>
          {plasmids.map(item => (
            <ListItem disableGutters dense key={item}>
              <Typography variant="body1">
                <Link className={classes.link} to={`/plasmids/${item}`}>
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

export default RelatedPlasmidsCard
