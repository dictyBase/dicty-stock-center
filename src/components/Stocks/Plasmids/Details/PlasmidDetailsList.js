/* eslint-disable jsx-a11y/img-redundant-alt */
// @flow
import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import ItemDisplay from "components/Stocks/DetailsPageItems/ItemDisplay"
import LeftDisplay from "components/Stocks/DetailsPageItems/LeftDisplay"
import RightDisplay from "components/Stocks/DetailsPageItems/RightDisplay"
import useStyles from "./plasmidDetailsStyles"

type Props = {
  data: {
    id: string,
    name: string,
    summary: string,
    depositor: string,
    publications: Array<{
      id: string,
    }>,
    dbxrefs: Array<string>,
    genes: Array<string>,
    image_map: string,
    sequence: string,
    keywords: Array<string>,
    genbank_accession: string,
  },
}

/**
 * PlasmidDetailsList is the main component for displaying individual plasmid data.
 */

const PlasmidDetailsList = ({ data }: Props) => {
  const classes = useStyles()

  let image_map
  if (data.image_map) {
    image_map = (
      <img src={data.image_map} alt={`Image map for plasmid ${data.id}`} />
    )
  } else {
    image_map = ""
  }

  // display IDs for each publication
  const publications = data.publications.map((ref, index) => (
    <Fragment key={index}>
      <a className={classes.link} href={`/publication/${ref.id}`}>
        {(index ? ", " : "") + ref.id}
      </a>
    </Fragment>
  ))

  // italicize each associated gene and remove comma from last item
  const genes = data.genes.map((gene, index) => (
    <em key={index}>
      <a className={classes.link} href={`/gene/${gene}`}>
        {(index ? ", " : "") + gene}
      </a>
    </em>
  ))

  // represents each row containing two sets of data
  const doubleDataRows = [
    {
      id: 0, // used for indexing purposes
      leftTitle: "Name",
      leftData: data.name,
      rightTitle: "Description",
      rightData: data.summary,
    },
    {
      id: 1,
      leftTitle: "ID",
      leftData: data.id,
      rightTitle: "GenBank Accession Number",
      rightData: data.genbank_accession,
    },
    {
      id: 2,
      leftTitle: "Depositor",
      leftData: data.depositor,
      rightTitle: "Reference(s)",
      rightData: publications,
    },
  ]

  // every row containing just one piece of data
  const singleDataRows = [
    {
      id: 0,
      leftTitle: "Image Map",
      leftData: image_map,
    },
    {
      id: 1,
      leftTitle: "Sequence",
      leftData: data.sequence,
    },
    {
      id: 2,
      leftTitle: "Keywords",
      leftData: data.keywords,
    },
    {
      id: 3,
      leftTitle: "Associated Genes",
      leftData: genes,
    },
  ]

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} className={classes.header}>
          <h3>Plasmid Details</h3>
        </Grid>
      </Grid>
      <Paper className={classes.detailsPaper}>
        {doubleDataRows.map(item => (
          <ItemDisplay key={item.id}>
            <LeftDisplay>{item.leftTitle}</LeftDisplay>
            <RightDisplay>{item.leftData}</RightDisplay>
            <LeftDisplay>{item.rightTitle}</LeftDisplay>
            <RightDisplay>{item.rightData}</RightDisplay>
          </ItemDisplay>
        ))}
        {singleDataRows.map(item => (
          <ItemDisplay key={item.id}>
            <LeftDisplay>{item.leftTitle}</LeftDisplay>
            <Grid item xs={10} className={classes.rightDisplay}>
              {item.leftData}
            </Grid>
          </ItemDisplay>
        ))}
      </Paper>
    </Fragment>
  )
}

export default PlasmidDetailsList
