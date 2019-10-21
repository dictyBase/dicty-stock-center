// @flow
import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import ItemDisplay from "components/Stocks/DetailsPageItems/ItemDisplay"
import LeftDisplay from "components/Stocks/DetailsPageItems/LeftDisplay"
import RightDisplay from "components/Stocks/DetailsPageItems/RightDisplay"
import characterConverter from "components/Stocks/utils/characterConverter"
import useStyles from "components/Stocks/DetailsPageItems/detailsStyles"

type Props = {
  data: {
    id: string,
    label: string,
    names: Array<string>,
    systematic_name: string,
    characteristics: Array<string>,
    summary: string,
    editable_summary?: string,
    genetic_modification: string,
    genotypes: Array<string>,
    mutagenesis_method: string,
    species: string,
    parent: {
      id: string,
      label: string,
    },
    depositor: string,
    plasmid: string,
    publications: Array<{
      id: string,
    }>,
    dbxrefs: Array<string>,
    genes: Array<string>,
    phenotypes: {
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
    },
  },
}

/**
 * StrainDetailsList is the main component for displaying individual strain data.
 */

const StrainDetailsList = ({ data }: Props) => {
  const classes = useStyles()

  // set parent display in variable
  let parent
  if (data.parent) {
    parent = <Link to={`/strains/${data.parent.id}`}>{data.parent.label}</Link>
  } else {
    parent = <>N/A</>
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

  // put strain details data into an array of item rows
  const rows = [
    {
      id: 0, // used for indexing purposes
      leftTitle: "Strain Descriptor",
      leftData: characterConverter(data.label),
      rightTitle: "Strain ID",
      rightData: data.id,
    },
    {
      id: 1,
      leftTitle: "Strain Names",
      leftData: [], // data.names.join(", "),
      rightTitle: "Systematic Name",
      rightData: data.systematic_name,
    },
    {
      id: 2,
      leftTitle: "Strain Summary",
      leftData: data.summary,
      rightTitle: "Strain Characteristics",
      rightData: [], // data.characteristics.join(", "),
    },
    {
      id: 3,
      leftTitle: "Genetic Modification",
      leftData: data.genetic_modification,
      rightTitle: "Genotypes",
      rightData: data.genotypes.join(", "),
    },
    {
      id: 4,
      leftTitle: "Mutagenesis Method",
      leftData: data.mutagenesis_method,
      rightTitle: "Species",
      rightData: data.species,
    },
    {
      id: 5,
      leftTitle: "Parental Strain",
      leftData: parent,
      rightTitle: "Depositor",
      rightData: data.depositor,
    },
    {
      id: 6,
      leftTitle: "Plasmid",
      leftData: data.plasmid,
      rightTitle: "Reference(s)",
      rightData: publications,
    },
    {
      id: 7,
      leftTitle: "Associated Genes",
      leftData: genes,
      rightTitle: "",
      rightData: "",
    },
  ]

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} className={classes.header}>
          <h3>Strain Details</h3>
        </Grid>
      </Grid>
      <Paper className={classes.detailsPaper}>
        {rows.map(item => (
          <ItemDisplay key={item.id}>
            <LeftDisplay>{item.leftTitle}</LeftDisplay>
            <RightDisplay>{item.leftData}</RightDisplay>
            <LeftDisplay>{item.rightTitle}</LeftDisplay>
            <RightDisplay>{item.rightData}</RightDisplay>
          </ItemDisplay>
        ))}
      </Paper>
    </Fragment>
  )
}

export default StrainDetailsList
