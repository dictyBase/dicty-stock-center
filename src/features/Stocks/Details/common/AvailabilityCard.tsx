import React from "react"
import Card from "@material-ui/core/Card"
import useStyles from "features/Stocks/Details/styles"
import AvailableCardDisplay from "./AvailableCardDisplay"
import UnavailableCardDisplay from "./UnavailableCardDisplay"

type Props = {
  /** Stock data */
  data: {
    id: string
    summary: string
    label?: string
    name?: string
    in_stock: boolean
  }
  /** strain or plasmid */
  stockType: string
}

/**
 * AvailabilityCard handles the display of stock availability on any
 * details page.
 */

const AvailabilityCard = ({ data, stockType }: Props) => {
  const classes = useStyles()

  let label = ""

  if (stockType === "strain" && data.label !== undefined) {
    label = data.label
  }

  if (stockType === "plasmid" && data.name !== undefined) {
    label = data.name
  }

  const cartData = {
    id: data.id,
    name: label,
    summary: data.summary,
    type: stockType,
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
