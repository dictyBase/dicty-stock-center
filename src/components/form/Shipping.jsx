// @flow
import React, { Component } from "react"
import User from "./User"
import ShippingMethod from "./ShippingMethod"
import ShippingAdditional from "./ShippingAdditional"
import SubmitButton from "./SubmitButton"
import { reduxForm } from "redux-form"
import { submitForm } from "actions/order/shipping"
import { syncValidateShipping } from "forms/validate/order-form"
import { Flex, Box } from "rebass"
import { DictyHeader, AlertBox, HorizontalForm } from "styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const fields = [
  "firstName",
  "lastName",
  "email",
  "org",
  "group",
  "address",
  "address2",
  "city",
  "state",
  "zip",
  "country",
  "phone",
  "shipAccount",
  "shipAccountNum",
  "comments",
]

type Props = {
  fields: Object,
  handleSubmit: Function,
  submitting: boolean,
  error: string,
}

class Shipping extends Component<Props> {
  render() {
    const { handleSubmit, submitting, error } = this.props
    const {
      fields: {
        firstName,
        lastName,
        email,
        org,
        group,
        address,
        address2,
        city,
        state,
        zip,
        country,
        phone,
        shipAccount,
        shipAccountNum,
        comments,
      },
    } = this.props
    return (
      <Flex wrap justify="center">
        <Box>
          <DictyHeader>
            <h2>Please enter shipping information</h2>
          </DictyHeader>
        </Box>
        <Box w={["95%", "95%", "95%"]}>
          <HorizontalForm onSubmit={handleSubmit}>
            <Flex wrap justify="center">
              <Box w={[1, 1, 1, "45%"]} mr={1}>
                <User
                  title={"Shipping Address"}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  org={org}
                  group={group}
                  address={address}
                  address2={address2}
                  city={city}
                  state={state}
                  zip={zip}
                  country={country}
                  phone={phone}
                />
              </Box>
              <Box w={[1, 1, 1, "45%"]} mr={1}>
                <Box mb={2}>
                  <ShippingMethod
                    title={"Shipping Method"}
                    shipAccount={shipAccount}
                    shipAccountNum={shipAccountNum}
                  />
                </Box>
                <Box mb={2}>
                  <ShippingAdditional
                    title={"Additional Information"}
                    comments={comments}
                  />
                </Box>

                {error && (
                  <Box mb={2}>
                    <AlertBox>
                      <FontAwesomeIcon icon="exclamation-circle" />
                      <strong> Error! </strong> {error}
                    </AlertBox>
                  </Box>
                )}
                <hr />
                <Box>
                  <SubmitButton
                    name={"Continue "}
                    submitting={submitting}
                    icon={"arrow-circle-right"}
                  />
                </Box>
              </Box>
            </Flex>
          </HorizontalForm>
        </Box>
      </Flex>
    )
  }
}

export default reduxForm({
  form: "shipping",
  fields,
  onSubmit: submitForm,
  validate: syncValidateShipping,
})(Shipping)
