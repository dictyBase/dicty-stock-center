import React from "react"
import Card from "@material-ui/core/Card"
import useStyles from "features/Stocks/Details/styles"
import AvailableCardDisplay from "./AvailableCardDisplay"
import UnavailableCardDisplay from "./UnavailableCardDisplay"
import {
  StrainDetails,
  PlasmidDetails,
} from "features/Stocks/Details/types/props"

type Props = {
  /** Stock data */
  data: StrainDetails | PlasmidDetails
}

/**
 * AvailabilityCard handles the display of stock availability on any
 * details page.
 */

const AvailabilityCard = ({ data }: Props) => {
  const classes = useStyles()

  let label = ""

  switch (data.type) {
    case "strain":
      label = data.label
      break
    case "plasmid":
      label = data.name
      break
  }

  const cartData = {
    id: data.id,
    name: label,
    summary: data.summary,
    type: data.type,
  }

  return (
    <Card raised className={classes.availabilityCard}>
      {data.in_stock ? (
        <AvailableCardDisplay cartData={cartData} />
      ) : (
        <UnavailableCardDisplay />
      )}
    </Card>
  )
}

export default AvailabilityCard
