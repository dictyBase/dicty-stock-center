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
 * PaymentPageLeftColumn is the left column displayed on the Payment page.
 */

const PaymentPageLeftColumn = (props: Props) => (
  <PanelWrapper title="Payment Address">
    <AddressFields
      fields={addressFieldsGenerator("payment")}
      countryName="payerCountry"
      countryValue={props.values.payerCountry}
      {...props}
    />
  </PanelWrapper>
)

export default PaymentPageLeftColumn
