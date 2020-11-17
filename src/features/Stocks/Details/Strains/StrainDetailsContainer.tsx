import React from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import Grid from "@material-ui/core/Grid"
import DetailsHeader from "features/Stocks/Details/common/DetailsHeader"
import DetailsLoader from "features/Stocks/Details/common/DetailsLoader"
import StrainDetailsLeftCard from "./StrainDetailsLeftCard"
import AvailabilityCard from "features/Stocks/Details/common/AvailabilityCard"
import GraphQLErrorPage from "features/Errors/GraphQLErrorPage"
import { GET_STRAIN } from "common/graphql/queries/stocks/details"
import characterConverter from "common/utils/characterConverter"
import useStyles from "features/Stocks/Details/styles"

type Params = {
  /** Stock ID from URL */
  id: string
}

/**
 * StrainDetailsContainer is the main component for an individual strain details page.
 * It is responsible for fetching the data and passing it down to more specific components.
 */

const StrainDetailsContainer = () => {
  const { id } = useParams<Params>()
  const classes = useStyles()
  const { loading, error, data } = useQuery(GET_STRAIN, {
    variables: { id },
    errorPolicy: "all",
  })

  if (loading) return <DetailsLoader />
  if (error) return <GraphQLErrorPage error={error} />

  const label = characterConverter(data.strain.label)
  let title = `Strain Details for ${label}`
  if (data.strain.phenotypes.length > 0) {
    title = `Phenotype and Strain Details for ${data.strain.label}`
  }

  return (
    <Grid container className={classes.root} spacing={2} justify="center">
      <Helmet>
        <title>{title} - Dicty Stock Center</title>
        <meta
          name="description"
          content={`Dicty Stock Center strain details page for ${label}`}
        />
      </Helmet>
      <DetailsHeader
        stockType="strain"
        id={data.strain.id}
        name={data.strain.label}
      />
      <StrainDetailsLeftCard data={data.strain} />
      <Grid item xs={12} md={3} lg={2}>
        <AvailabilityCard data={data} stockType="strain" />
      </Grid>
    </Grid>
  )
}

export { StrainDetailsContainer }
export default StrainDetailsContainer
