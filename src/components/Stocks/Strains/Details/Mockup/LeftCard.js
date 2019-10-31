// @flow
import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import ListItem from "@material-ui/core/ListItem"
// import CardHeader from "@material-ui/core/CardHeader"
// import CardMedia from "@material-ui/core/CardMedia"
// import CardContent from "@material-ui/core/CardContent"
// import CardActions from "@material-ui/core/CardActions"
import { data } from "../mockStrainData"
import useStyles from "./styles"

const rows = [
  {
    id: 0,
    title: "Strain Descriptor",
    content: data.label,
  },
  {
    id: 1,
    title: "Strain Names",
    content: data.names,
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
    content: data.characteristics,
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
    content: data.parent.label,
  },
  {
    id: 8,
    title: "Plasmid",
    content: data.plasmid,
  },
  {
    id: 9,
    title: "Associated Genes",
    content: data.genes,
  },
  {
    id: 10,
    title: "Genotypes",
    content: data.genotypes,
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
    content: data.publications[0].id,
  },
]

const LeftCard = () => {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={12} className={classes.header}>
        <Typography variant="h4">Strain Details for {data.label}</Typography>
        <Typography variant="h6" color="textSecondary">
          <em>{data.id}</em>
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Card className={classes.leftCard} raised>
          <Grid container>
            {rows.map(data => (
              <ListItem key={data.id} className={classes.details}>
                <Grid item xs={3} className={classes.listTitle}>
                  <Typography color="textPrimary">
                    <strong>{data.title}</strong>
                  </Typography>
                </Grid>
                <Grid item xs={9} className={classes.listContent}>
                  <Typography>{data.content}</Typography>
                </Grid>
              </ListItem>
            ))}
          </Grid>
        </Card>
      </Grid>
    </>
  )
}

export default LeftCard
