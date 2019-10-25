// @flow
import React from "react"
import PanelWrapper from "components/common/PanelWrapper"
import AddressFields from "../AddressFields"

const fields = [
  {
    name: "payerFirstName",
    field: "First Name",
    required: true,
  },
  {
    name: "payerLastName",
    field: "Last Name",
    required: true,
  },
  {
    name: "payerEmail",
    field: "Email",
    required: true,
  },
  {
    name: "payerOrganization",
    field: "Organization",
    required: true,
  },
  {
    name: "payerLab",
    field: "Lab/Group",
    required: true,
  },
  {
    name: "payerPhone",
    field: "Phone Number",
    required: true,
  },
  {
    name: "payerAddress1",
    field: "Address",
    required: true,
  },
  {
    name: "payerAddress2",
    field: "Address",
    required: false,
  },
  {
    name: "payerCity",
    field: "City",
    required: true,
  },
  {
    name: "payerState",
    field: "State/Province",
    required: false,
  },
  {
    name: "payerZip",
    field: "Zip Code",
    required: true,
  },
]

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
      fields={fields}
      countryName="payerCountry"
      countryValue={props.values.payerCountry}
      {...props}
    />
  </PanelWrapper>
)

export default PaymentPageLeftColumn
