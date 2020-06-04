import React from "react"

type Props = {
  property: string
  description: string
}

const ResultsHeader = ({ property, description }: Props) => (
  <h1>
    {property} Search Results for {description}
  </h1>
)

export default ResultsHeader
