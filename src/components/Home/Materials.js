// @flow
import React from "react"
import LinkList from "../LinkList"
import { withStyles } from "@material-ui/core/styles"
import styles from "./homeStyles"

type Props = {
  /** Material-UI styling */
  classes: {
    panelGray: string,
  },
}

const materials = [
  { name: "Strain Catalog", to: "/strains", routerAware: true },
  { name: "Plasmid Catalog", to: "/plasmids", routerAware: true },
  { name: "Bacterial Strains", to: "", routerAware: true },
  {
    name: "Additional Materials",
    to: "/information/additional-materials",
    routerAware: true,
  },
]

/**
 * Materials displays links to catalogs/materials on the homepage.
 */

const Materials = ({ classes }: Props) => (
  <div className={classes.panelGray}>
    <LinkList list={materials} />
  </div>
)

export default withStyles(styles)(Materials)
