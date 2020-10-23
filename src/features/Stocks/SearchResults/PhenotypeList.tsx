import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import PhenotypeListHeader from "./PhenotypeListHeader"
import PhenotypeListItem from "./PhenotypeListItem"
import { StrainWithPhenotype } from "../Details/types/props"

const useStyles = makeStyles({
  list: {
    paddingTop: "0px",
    paddingBottom: "0px",
  },
})

type Props = {
  data: Array<StrainWithPhenotype>
}

/**
 * PhenotypeList is used to display a list of phenotypes.
 */

const PhenotypeList = ({ data }: Props) => {
  const classes = useStyles()

  return (
    <Paper>
      <PhenotypeListHeader />
      <List className={classes.list}>
        {data
          .slice()
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((item: StrainWithPhenotype, index: number) => (
            <PhenotypeListItem key={index} strain={item} />
          ))}
      </List>
    </Paper>
  )
}

export default PhenotypeList
