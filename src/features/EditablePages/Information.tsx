import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Typography from "@material-ui/core/Typography"

const informationLinks = [
  {
    name: "Additional Materials",
    route: "/additional-materials",
  },
  {
    name: "Deposit Information",
    route: "/deposit",
  },
  {
    name: "FAQs",
    route: "/faq",
  },
  {
    name: "Nomenclature Guidelines",
    route: "/nomenclature-guidelines",
  },
  {
    name: "Order Information",
    route: "/order",
  },
  {
    name: "Other Stock Centers",
    route: "/other-stock-centers",
  },
  {
    name: "Payment Information",
    route: "/payment",
  },
  {
    name: "Shipping Information",
    route: "/shipping",
  },
]

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
})

const Information = () => {
  const classes = useStyles()

  return (
    <Grid container justify="center">
      <Grid item>
        <Typography variant="h4">List of Information Pages</Typography>
        <List>
          {informationLinks.map((item, index) => (
            <ListItem key={index} classes={{ root: classes.root }}>
              <Link to={`/information${item.route}`}>{item.name}</Link>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  )
}

export { informationLinks }
export default Information
