// @flow
import React, { useState } from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import Paper from "@material-ui/core/Paper"
import PhenotypeTableHeader from "./PhenotypeTableHeader"
import PhenotypeTableRow from "./PhenotypeTableRow"
import useStyles from "./phenotypeStyles"
import { PhenotypeData } from "components/Stocks/Details/types/props"

type Props = {
  /** Phenotype data */
  data: Array<PhenotypeData>,
}

// helper function for table sorting
const getSorting = (order, orderBy) =>
  order === "desc"
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1)

/**
 * The table used to display phenotype data.
 */

const PhenotypeTable = ({ data }: Props) => {
  const [order, setOrder] = useState("asc")
  const [orderBy, setOrderBy] = useState("phenotype")
  const classes = useStyles()

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === "desc"
    setOrder(isDesc ? "asc" : "desc")
    setOrderBy(property)
  }

  return (
    <Paper className={classes.root}>
      <Table>
        <colgroup>
          <col style={{ width: "15%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "30%" }} />
          <col style={{ width: "5%" }} />
        </colgroup>
        <PhenotypeTableHeader
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />
        <TableBody>
          {data.sort(getSorting(order, orderBy)).map((item: Object) => (
            <PhenotypeTableRow item={item} key={item.phenotype} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default PhenotypeTable
