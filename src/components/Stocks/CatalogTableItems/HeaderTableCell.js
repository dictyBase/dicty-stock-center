// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import TableCell from "@material-ui/core/TableCell"
import styles from "components/Stocks/Plasmids/plasmidStyles"

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** Height of header */
  headerHeight: string,
  /** Label of header */
  label: string,
}

/**
 * HeaderCell handles the rendering of a catalog header cell.
 */

const HeaderTableCell = ({ classes, headerHeight, label }: Props) => (
  <TableCell
    component="div"
    className={classes.flexContainer}
    variant="head"
    style={{ height: headerHeight, color: "#fff" }}>
    <strong>{label}</strong>
  </TableCell>
)

export default withStyles(styles)(HeaderTableCell)
