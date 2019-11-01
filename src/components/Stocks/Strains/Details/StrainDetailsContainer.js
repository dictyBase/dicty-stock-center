// @flow
import React from "react"
import { Helmet } from "react-helmet"
import { Link, withRouter } from "react-router-dom"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import Grid from "@material-ui/core/Grid"
import StrainDetailsList from "./StrainDetailsList"
import StockDetailsHeader from "components/Stocks/DetailsPageItems/StockDetailsHeader"
import ShoppingButtons from "components/Stocks/DetailsPageItems/ShoppingButtons"
import StockDetailsLoader from "components/Stocks/DetailsPageItems/StockDetailsLoader"
// import PhenotypeTable from "components/Stocks/Strains/Phenotypes/PhenotypeTable"
import GraphQLErrorPage from "components/Errors/GraphQLErrorPage"
import characterConverter from "components/Stocks/utils/characterConverter"
import useStyles from "components/Stocks/DetailsPageItems/detailsStyles"

export const GET_STRAIN = gql`
  query Strain($id: ID!) {
    strain(id: $id) {
      id
      label
      summary
      species
      parent {
        id
        label
      }
      depositor
      plasmid
      dbxrefs
      publications {
        id
      }
      genes
      in_stock
      systematic_name
      genotypes
      mutagenesis_method
      genetic_modification
      names
      characteristics
    }
  }
`

/**
 * query will still need these from annotations:
      phenotypes {
        phenotype
        note
        assay
        environment
        publication {
          authors {
            last_name
          }
          id
          pub_date
          title
          journal
          volume
          pages
        }
      }
 */

type Props = {
  /** React Router data */
  match: Object,
}

/**
 * StrainDetailsContainer is the main component for an individual strain details page.
 * It is responsible for fetching the data and passing it down to more specific components.
 */

export const StrainDetailsContainer = ({ match }: Props) => {
  const classes = useStyles()
  const { loading, error, data } = useQuery(GET_STRAIN, {
    variables: { id: match.params.id },
  })

  let title

  if (loading) return <StockDetailsLoader />
  if (error) return <GraphQLErrorPage error={error} />

  const label = characterConverter(data.strain.label)

  // if (data.strain.phenotypes.length > 0) {
  //   title = `Phenotype and Strain Details for ${data.strain.label}`
  // } else {
  title = `Strain Details for ${label}`
  // }

  return (
    <Grid container spacing={2} className={classes.layout}>
      <Helmet>
        <title>{title} - Dicty Stock Center</title>
        <meta
          name="description"
          content={`Dicty Stock Center strain details page for ${label}`}
        />
      </Helmet>
      <Grid item xs={12}>
        <StockDetailsHeader title={title} />
        <center>
          <Link to="/details-mockup">View new details page mockup</Link>
        </center>
      </Grid>
      <Grid item xs={12}>
        {/* {data.strain.phenotypes.length > 0 && (
                <PhenotypeTable data={data.strain.phenotypes} />
              )} */}
        <StrainDetailsList data={data.strain} />
        <ShoppingButtons
          type="strain"
          id={data.strain.id}
          name={data.strain.label}
          inStock={data.strain.in_stock}
        />
      </Grid>
    </Grid>
  )
}

export default withRouter<*>(StrainDetailsContainer)
