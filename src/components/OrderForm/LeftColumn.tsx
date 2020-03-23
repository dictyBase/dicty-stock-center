import React from "react"
import PanelWrapper from "components/common/PanelWrapper"
import AddressFields from "./AddressFields"
import addressFieldsGenerator from "./utils/addressFields"

type Props = {
  /** Payment or Shipping */
  page: string
  /** Name of country field (country or payerCountry) */
  countryName: string
}

/**
 * LeftColumn is the display of the left column on the shipping
 * and payment order form pages.
 */

const LeftColumn = ({ page, countryName }: Props) => (
  <PanelWrapper title={`${page} Address`}>
    <AddressFields
      fields={addressFieldsGenerator(page)}
      countryName={countryName}
    />
  </PanelWrapper>
)

export default LeftColumn
