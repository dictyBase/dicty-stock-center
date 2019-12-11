// @flow
import React from "react"
import LinkList from "../LinkList"
import useStyles from "./homeStyles"

const links = [
  { name: "Contact the DSC", to: "/contact", routerAware: true },
  { name: "DSC FAQ", to: "/information/faq", routerAware: true },
  {
    name: "Nomenclature Guide",
    to: "/information/nomenclature-guidelines",
    routerAware: false,
  },
  {
    name: "Other Stock Centers",
    to: "/information/other-stock-centers",
    routerAware: true,
  },
]

/**
 * MiscLinks displays misc links on the left side of the homepage.
 */

const MiscLinks = () => {
  const classes = useStyles()

  return (
    <div className={classes.panelBlue}>
      <LinkList list={links} />
    </div>
  )
}

export default MiscLinks
