// @flow
import React from "react"
import { Link } from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import IconButton from "@material-ui/core/IconButton"
import CardActions from "@material-ui/core/CardActions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
        <Grid container alignItems="center">
          <Grid item xs={1} className={classes.backButton}>
            <IconButton
              component={Link}
              to="/strains"
              title="Back to strain catalog"
              aria-label="strain catalog">
              <FontAwesomeIcon icon="arrow-circle-left" size="lg" />
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h4">{data.label}</Typography>
            <Typography variant="h6" color="textSecondary">
              <em>{data.id}</em>
            </Typography>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Grid>
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
                <ListItem key={data.id} className={classes.details} divider>
                  <Grid item xs={3} className={classes.listTitle}>
                    <Typography variant="body2">{data.title}</Typography>
                  </Grid>
                  <Grid item xs={9} className={classes.listContent}>
                    <Typography variant="body1">{data.content}</Typography>
                  </Grid>
                </ListItem>
              ))}
            </List>
          </Grid>
          <CardActions
            disableSpacing
            className={classes.cardBottom}></CardActions>
        </Card>
      </Grid>
    </>
  )
}

export default LeftCard
