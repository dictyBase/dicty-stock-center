// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import AvailabilityCard from "components/Stocks/Details/common/AvailabilityCard"
import MoreStrainsCard from "./MoreStrainsCard"
import { StrainDetailsProps } from "components/Stocks/Details/types/props"

const StrainDetailsRightColumn = ({ data }: StrainDetailsProps) => (
  <Grid item xs={12} md={2}>
    <AvailabilityCard data={data} stockType="strain" />
    <MoreStrainsCard genes={data.genes} />
  </Grid>
)

export default StrainDetailsRightColumn
