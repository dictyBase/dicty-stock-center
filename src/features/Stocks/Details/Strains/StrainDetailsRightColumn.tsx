import React from "react"
import Grid from "@material-ui/core/Grid"
import AvailabilityCard from "features/Stocks/Details/common/AvailabilityCard"
import { StrainDetailsProps } from "features/Stocks/Details/types/props"

const StrainDetailsRightColumn = ({ data }: StrainDetailsProps) => (
  <Grid item xs={12} md={3} lg={2}>
    <AvailabilityCard data={data} stockType="strain" />
  </Grid>
)

export default StrainDetailsRightColumn
