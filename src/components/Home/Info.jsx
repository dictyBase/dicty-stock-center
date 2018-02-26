// @flow
import React from "react"
import LinkList from "../LinkList"
import { PanelBlue } from "styles"

const info = [
  { name: "Order Information", to: "/information/orders", routerAware: true },
  {
    name: "Payment Information",
    to: "/information/payments",
    routerAware: true
  },
  {
    name: "Deposit Information",
    to: "/information/deposits",
    routerAware: true
  }
]

const Info = () => {
  return (
    <PanelBlue>
      <LinkList list={info} />
    </PanelBlue>
  )
}

export default Info
