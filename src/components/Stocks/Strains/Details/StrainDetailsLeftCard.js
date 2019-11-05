// @flow
import React from "react"
import { Link } from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Chip from "@material-ui/core/Chip"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import StrainDetailsListItem from "./StrainDetailsListItem"
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

const StrainDetailsLeftCard = ({ data }: Props) => {
  const classes = useStyles()

  // set parent display in variable
  let parent
  if (data.parent) {
    parent = <Link to={`/strains/${data.parent.id}`}>{data.parent.label}</Link>
  } else {
    parent = <>N/A</>
  }

  const publications = data.publications.map(ref => (
    <Chip
      key={ref.id}
      label={ref.id}
      component="a"
      href={`/publication/${ref.id}`}
      clickable
      deleteIcon={<FontAwesomeIcon icon="external-link-alt" />}
      onDelete={() => {}}
    />
  ))

  const genes =
    data.genes[0] !== ""
      ? data.genes.map(gene => (
          <Chip
            key={gene}
            label={gene}
            component="a"
            href={`/gene/${gene}`}
            clickable
            deleteIcon={<FontAwesomeIcon icon="external-link-alt" />}
            onDelete={() => {}}
          />
        ))
      : ""

  const rows = [
    {
      id: 0,
      title: "Strain Descriptor",
      content: characterConverter(data.label),
    },
    {
      id: 1,
      title: "Strain Names",
      content: data.names.join(", "),
    },
    {
      id: 2,
      title: "Strain Summary",
      content: data.summary,
    },
    {
      id: 3,
      title: "Systematic Name",
      content: data.systematic_name,
    },
    {
      id: 4,
      title: "Strain Characteristics",
      content: data.characteristics.join(", "),
    },
    {
      id: 5,
      title: "Genetic Modification",
      content: data.genetic_modification,
    },
    {
      id: 6,
      title: "Mutagenesis Method",
      content: data.mutagenesis_method,
    },
    {
      id: 7,
      title: "Parental Strain",
      content: parent,
    },
    {
      id: 8,
      title: "Plasmid",
      content: data.plasmid,
    },
    {
      id: 9,
      title: "Associated Genes",
      content: genes,
    },
    {
      id: 10,
      title: "Genotypes",
      content: data.genotypes.join(", "),
    },
    {
      id: 11,
      title: "Species",
      content: data.species,
    },
    {
      id: 12,
      title: "Depositor",
      content: data.depositor,
    },
    {
      id: 13,
      title: "Reference(s)",
      content: publications,
    },
  ]

  return (
    <Grid item xs={10} className={classes.header}>
      <Card className={classes.leftCard} raised>
        <Grid container>
          <List className={classes.list}>
            <ListItem divider className={classes.cardHeader}>
              <Grid item xs={12}>
                <Typography variant="h6">Strain Details</Typography>
              </Grid>
            </ListItem>
            {rows.map(data => (
              <StrainDetailsListItem data={data} key={data.id} />
            ))}
          </List>
        </Grid>
      </Card>
    </Grid>
  )
}

export default StrainDetailsLeftCard
