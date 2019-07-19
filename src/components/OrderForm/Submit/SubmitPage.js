// @flow
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ShoppingCartItems from "components/ShoppingCart/ShoppingCartItems"
import styles from "../formStyles"

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** Formik value to indicate if form is being submitted */
  isSubmitting: boolean,
  /** Current order form page number */
  pageNum: number,
  /** Function to set the page number */
  setPageNum: Function,
}

/**
 * SubmitPage is the final page the user sees before submitting the order.
 */

export const SubmitPage = (props: Props) => {
  const { classes, pageNum, setPageNum } = props

  return (
    <Grid container spacing={16} className={classes.innerForm}>
      <Grid item xs={12}>
        <div className={classes.header}>Please review your order</div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.submitPage}>
          <h1>
            <FontAwesomeIcon icon="truck" /> Items
          </h1>
          <Grid container justify="center">
            <ShoppingCartItems />
          </Grid>
        </div>
        <br />
        <br />
        <br />
        <Grid container justify="center" spacing={16}>
          <Grid item xs={2} />
          <Grid item xs={4}>
            <Button
              color="primary"
              size="large"
              className={classes.previousBtn}
              onClick={() => setPageNum(pageNum - 1)}>
              <FontAwesomeIcon icon="arrow-circle-left" />
              &nbsp; Back
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              type="submit"
              size="large"
              className={classes.submitBtn}
              disabled={props.isSubmitting}>
              Submit Order &nbsp;
              <FontAwesomeIcon icon="check-circle" />
            </Button>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(SubmitPage)
