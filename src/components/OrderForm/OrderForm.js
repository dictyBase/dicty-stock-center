// @flow
import React from "react"
import { Form, Formik } from "formik"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import ShippingPage from "./Shipping/ShippingPage"
import PaymentPage from "./Payment/PaymentPage"
import SubmitPage from "./Submit/SubmitPage"
import styles from "./formStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const pages = [<ShippingPage />, <PaymentPage />, <SubmitPage />]

type Props = {
  classes: Object,
}

type State = {
  page: number,
}

class OrderForm extends React.PureComponent<Props, State> {
  state = {
    page: 0,
  }

  submit = (values: any) => {
    console.log("values: ", values)
  }

  prevPage = () => this.setState(state => ({ page: state.page - 1 }))
  nextPage = () => this.setState(state => ({ page: state.page + 1 }))

  render() {
    const { classes } = this.props

    return (
      <Grid container spacing={16} className={classes.layout}>
        <Grid item xs={12}>
          <Formik initialValues={{}} onSubmit={this.submit}>
            {() => (
              <Form>
                {pages[this.state.page]}
                <br />
                <Grid container justify="flex-end">
                  <Grid item>
                    {this.state.page > 0 && (
                      <Button type="primary" onClick={this.prevPage}>
                        <FontAwesomeIcon icon="arrow-circle-left" />
                        &nbsp; Previous
                      </Button>
                    )}
                    {this.state.page === pages.length - 1 ? (
                      <Button type="primary">Submit Order</Button>
                    ) : (
                      <Button type="primary" onClick={this.nextPage}>
                        <FontAwesomeIcon icon="arrow-circle-right" />
                        &nbsp; Continue
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(OrderForm)
