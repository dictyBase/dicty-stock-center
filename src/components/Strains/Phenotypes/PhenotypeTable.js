// @flow
import React, { Fragment } from "react"
import { withStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

import PhenotypeTableHeader from "./PhenotypeTableHeader"
import PhenotypePublicationDisplay from "./PhenotypePublicationDisplay"
import styles from "./PhenotypeTableStyles"
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

/**
 * The table used to display phenotype data.
 */

const PhenotypeTable = (props: Props) => {
  const { classes, data } = props

  return (
    <Paper className={classes.root}>
      <Table>
        <colgroup>
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "30%" }} />
          <col style={{ width: "20%" }} />
        </colgroup>
        <PhenotypeTableHeader />
        <TableBody>
          {data.map((item: Object, index: number) => (
            <TableRow className={classes.row} key={index}>
              <TableCell component="th" scope="row">
                {item.phenotype}
              </TableCell>
              <TableCell>{item.note}</TableCell>
              <TableCell>
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
              <TableCell>
                <PhenotypePublicationDisplay data={item.publication} />{" "}
                <a href={`/publication/${item.publication.id}`}>
                  {" "}
                  <img
                    alt="link to dictyBase publication"
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
