// @flow
import React from "react"
import Paper from "@material-ui/core/Paper"
import PhenotypeListListHeader from "./PhenotypeListHeader"
import PhenotypeListItem from "./PhenotypeListItem"
import useStyles from "./phenotypeStyles"
import { data } from "./mockPhenotypeData"

// type Props = {
//   data: Array<Object>,
// }

/**
 * PhenotypeList provides a list of phenotypes for a given strain.
 */

const PhenotypeList = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <PhenotypeListListHeader />
      <PhenotypeListItem data={data} />
    </Paper>
  )
}

export default PhenotypeList
