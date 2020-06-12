import React from "react"
import Typography from "@material-ui/core/Typography"

type Props = {
  property: string
  description: string
}

const ResultsHeader = ({ property, description }: Props) => (
  <Typography variant="h4">
    {property} Search Results for {description}
  </Typography>
)

export default ResultsHeader
