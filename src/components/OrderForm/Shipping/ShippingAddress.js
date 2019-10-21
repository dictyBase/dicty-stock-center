// @flow
import React from "react"
import { Grid } from "@material-ui/core"
import PersonalInformation from "./PersonalInformation"
import OrganizationInformation from "./OrganizationInformation"
import AddressInformation from "./AddressInformation"
import ContactInformation from "./ContactInformation"
import useStyles from "../formStyles"

type Props = {}

/**
 * ShippingAddress is a grid container that contains all of the main shipping address components.
 */

const ShippingAddress = (props: Props) => {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.innerForm}>
      <PersonalInformation {...props} />
      <OrganizationInformation {...props} />
      <AddressInformation {...props} />
      <ContactInformation {...props} />
    </Grid>
  )
}

export default ShippingAddress
