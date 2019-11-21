// @flow
import React from "react"
import Card from "@material-ui/core/Card"
import useStyles from "components/Stocks/Details/styles"
import AvailableCardDisplay from "./AvailableCardDisplay"
import UnavailableCardDisplay from "./UnavailableCardDisplay"

type Props = {
  /** Stock data */
  data: Object,
  /** strain or plasmid */
  stockType: string,
}

/**
 * AvailabilityCard handles the display of stock availability on any
 * details page.
 */

const AvailabilityCard = ({ data, stockType }: Props) => {
  const classes = useStyles()

  const label = stockType === "strain" ? data.label : data.name

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
        <UnavailableCardDisplay data={data} />
      )}
    </Card>
  )
}

export default AvailabilityCard
