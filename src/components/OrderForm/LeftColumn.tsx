import React from "react"
import { useFormikContext } from "formik"
import PanelWrapper from "components/common/PanelWrapper"
import AddressFields from "./AddressFields"
import addressFieldsGenerator from "./utils/addressFields"

type Props = {
  page: string
  countryName: string
}

/**
 * LeftColumn is the display of the left column on the shipping
 * and payment order form pages.
 */

const LeftColumn = ({ page, countryName }: Props) => {
  const { values } = useFormikContext<any>()

  return (
    <PanelWrapper title={`${page} Address`}>
      <AddressFields
        fields={addressFieldsGenerator(page)}
        countryName={countryName}
        countryValue={values[countryName]}
      />
    </PanelWrapper>
  )
}

export default LeftColumn
