// @flow
import React from "react"
import LinkList from "../LinkList"
import { PanelBlue } from "styles"

const info = [
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
 * Displays all of the info page links
 */

const Info = () => {
  return (
    <PanelBlue>
      <LinkList list={info} />
    </PanelBlue>
  )
}

export default Info
