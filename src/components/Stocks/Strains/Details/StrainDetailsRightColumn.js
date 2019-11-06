// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import StrainAvailabilityCard from "./StrainAvailabilityCard"
import MoreStrainsCard from "./MoreStrainsCard"
import { StrainDetailsProps } from "components/Stocks/types/Props"

const StrainDetailsRightColumn = ({ data }: StrainDetailsProps) => (
  <Grid item xs={2}>
    <StrainAvailabilityCard data={data} />
    <MoreStrainsCard genes={data.genes} />
  </Grid>
)

export default StrainDetailsRightColumn
