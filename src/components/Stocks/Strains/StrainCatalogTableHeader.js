// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"

const columnData = [
  {
    id: "descriptor",
    label: "STRAIN DESCRIPTOR",
  },
  { id: "summary", label: "STRAIN SUMMARY" },
  { id: "id", label: "STRAIN ID" },
  { id: "cart", label: "AVAILABILITY" },
]

const styles = (theme: Object) => ({
  head: {
    backgroundColor: "#0059b3",
  },
  headerCell: {
    color: "#fff",
    fontWeight: "600",
  },
})

type Props = {
  /** Material-UI styling */
  classes: Object,
}

/**
 * StrainCatalogTableHeader is used to display the header for StrainCatalogTable.
 */

const StrainCatalogTableHeader = (props: Props) => {
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

export default withStyles(styles)(StrainCatalogTableHeader)
