// @flow
import React from "react"
import { connect } from "react-redux"
import PanelWrapper from "components/common/PanelWrapper"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import type { MapStateToProps } from "react-redux"

const styles = theme => ({
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "75%",
    "@media (min-width: 1300px)": {
      width: "1270px",
    },
  },
  breadcrumb: {
    padding: "8px 15px",
    marginBottom: "20px",
    listStyle: "none",
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
    "&:active": {
      color: "#777",
    },
  },
  breadcrumbFirstItem: {
    display: "inline-block",
  },
  breadcrumbItem: {
    display: "inline-block",
    "&:before": {
      padding: "0 5px",
      color: "#ccc",
      content: "'/'",
    },
  },
  header: {
    marginTop: "25px",
    marginBottom: "25px",
    borderBottom: "1px solid #eee",
    textAlign: "center",
  },
  innerPanel: {
    padding: "10px",
  },
})

type Props = {
  /** the object that contains auth data from current state */
  auth: Object,
  /** Material-UI styling */
  classes: Object,
}

/**
 * Personalized component that displays the user's login information (ID, email, name, provider)
 */

export const MyDsc = (props: Props) => {
  const {
    auth: {
      user: { data },
      provider,
    },
    classes,
  } = props

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item xs={12}>
        <ol className={classes.breadcrumb}>
          <li className={classes.breadcrumbFirstItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={classes.breadcrumbItem}>My DSC</li>
        </ol>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.header}>
          <h2>My DSC</h2>
        </div>
      </Grid>
      <Grid item xs={8}>
        <PanelWrapper title="Personal Information">
          <div className={classes.innerPanel}>
            {data.id && <h3>Id: {data.id}</h3>}
            {data.attributes.email && <h3>Email: {data.attributes.email}</h3>}
            {data.attributes.name && <h3>Name: {data.attributes.name}</h3>}
            <h3>Provider: {provider}</h3>
          </div>
        </PanelWrapper>
      </Grid>
    </Grid>
  )
}

const mapStateToProps: MapStateToProps<*, *, *> = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(withStyles(styles)(MyDsc))
