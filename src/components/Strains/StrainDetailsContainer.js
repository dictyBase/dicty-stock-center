import React from "react"
import { withRouter } from "react-router-dom"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import createStyles from "@material-ui/core/styles/createStyles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import StrainDetailsHeader from "./StrainDetailsHeader"
import StrainDetailsList from "./StrainDetailsList"
import StrainDetailsLoader from "./StrainDetailsLoader"

const styles = (theme: Theme) =>
  createStyles({
    layout: {
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.up(1300 + theme.spacing.unit * 3 * 2)]: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
  })

const GET_STRAIN = gql`
  query Strain($id: ID!) {
    strain(id: $id) {
      id
      descriptor
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
      }
      depositor
      plasmid
      dbxrefs
      genes
      phenotypes {
        phenotype
        notes
        assay
        environment
        dbxrefs
      }
    }
  }
`

/**
 * StrainDetailsContainer is the main component for an individual strain details page.
 * It is responsible for fetching the data and passing it down to more specific components.
 */

export const StrainDetailsContainer = (props: Props) => {
  const { classes, match } = props

  return (
    <Query query={GET_STRAIN} variables={{ id: match.params.id }}>
      {({ loading, error, data }) => {
        if (loading) return <StrainDetailsLoader />
        if (error) return <p>{error.toString()}</p>

        return (
          <Grid container spacing={16} className={classes.layout}>
            <Grid item xs={12}>
              {data.strain.phenotypes.length > 0 ? (
                <StrainDetailsHeader
                  title={`Phenotype and Strain Details for ${
                    data.strain.descriptor
                  }`}
                />
              ) : (
                <StrainDetailsHeader
                  title={`Strain Details for ${data.strain.descriptor}`}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              {/* {data.strain.phenotypes && (
                <PhenotypeTable data={data.strain.phenotypes} />
              )} */}
              <StrainDetailsList data={data.strain} />
            </Grid>
          </Grid>
        )
      }}
    </Query>
  )
}

export default withRouter(withStyles(styles)(StrainDetailsContainer))
