/* eslint-disable jsx-a11y/img-redundant-alt */
// @flow
import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"
import ItemDisplay from "../ItemDisplay"
import LeftDisplay from "../LeftDisplay"
import RightDisplay from "../RightDisplay"
import logo from "static/dicty-login.png"
import styles from "./plasmidStyles"

type Props = {
  data: {
    id: string,
    name: string,
    summary: string,
    depositor: string,
    dbxrefs: Array<string>,
    genes: Array<string>,
    image_map: string,
    sequence: string,
    keywords: Array<string>,
    genbank_accession: string,
  },
  /** Material-UI styling */
  classes: Object,
}

/**
 * PlasmidDetailsList is the main component for displaying individual plasmid data.
 */

const PlasmidDetailsList = (props: Props) => {
  const { data, classes } = props

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} className={classes.header}>
          <h3>Plasmid Details</h3>
        </Grid>
      </Grid>
      <Paper className={classes.root}>
        <ItemDisplay>
          <LeftDisplay>Name</LeftDisplay>
          <RightDisplay>{data.name}</RightDisplay>
          <LeftDisplay>Description</LeftDisplay>
          <RightDisplay>{data.summary}</RightDisplay>
        </ItemDisplay>
        <ItemDisplay>
          <LeftDisplay>ID</LeftDisplay>
          <RightDisplay>{data.id}</RightDisplay>
          <LeftDisplay>GenBank Accession Number</LeftDisplay>
          <RightDisplay>{data.genbank_accession}</RightDisplay>
        </ItemDisplay>
        <ItemDisplay>
          <LeftDisplay>Depositor</LeftDisplay>
          <RightDisplay>{data.depositor}</RightDisplay>
          <LeftDisplay>References</LeftDisplay>
          <RightDisplay>
            {data.dbxrefs.map((ref, index) => (
              <Fragment key={index}>
                <a href={`/publication/${ref}`}>
                  <img
                    alt="link to dictyBase publication"
                    src={logo}
                    height={32}
                    width={32}
                  />
                </a>
              </Fragment>
            ))}
          </RightDisplay>
        </ItemDisplay>
        <ItemDisplay>
          <LeftDisplay>Image Map</LeftDisplay>
          <Grid item xs={10} className={classes.rightDisplay}>
            {data.image_map && (
              <img
                src={data.image_map}
                alt={`Image map for plasmid ${data.id}`}
              />
            )}
          </Grid>
        </ItemDisplay>
        <ItemDisplay>
          <LeftDisplay>Sequence</LeftDisplay>
          <Grid item xs={10} className={classes.rightDisplay}>
            {data.sequence}
          </Grid>
        </ItemDisplay>
        <ItemDisplay>
          <LeftDisplay>Keywords</LeftDisplay>
          <Grid item xs={10}>
            {data.keywords}
          </Grid>
        </ItemDisplay>
        <ItemDisplay>
          <LeftDisplay>Associated Genes</LeftDisplay>
          <Grid item xs={10} className={classes.rightDisplay}>
            <em>
              {data.genes.map((gene, index) => (
                <Fragment key={index}>
                  <a href={`/gene/${gene}`}>{(index ? ", " : "") + gene}</a>
                </Fragment>
              ))}
            </em>
          </Grid>
        </ItemDisplay>
      </Paper>
    </Fragment>
  )
}

export default withStyles(styles)(PlasmidDetailsList)
