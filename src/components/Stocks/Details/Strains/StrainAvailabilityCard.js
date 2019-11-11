// @flow
import React from "react"
import Card from "@material-ui/core/Card"
import useStyles from "components/Stocks/Details/styles"
import AvailableStrainCardDisplay from "./AvailableStrainCardDisplay"
import UnavailableStrainCardDisplay from "./UnavailableStrainCardDisplay"
import { StrainDetailsProps } from "components/Stocks/Details/types/props"

const StrainAvailabilityCard = ({ data }: StrainDetailsProps) => {
  const classes = useStyles()

  return (
    <Card raised className={classes.availabilityCard}>
      {data.in_stock ? (
        <AvailableStrainCardDisplay data={data} />
      ) : (
        <UnavailableStrainCardDisplay data={data} />
      )}
    </Card>
  )
}

export default StrainAvailabilityCard
