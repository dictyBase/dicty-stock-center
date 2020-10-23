import React from "react"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import PhenotypeListHeader from "./PhenotypeListHeader"
import PhenotypeListItem from "./PhenotypeListItem"
import { StrainWithPhenotype } from "../Details/types/props"

type Props = {
  data: Array<StrainWithPhenotype>
  /** Total number of results for this search */
  totalCount: number
}

/**
 * PhenotypeList is used to display a list of phenotypes.
 */

const PhenotypeList = ({ data }: Props) => (
  // const classes = useStyles()

  <Paper>
    <PhenotypeListHeader />
    <List dense>
      {data.map((item: StrainWithPhenotype, index: number) => (
        <PhenotypeListItem key={index} strain={item} />
      ))}
    </List>
  </Paper>
)

export default PhenotypeList
