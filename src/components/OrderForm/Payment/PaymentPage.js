// @flow
import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PanelWrapper from "components/common/PanelWrapper"
import PaymentMethod from "./PaymentMethod"
import PaymentInfoBox from "./PaymentInfoBox"
import AddressFields from "../AddressFields"
import ValidationDialog from "../ValidationDialog"
import useStyles from "../formStyles"

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
  /** Function to manually set Formik field values */
  setFieldValue: Function,
  /** Values from Formik */
  values: Object,
  /** Current order form page number */
  pageNum: number,
  /** Function to set the page number */
  setPageNum: Function,
}

/**
 * PaymentPage is the display component for when the user is entering payment information.
 */

const PaymentPage = (props: Props) => {
  const [checkbox, toggleCheckbox] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const classes = useStyles()
  const { setFieldValue, values, pageNum, setPageNum } = props

  const validationChecker = () => {
    const fields = [
      values.payerFirstName,
      values.payerLastName,
      values.payerEmail,
      values.payerOrganization,
      values.payerLab,
      values.payerAddress1,
      values.payerCity,
      values.payerZip,
      values.payerCountry,
      values.payerPhone,
      values.purchaseOrderNum,
    ]

    if (fields.includes("")) {
      setModalOpen(true)
      setPageNum(1)
    }
  }

  const handleChange = () => {
    toggleCheckbox(!checkbox)
    setFieldValue("payerFirstName", values.firstName)
    setFieldValue("payerLastName", values.lastName)
    setFieldValue("payerEmail", values.email)
    setFieldValue("payerOrganization", values.organization)
    setFieldValue("payerLab", values.lab)
    setFieldValue("payerAddress1", values.address1)
    setFieldValue("payerAddress2", values.address2)
    setFieldValue("payerCity", values.city)
    setFieldValue("payerState", values.state)
    setFieldValue("payerZip", values.zip)
    setFieldValue("payerCountry", values.country)
    setFieldValue("payerPhone", values.phone)
  }

  const handleContinueClick = () => {
    setPageNum(pageNum + 1)
    validationChecker()
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkbox}
              onChange={handleChange}
              value="sameAsShipping"
            />
          }
          label="Same as shipping (click here if payer address is the same as shipping address)"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <PanelWrapper title="Payment Address">
          <AddressFields
            fields={fields}
            countryName="payerCountry"
            countryValue={values.payerCountry}
            {...props}
          />
        </PanelWrapper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
            <PanelWrapper title="Payment Method">
              <PaymentMethod {...props} />
            </PanelWrapper>
          </Grid>
          <Grid item xs={12}>
            <PaymentInfoBox />
          </Grid>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={6}>
              <Button
                color="primary"
                size="large"
                className={classes.previousBtn}
                onClick={() => setPageNum(pageNum - 1)}>
                <FontAwesomeIcon icon="arrow-circle-left" />
                &nbsp; Back
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                size="large"
                className={classes.continueBtn}
                onClick={handleContinueClick}>
                Continue &nbsp;
                <FontAwesomeIcon icon="arrow-circle-right" />
              </Button>
              {modalOpen && (
                <ValidationDialog
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PaymentPage
