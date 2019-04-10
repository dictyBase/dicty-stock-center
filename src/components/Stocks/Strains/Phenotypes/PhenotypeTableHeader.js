// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import TableSortLabel from "@material-ui/core/TableSortLabel"
import styles from "./PhenotypeTableStyles"

const columnData = [
  {
    id: "phenotype",
    label: "Phenotype",
  },
  { id: "notes", label: "Notes" },
  { id: "assay-environment", label: "Assay & Environment" },
  { id: "reference", label: "Reference" },
]

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** The order to sort the column */
  order: string,
  /** The item to be ordered by */
  orderBy: string,
  /** Function for handling sorting */
  onRequestSort: Function,
}

/**
 * PhenotypeTableHeader is used to display the header for PhenotypeTable.
 */

const PhenotypeTableHeader = (props: Props) => {
  const { classes, order, orderBy, onRequestSort } = props

  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }

  return (
    <TableHead className={classes.head}>
      <TableRow>
        {columnData.map((column: Object) => (
          <TableCell
            key={column.id}
            className={classes.headerCell}
            sortDirection={orderBy === column.id ? order : false}>
            <TableSortLabel
              active={orderBy === column.id}
              direction={order}
              onClick={createSortHandler(column.id)}
              className={classes.headerCell}>
              <h3>{column.label}</h3>
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default withStyles(styles)(PhenotypeTableHeader)
