import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Alert from "@material-ui/lab/Alert"
import AvailableDisplay from "./AvailableDisplay"
import { CartItem } from "common/types"

const useStyles = makeStyles((theme) => ({
  message: {
    padding: "0px",
  },
}))

type Props = {
  cartData: CartItem
  inStock: boolean
}

/**
 * Availability handles the display to indicate a stock's current
 * inventory status.
 */

const Availability = ({ cartData, inStock }: Props) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      {inStock ? (
        <AvailableDisplay cartData={cartData} />
      ) : (
        <Alert
          classes={{ message: classes.message }}
          icon={false}
          severity="error">
          Currently unavailable at the DSC
        </Alert>
      )}
    </React.Fragment>
  )
}
export default Availability
