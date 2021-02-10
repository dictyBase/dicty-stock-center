import React from "react"
// import { useQuery } from "@apollo/client"
// import PanelLoader from "./PanelLoader"
// import { GET_STOCK_TOTALS } from "common/graphql/queries/stocks/lists"
import Typography from "@material-ui/core/Typography"
import useStyles from "./homeStyles"

/**
 * Availability fetches and displays the current availability of strains and plasmids.
 */

const Availability = () => {
  const classes = useStyles()
  // const { loading, error, data } = useQuery(GET_STOCK_TOTALS, {
  //   variables: {
  //     limit: 20000,
  //   },
  //   fetchPolicy: "network-only",
  // })

  // if (loading) return <PanelLoader skeletonCount={5} />

  // if (error)
  //   return (
  //     <div className={classes.panelGray}>
  //       Error fetching number of strains and plasmids
  //     </div>
  //   )

  return (
    <div className={classes.panelGray}>
      <Typography variant="h4" gutterBottom>
        Strain & Plasmid Availability
      </Typography>
      <Typography variant="body2">Total counts coming soon</Typography>
      {/* <Typography variant="body2">
        <strong>20,000</strong> Strains
      </Typography>
      <Typography variant="body2">
        <strong>900</strong> Plasmids
      </Typography> */}
    </div>
  )
}

export default Availability
