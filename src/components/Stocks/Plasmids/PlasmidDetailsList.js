/* eslint-disable jsx-a11y/img-redundant-alt */
// @flow
import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import ItemDisplay from "../ItemDisplay"
import LeftDisplay from "../LeftDisplay"
import RightDisplay from "../RightDisplay"

const styles = theme => ({
  header: {
    textAlign: "center",
    backgroundColor: "#0059b3",
    color: "#fff",
  },
  rightDisplay: {
    padding: "8px 56px 4px 24px",
    fontWeight: 400,
    marginBottom: "5px",
  },
})

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
        <RightDisplay>{data.dbxrefs.join(", ")}</RightDisplay>
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
    </Fragment>
  )
}

export default withStyles(styles)(PlasmidDetailsList)
