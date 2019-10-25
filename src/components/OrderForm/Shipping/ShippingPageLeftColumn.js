// @flow
import React from "react"
import PanelWrapper from "components/common/PanelWrapper"
import AddressFields from "../AddressFields"
import addressFieldsGenerator from "../utils/addressFields"

type Props = {
  /** Values from Formik */
  values: Object,
}

/**
 * ShippingPageLeftColumn is the left column displayed on the shipping page.
 */

const ShippingPageLeftColumn = (props: Props) => (
  <PanelWrapper title="Shipping Address">
    <AddressFields
      fields={addressFieldsGenerator("shipping")}
      countryName="country"
      countryValue={props.values.country}
      {...props}
    />
  </PanelWrapper>
)

export default ShippingPageLeftColumn
