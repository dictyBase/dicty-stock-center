import React from "react"
import { Link } from "react-router-dom"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    justifyContent: "center",
  },
  button: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}))

const Information = () => {
  const { canEditPages, verifiedToken } = useAuthorization()
  const classes = useStyles()

  const authorizedUser = canEditPages && verifiedToken

  return (
    <Box>
      <Typography variant="h1" align="center">
        List of Information Pages
      </Typography>
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
              className={classes.button}
              size="medium"
              variant="contained"
              color="secondary">
              <FontAwesomeIcon icon="plus" size="lg" />
              &nbsp; Add new page
            </Button>
          )}
        </ListItem>
      </List>
    </Box>
  )
}

export { informationLinks }
export default Information
