// @flow
import React from "react"
import LinkList from "../LinkList"
import { withStyles } from "@material-ui/core/styles"
import styles from "./homeStyles"

type Props = {
  /** Material-UI styling */
  classes: {
    panelBlue: string,
  },
}

const links = [
  { name: "Order Information", to: "/information/order", routerAware: true },
  {
    name: "Payment Information",
    to: "/information/payment",
    routerAware: true,
  },
  {
    name: "Deposit Information",
    to: "/information/deposit",
    routerAware: true,
  },
]

/**
 * InfoLinks displays all of the info page links on the homepage.
 */

const InfoLinks = (props: Props) => {
  const { classes } = props

  return (
    <div className={classes.panelBlue}>
      <LinkList list={links} />
    </div>
  )
}

export default withStyles(styles)(InfoLinks)
