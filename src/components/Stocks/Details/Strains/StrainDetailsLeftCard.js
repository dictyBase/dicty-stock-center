// @flow
import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Chip from "@material-ui/core/Chip"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LeftCardHeader from "components/Stocks/Details/common/LeftCardHeader"
import DetailsListItem from "components/Stocks/Details/common/DetailsListItem"
import LinkChip from "components/Stocks/Details/common/LinkChip"
import characterConverter from "components/Stocks/utils/characterConverter"
import useStyles from "components/Stocks/Details/styles"
import { StrainDetailsProps } from "components/Stocks/Details/types/props"

const StrainDetailsLeftCard = ({ data }: StrainDetailsProps) => {
  const classes = useStyles()

  // set parent display in variable
  let parent
  if (data.parent) {
    parent = <Link to={`/strains/${data.parent.id}`}>{data.parent.label}</Link>
  } else {
    parent = <>N/A</>
  }

  const publications = data.publications.map(ref => (
    <LinkChip key={ref.id} item={ref.id} />
  ))

  const genes =
    data.genes[0] !== ""
      ? data.genes.map(gene => <LinkChip key={gene} item={gene} />)
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
      content: data.genotypes[0].replace(/,/g, ", "),
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
              <LeftCardHeader stockType="Strain" />
            </ListItem>
            {rows.map(data => (
              <DetailsListItem data={data} key={data.id} />
            ))}
          </List>
        </Grid>
      </Card>
    </Grid>
  )
}

export default StrainDetailsLeftCard
