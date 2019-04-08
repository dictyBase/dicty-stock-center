// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
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
}

/**
 * PhenotypeTableHeader is used to display the header for PhenotypeTable.
 */

const PhenotypeTableHeader = (props: Props) => {
  const { classes } = props

  return (
    <TableHead className={classes.head}>
      <TableRow>
        {columnData.map((column: Object) => (
          <TableCell key={column.id} className={classes.headerCell}>
            <h3>{column.label}</h3>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default withStyles(styles)(PhenotypeTableHeader)
