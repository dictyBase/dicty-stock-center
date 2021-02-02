import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import { useCartStore } from "features/ShoppingCart/CartStore"
import useCartItems from "common/hooks/useCartItems"
import { FormikValues } from "../utils/initialValues"
import { getShippingValues, getPaymentValues } from "../utils/getListValues"

const useStyles = makeStyles((theme: Theme) => ({
  details: {
    marginBottom: theme.spacing(3),
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    padding: theme.spacing(1),
  },
  subheader: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    padding: theme.spacing(1),
  },
  quantity: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    minWidth: "40px",
  },
}))

type Props = {
  /** Object containing all entered form data */
  formData: FormikValues
}

const OrderSummary = ({ formData }: Props) => {
  const classes = useStyles()
  const {
    state: { addedItems },
  } = useCartStore()
  const { getCartTotal, itemsWithQuantity } = useCartItems()

  return (
    <React.Fragment>
      <Typography className={classes.subheader} variant="h2" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {itemsWithQuantity.map((item, index) => (
          <ListItem className={classes.listItem} key={index}>
            <ListItemText
              primary={item.name}
              secondary={
                <React.Fragment>
                  <Typography noWrap>
                    <em>{item.summary}</em>
                  </Typography>
                  <Typography>{item.id}</Typography>
                </React.Fragment>
              }
            />
            <Typography
              className={classes.quantity}
              variant="body2"
              data-testid="quantity">
              Qty: {item.quantity}
            </Typography>
            <Typography variant="body1">
              ${Number(item.fee) * item.quantity}.00
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText
            disableTypography
            primary={
              <Typography variant="h3" className={classes.total}>
                Total
              </Typography>
            }
          />
          <Typography variant="h3" className={classes.total}>
            {getCartTotal(addedItems)}
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <Grid container spacing={2} className={classes.details}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Shipping Address
          </Typography>
          {getShippingValues(formData).map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Payment Details
          </Typography>
          {getPaymentValues(formData).map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default OrderSummary
