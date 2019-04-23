// @flow
import React, { Fragment } from "react"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PanelWrapper from "components/common/PanelWrapper"
import styles from "../formStyles"
import type { MapStateToProps } from "react-redux"

type Props = {
  /** Material-UI styling */
  classes: Object,
  /** Stock items being ordered */
  items: Array<{
    id: string,
    name: string,
  }>,
}

/**
 * SubmitPage is the final page the user sees before submitting the order.
 */

const SubmitPage = (props: Props) => {
  const { classes, items } = props
  const [pageNum, setPageNum] = props.page

  return (
    <Grid container spacing={16} className={classes.innerForm}>
      <Grid item xs={12}>
        <div className={classes.header}>Please review your order</div>
      </Grid>
      <Grid item xs={12}>
        <PanelWrapper title="Review Order">
          <div className={classes.submitPage}>
            <h1>
              <FontAwesomeIcon icon="truck" /> Items
            </h1>
            <Grid container justify="center">
              <Grid item xs={2} />
              <Grid item xs={4}>
                <h3>ID</h3>
              </Grid>
              <Grid item xs={4}>
                <h3>Name</h3>
              </Grid>
              <Grid item xs={2} />
              {items.map((item, index) => (
                <Fragment key={index}>
                  <Grid item xs={2} />
                  <Grid item xs={4}>
                    {item.id}
                  </Grid>
                  <Grid item xs={4}>
                    {item.name}
                  </Grid>
                  <Grid item xs={2} />
                </Fragment>
              ))}
            </Grid>
          </div>
          <br />
          <br />
        </PanelWrapper>
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
              &nbsp; Previous
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

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  items: state.cart.addedItems,
})

export default connect(mapStateToProps)(withStyles(styles)(SubmitPage))
