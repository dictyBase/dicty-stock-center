// @flow
import React from "react"
import { useQuery } from "@apollo/react-hooks"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { GET_STOCK_TOTALS } from "queries/queries"
import useStyles from "./homeStyles"

/**
 * Availability fetches and displays the current availability of strains and plasmids.
 */

const Availability = () => {
  const classes = useStyles()
  const { loading, error, data } = useQuery(GET_STOCK_TOTALS, {
    variables: {
      cursor: 0,
    },
  })

  if (loading)
    return (
      <SkeletonTheme color="#D3D3D3	" highlightColor="#DCDCDC">
        <Skeleton count={5} />
        &nbsp;
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
}

export { Availability }
export default Availability
