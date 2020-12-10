import React from "react"
import Typography from "@material-ui/core/Typography"
import AvailableDisplay from "./AvailableDisplay"

type Props = {
  cartData: {
    id: string
    name: string
    summary: string
    type: string
  }
  inStock: boolean
}

const Availability = ({ cartData, inStock }: Props) => (
  <React.Fragment>
    {inStock ? (
      <AvailableDisplay cartData={cartData} />
    ) : (
      <Typography variant="body2" color="error">
        Currently unavailable at the DSC
      </Typography>
    )}
  </React.Fragment>
)

export default Availability
