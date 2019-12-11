// @flow
import React from "react"
import LinkList from "../LinkList"
import useStyles from "./homeStyles"

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

const InfoLinks = () => {
  const classes = useStyles()

  return (
    <div className={classes.panelBlue}>
      <LinkList list={links} />
    </div>
  )
}

export default InfoLinks
