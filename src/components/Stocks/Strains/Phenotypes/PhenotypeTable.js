// @flow
import React, { Fragment, useState } from "react"
import { withStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

import PhenotypeTableHeader from "./PhenotypeTableHeader"
import PhenotypePublicationDisplay from "./PhenotypePublicationDisplay"
import styles from "./phenotypeTableStyles"
import logo from "static/dicty-login.png"

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** Phenotype data */
  data: Array<{
    phenotype: string,
    note: string,
    assay: string,
    environment: string,
    publication: {
      authors: Array<{
        last_name: string,
      }>,
      pub_date: string,
      title: string,
      journal: string,
      volume: string,
      pages: string,
      id: string,
    },
  }>,
}

// helper function for table sorting
const getSorting = (order, orderBy) =>
  order === "desc"
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1)

/**
 * The table used to display phenotype data.
 */

const PhenotypeTable = (props: Props) => {
  const [order, setOrder] = useState("asc")
  const [orderBy, setOrderBy] = useState("phenotype")
  const { classes, data } = props

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
          {data
            .sort(getSorting(order, orderBy))
            .map((item: Object, index: number) => (
              <TableRow className={classes.row} key={index}>
                <TableCell component="th" scope="row" className={classes.cell}>
                  {item.phenotype}
                </TableCell>
                <TableCell className={classes.cell}>{item.note}</TableCell>
                <TableCell className={classes.cell}>
                  {item.assay && (
                    <Fragment>
                      <strong>Assay: </strong>
                      {item.assay}
                      <br />
                    </Fragment>
                  )}
                  {item.environment && (
                    <Fragment>
                      <strong>Environment: </strong>
                      {item.environment}
                    </Fragment>
                  )}
                </TableCell>
                <TableCell className={classes.cell}>
                  <PhenotypePublicationDisplay data={item.publication} />{" "}
                </TableCell>
                <TableCell className={classes.cell}>
                  <a href={`/publication/${item.publication.id}`}>
                    {" "}
                    <img
                      alt="Link to dictyBase publication"
                      src={logo}
                      height={32}
                      width={32}
                    />
                  </a>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default withStyles(styles)(PhenotypeTable)
