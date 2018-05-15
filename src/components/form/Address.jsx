// @flow
import React from "react"
import FormGroupInput from "./FormGroupInput"
import FormGroupSelect from "./FormGroupSelect"
import countryList from "forms/utils/countryList"
import { RequiredText } from "styles"

type Props = {
  address: Object,
  address2: Object,
  city: Object,
  state: Object,
  zip: Object,
  country: Object
}

const Address = (props: Props) => {
  const { address, address2, city, state, zip, country } = props
  return (
    <div>
      <FormGroupInput field={address}>
        <RequiredText>* </RequiredText>
        Address:
      </FormGroupInput>
      <FormGroupInput field={address2}>Address:</FormGroupInput>
      <FormGroupInput field={city}>
        <RequiredText>* </RequiredText>
        City:
      </FormGroupInput>
      <FormGroupInput field={state}>State/Province:</FormGroupInput>
      <FormGroupInput field={zip}>
        <RequiredText>* </RequiredText>
        ZIP:
      </FormGroupInput>
      <FormGroupSelect field={country} list={countryList}>
        <RequiredText>* </RequiredText>
        Country:
      </FormGroupSelect>
    </div>
  )
}
export default Address
