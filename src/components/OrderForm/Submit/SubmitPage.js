// @flow
import React from "react"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import PanelWrapper from "components/common/PanelWrapper"
import styles from "../formStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SubmitPage = props => {
  const { classes, items } = props

  return (
    <Grid container spacing={16} className={classes.innerForm}>
      <Grid item xs={12}>
        <div className={classes.header}>Please review your order</div>
      </Grid>
      <Grid item xs={12}>
        <PanelWrapper title="Review Order">
          <div className={classes.submit}>
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
                <>
                  <Grid item xs={2} />
                  <Grid item xs={4}>
                    {item.id}
                  </Grid>
                  <Grid item xs={4}>
                    {item.name}
                  </Grid>
                  <Grid item xs={2} />
                </>
              ))}
            </Grid>
          </div>
          <br />
          <br />
        </PanelWrapper>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = state => ({
  items: state.cart.addedItems,
})

export default connect(mapStateToProps)(withStyles(styles)(SubmitPage))
