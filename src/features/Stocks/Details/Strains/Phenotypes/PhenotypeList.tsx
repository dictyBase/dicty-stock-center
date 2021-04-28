import React from "react"
import Paper from "@material-ui/core/Paper"
import PhenotypeListListHeader from "./PhenotypeListHeader"
import PhenotypeListItem from "./PhenotypeListItem"
import useStyles from "./phenotypeStyles"
import { Phenotype } from "dicty-graphql-schema"

type Props = {
  phenotypes: Array<Phenotype>
}

/**
 * PhenotypeList provides a list of phenotypes for a given strain.
 */

const PhenotypeList = ({ phenotypes }: Props) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <PhenotypeListListHeader />
      {phenotypes
        .slice()
        .sort((a, b) => a.phenotype.localeCompare(b.phenotype))
        .map((item, index) => (
          <PhenotypeListItem key={index} data={item} />
        ))}
    </Paper>
  )
}

export default PhenotypeList
