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
  error: {
    message: string,
  },
}

class EditShipping extends Component<Props> {
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
            <h2>Edit Shipping Information</h2>
          </DictyHeader>
        </Box>
        <Box w={"85%"}>
          <HorizontalForm onSubmit={handleSubmit}>
            <Flex wrap justify="center">
              <Box w={[1, 1, 1, 1 / 2]} mr={1}>
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
                <Flex>
                  <Box w={1}>
                    <ShippingMethod
                      title={"Shipping Method"}
                      shipAccount={shipAccount}
                      shipAccountNum={shipAccountNum}
                    />
                  </Box>
                </Flex>
                <Flex>
                  <Box w={1}>
                    <ShippingAdditional
                      title={"Additional Information"}
                      comments={comments}
                    />
                  </Box>
                </Flex>
                {error && (
                  <Flex>
                    <Box w={1}>
                      <AlertBox>
                        <FontAwesomeIcon icon="exclamation-circle" />
                        <strong> Error! </strong> {error} {error.message}
                      </AlertBox>
                    </Box>
                  </Flex>
                )}
                <Flex justify="flex-end">
                  <Box w={[1, 1, 1, 1 / 2]}>
                    <SubmitButton
                      name={"Continue "}
                      submitting={submitting}
                      icon={"arrow-circle-right"}
                    />
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </HorizontalForm>
        </Box>
      </Flex>
    )
  }
}

// pull state into forms initial values
const mapStateToProps = state => {
  const { order } = state
  const {
    firstName,
    lastName,
    email,
    org,
    group,
    address,
    address2,
    city,
    zip,
    country,
    phone,
  } = order.consumer
  const { account, accountNum, comments } = order.shipping

  return {
    initialValues: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      org: org,
      group: group,
      address: address,
      address2: address2,
      city: city,
      state: order.consumer.state,
      zip: zip,
      country: country,
      phone: phone,
      shipAccount: account,
      shipAccountNum: accountNum,
      comments: comments,
    },
  }
}

export default reduxForm(
  {
    form: "editShipping",
    fields,
    onSubmit: submitForm,
    validate: syncValidateShipping,
  },
  mapStateToProps,
)(EditShipping)
