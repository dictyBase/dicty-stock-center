// @flow
import React, { Fragment, useState } from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import PhenotypeTableHeader from "./PhenotypeTableHeader"
import PhenotypePublicationDisplay from "./PhenotypePublicationDisplay"
import useStyles from "./phenotypeStyles"
import logo from "static/dicty-login.png"
import { PhenotypeProps } from "components/Stocks/types/Props"

/**
 * PhenotypeTableRow is the display for a row of phenotype table data.
 */

const PhenotypeTableRow = ({ item }: PhenotypeProps) => {
  const classes = useStyles()

  return (
    <TableRow className={classes.row}>
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
  )
}

export default PhenotypeTableRow
