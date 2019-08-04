// @flow
import React from "react"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import TableCell from "@material-ui/core/TableCell"
import CellMeasurer from "react-virtualized/dist/commonjs/CellMeasurer"
import styles from "components/Stocks/Plasmids/plasmidStyles"

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** Height of row */
  rowHeight: string,
  /** Index of current row */
  rowIndex: number,
  /** Data to display in cell */
  cellData: string,
  dataKey: any,
  parent: any,
  cache: any,
}

/**
 * GeneralCell handles the rendering of a catalog header cell.
 * This is currently used for plasmid description, plasmid ID,
 * strain summary and strain ID table cells.
 */

const GeneralTableCell = ({
  classes,
  cellData,
  cache,
  dataKey,
  parent,
  rowIndex,
  rowHeight,
}: Props) => (
  <CellMeasurer
    cache={cache}
    columnIndex={0}
    key={dataKey}
    parent={parent}
    rowIndex={rowIndex}
    style={{ height: rowHeight }}>
    <TableCell
      component="div"
      className={classNames(classes.flexContainer, classes.tableCell)}
      variant="body">
      {cellData}
    </TableCell>
  </CellMeasurer>
)

export default withStyles(styles)(GeneralTableCell)
