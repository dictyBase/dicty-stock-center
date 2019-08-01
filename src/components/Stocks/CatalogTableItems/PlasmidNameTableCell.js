// @flow
import React from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import TableCell from "@material-ui/core/TableCell"
import styles from "components/Stocks/Plasmids/plasmidStyles"

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** Height of row */
  rowHeight: string,
  /** Strain ID */
  id: string,
  /** Plasmid name */
  name: string,
}

/**
 * NameTableCell handles the rendering of the plasmid name data.
 */

const NameTableCell = ({ classes, rowHeight, id, name }: Props) => (
  <TableCell
    component="div"
    className={classNames(classes.flexContainer, classes.tableCell)}
    variant="body"
    style={{ height: rowHeight }}>
    <Link className={classes.link} to={`/plasmids/${id}`}>
      {name}
    </Link>
  </TableCell>
)

export default withStyles(styles)(NameTableCell)
