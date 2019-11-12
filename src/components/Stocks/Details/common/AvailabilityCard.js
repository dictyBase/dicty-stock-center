// @flow
import React from "react"
import Card from "@material-ui/core/Card"
import useStyles from "components/Stocks/Details/styles"
import AvailableCardDisplay from "./AvailableCardDisplay"
import UnavailableCardDisplay from "./UnavailableCardDisplay"

const AvailabilityCard = ({ data, stockType }) => {
  const classes = useStyles()

  let label
  stockType === "strain" ? (label = data.label) : (label = data.summary)

  const cartData = {
    id: data.id,
    label: label,
    summary: data.summary,
  }

  return (
    <Card raised className={classes.availabilityCard}>
      {data.in_stock ? (
        <AvailableCardDisplay cartData={cartData} stockType={stockType} />
      ) : (
        <UnavailableCardDisplay data={data} />
      )}
    </Card>
  )
}

export default AvailabilityCard
