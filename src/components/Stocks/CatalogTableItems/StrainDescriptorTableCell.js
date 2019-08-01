// @flow
import React from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import TableCell from "@material-ui/core/TableCell"
import styles from "components/Stocks/Strains/strainStyles"

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** Height of row */
  rowHeight: string,
  /** Strain ID */
  id: string,
  /** Strain Descriptor */
  descriptor: string,
}

/**
 * DescriptorTableCell handles the rendering of the strain descriptor data.
 */

const DescriptorTableCell = ({ classes, rowHeight, id, descriptor }: Props) => (
  <TableCell
    component="div"
    className={classNames(classes.flexContainer, classes.tableCell)}
    variant="body"
    style={{ height: rowHeight }}>
    <Link to={`/strains/${id}`} className={classes.link}>
      {descriptor}
    </Link>
  </TableCell>
)

export default withStyles(styles)(DescriptorTableCell)
