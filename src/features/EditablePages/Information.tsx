import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useAuthorization from "common/hooks/useAuthorization"

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

const useStyles = makeStyles(({ palette }) => ({
  root: {
    justifyContent: "center",
  },
  addPageButton: {
    padding: "10px 20px 10px 20px",
    marginTop: "10px",
    backgroundColor: palette.secondary.main,
    "&:hover": {
      backgroundColor: palette.secondary.dark,
      color: "#fff",
    },
  },
}))

const Information = () => {
  const { canEditPages, verifiedToken } = useAuthorization()
  const classes = useStyles()

  const authorizedUser = canEditPages && verifiedToken

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
          <ListItem classes={{ root: classes.root }}>
            {authorizedUser && (
              <Button
                component={Link}
                to="/addpage"
                className={classes.addPageButton}
                size="medium"
                variant="contained"
                color="secondary">
                <FontAwesomeIcon icon="plus" size="lg" />
                &nbsp; Add new page
              </Button>
            )}
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

export { informationLinks }
export default Information
