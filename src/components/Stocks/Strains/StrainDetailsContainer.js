// @flow
import React from "react"
import { Helmet } from "react-helmet"
import { withRouter } from "react-router-dom"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import createStyles from "@material-ui/core/styles/createStyles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import StockDetailsHeader from "../StockDetailsHeader"
import StrainDetailsList from "./StrainDetailsList"
import ShoppingButtons from "../ShoppingButtons"
import StockDetailsLoader from "../StockDetailsLoader"
import PhenotypeTable from "./Phenotypes/PhenotypeTable"
import GraphQLErrorPage from "components/GraphQLErrorPage"

const styles = (theme: Theme) =>
  createStyles({
    layout: {
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  })

const GET_STRAIN = gql`
  query Strain($id: ID!) {
    strain(id: $id) {
      id
      label
      names
      systematic_name
      characteristics
      summary
      genetic_modification
      genotypes
      mutagenesis_method
      species
      parent {
        id
        label
      }
      depositor
      plasmid
      dbxrefs
      genes
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
    }
  }
`

type Props = {
  classes: Object,
  title: string,
  match: Object,
}

/**
 * StrainDetailsContainer is the main component for an individual strain details page.
 * It is responsible for fetching the data and passing it down to more specific components.
 */

export const StrainDetailsContainer = (props: Props) => {
  const { classes, match } = props
  let title

  return (
    <Query query={GET_STRAIN} variables={{ id: match.params.id }}>
      {({ loading, error, data }) => {
        if (loading) return <StockDetailsLoader />
        if (error) return <GraphQLErrorPage error={error} />

        if (data.strain.phenotypes.length > 0) {
          title = `Phenotype and Strain Details for ${data.strain.label}`
        } else {
          title = `Strain Details for ${data.strain.label}`
        }

        return (
          <Grid container spacing={16} className={classes.layout}>
            <Helmet>
              <title>{title} - Dicty Stock Center</title>
              <meta
                name="description"
                content={`Dicty Stock Center strain details page for ${
                  data.strain.label
                }`}
              />
            </Helmet>
            <Grid item xs={12}>
              <StockDetailsHeader title={title} />
            </Grid>
            <Grid item xs={12}>
              {data.strain.phenotypes.length > 0 && (
                <PhenotypeTable data={data.strain.phenotypes} />
              )}
              <StrainDetailsList data={data.strain} />
              <ShoppingButtons
                type="strain"
                id={data.strain.id}
                name={data.strain.label}
              />
            </Grid>
          </Grid>
        )
      }}
    </Query>
  )
}

export default withRouter(withStyles(styles)(StrainDetailsContainer))
