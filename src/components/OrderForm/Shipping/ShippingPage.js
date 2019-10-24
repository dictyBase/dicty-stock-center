// @flow
import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PanelWrapper from "components/common/PanelWrapper"
import ShippingMethod from "./ShippingMethod"
import AdditionalInformation from "./AdditionalInformation"
import AddressFields from "../AddressFields"
import useStyles from "../formStyles"

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
  /** Current order form page number */
  pageNum: number,
  /** Function to set the page number */
  setPageNum: Function,
}

/**
 * ShippingPage is the display component for when the user is entering shipping information.
 */

const ShippingPage = (props: Props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const classes = useStyles()
  const { values, pageNum, setPageNum } = props

  const validationChecker = () => {
    const fields = [
      values.firstName,
      values.lastName,
      values.email,
      values.organization,
      values.lab,
      values.address1,
      values.city,
      values.zip,
      values.country,
      values.phone,
      values.shippingAccountNumber,
    ]
    if (fields.includes("")) {
      setModalOpen(true)
      setPageNum(0)
    }
  }

  const handleContinueClick = () => {
    setPageNum(pageNum + 1)
    validationChecker()
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <PanelWrapper title="Shipping Address">
          <AddressFields
            fields={addressFields}
            countryName="country"
            countryValue={values.country}
            {...props}
          />
        </PanelWrapper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12}>
            <PanelWrapper title="Shipping Method">
              <ShippingMethod {...props} />
            </PanelWrapper>
          </Grid>
          <Grid item xs={12}>
            <PanelWrapper title="Additional Information">
              <AdditionalInformation {...props} />
            </PanelWrapper>
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              className={classes.continueBtn}
              onClick={handleContinueClick}>
              Continue &nbsp;
              <FontAwesomeIcon icon="arrow-circle-right" />
            </Button>
            {modalOpen && (
              <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
                <DialogTitle>{"Validation error"}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Some fields are missing. Please ensure that you have filled
                    out all required fields and try again.
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ShippingPage
