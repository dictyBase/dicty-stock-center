// @flow
import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { withStyles } from "@material-ui/core/styles"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import styles from "./homeStyles"

const GET_STOCK_TOTALS = gql`
  query StockList($cursor: Int!) {
    listPlasmids(input: { cursor: $cursor, limit: 30000 }) {
      totalCount
    }
    listStrains(input: { cursor: $cursor, limit: 30000 }) {
      totalCount
    }
  }
`

type Props = {
  /** Material-UI styling */
  classes: {
    panelGray: string,
  },
}

/**
 * Availability fetches and displays the current availability of strains and plasmids.
 */

const Availability = (props: Props) => {
  const { classes } = props

  return (
    <Query query={GET_STOCK_TOTALS} variables={{ cursor: 0 }}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <SkeletonTheme color="#D3D3D3	" highlightColor="#DCDCDC">
              <Skeleton count={5} />
            </SkeletonTheme>
          )
        if (error)
          return (
            <div className={classes.panelGray}>
              Error fetching number of strains and plasmids
            </div>
          )

        return (
          <div className={classes.panelGray}>
            <h4>Strain & Plasmid Availability</h4>
            <h5>
              <strong>{data.listStrains.totalCount}</strong> Strains
            </h5>
            <h5>
              <strong>{data.listPlasmids.totalCount}</strong> Plasmids
            </h5>
          </div>
        )
      }}
    </Query>
  )
}

export default withStyles(styles)(Availability)
