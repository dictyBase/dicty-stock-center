// @flow
import React from "react"
import PanelWrapper from "components/common/PanelWrapper"
import AddressFields from "../AddressFields"

const addressFields = [
  {
    name: "firstName",
    field: "First Name",
    required: true,
  },
  {
    name: "lastName",
    field: "Last Name",
    required: true,
  },
  {
    name: "email",
    field: "Email",
    required: true,
  },
  {
    name: "organization",
    field: "Organization",
    required: true,
  },
  {
    name: "lab",
    field: "Lab/Group",
    required: true,
  },
  {
    name: "phone",
    field: "Phone Number",
    required: true,
  },
  {
    name: "address1",
    field: "Address",
    required: true,
  },
  {
    name: "address2",
    field: "Address",
    required: false,
  },
  {
    name: "city",
    field: "City",
    required: true,
  },
  {
    name: "state",
    field: "State/Province",
    required: false,
  },
  {
    name: "zip",
    field: "Zip Code",
    required: true,
  },
]

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
      fields={addressFields}
      countryName="country"
      countryValue={props.values.country}
      {...props}
    />
  </PanelWrapper>
)

export default ShippingPageLeftColumn
