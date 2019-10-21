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

const MiscLinks = ({ classes }: Props) => (
  <div className={classes.panelBlue}>
    <LinkList list={links} />
  </div>
)

export default withStyles(styles)(MiscLinks)
