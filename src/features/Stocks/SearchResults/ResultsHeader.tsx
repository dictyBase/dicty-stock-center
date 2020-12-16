import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  title: {
    marginBottom: "10px",
  },
})

type Props = {
  /** Type of search results */
  property: string
  /** Item being searched for */
  description: string
}

const ResultsHeader = ({ property, description }: Props) => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h1" className={classes.title}>
        {property} Search Results
      </Typography>
      <Typography variant="h3" color="textSecondary">
        <em>{description}</em>
      </Typography>
    </>
  )
}

export default ResultsHeader
