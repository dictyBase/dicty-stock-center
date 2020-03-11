import React from "react"
import Paper from "@material-ui/core/Paper"
import PhenotypeListListHeader from "./PhenotypeListHeader"
import PhenotypeListItem from "./PhenotypeListItem"
import useStyles from "./phenotypeStyles"
import { data } from "./mockPhenotypeData"

/**
 * PhenotypeList provides a list of phenotypes for a given strain.
 */

const PhenotypeList = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <PhenotypeListListHeader />
      {data.map((item, index) => (
        <PhenotypeListItem key={index} data={item} />
      ))}
    </Paper>
  )
}

export default PhenotypeList
