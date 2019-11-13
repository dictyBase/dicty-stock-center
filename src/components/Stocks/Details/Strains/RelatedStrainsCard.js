// @flow
import React from "react"
import { Link } from "react-router-dom"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import useStyles from "components/Stocks/Details/styles"

const strains = ["test1", "abc2", "nfy0", "aarA-", "lmno4"]

type Props = {
  genes: Array<string>,
}

const RelatedStrainsCard = ({ genes }: Props) => {
  const classes = useStyles()

  return (
    <Card raised className={classes.moreStrainsCard}>
      <Typography variant="h6" className={classes.cardHeader}>
        Related Strains
      </Typography>
      <Divider />
      <Typography className={classes.secondaryText} variant="body1">
        Strains involving gene xyz {genes}
      </Typography>
      <div className={classes.options}>
        <List>
          {strains.map(item => (
            <ListItem disableGutters dense key={item}>
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

export default RelatedStrainsCard
