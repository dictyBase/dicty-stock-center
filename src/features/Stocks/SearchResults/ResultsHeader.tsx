import React from "react"
import Typography from "@material-ui/core/Typography"

type Props = {
  /** Type of search results */
  property: string
  /** Item being searched for */
  description: string
}

const ResultsHeader = ({ property, description }: Props) => (
  <Typography variant="h5">
    {property} Search Results for {description}
  </Typography>
)

export default ResultsHeader
