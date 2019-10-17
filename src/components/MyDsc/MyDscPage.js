// @flow
import React from "react"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import MyDscBreadcrumbs from "./MyDscBreadcrumbs"
import MyDscHeader from "./MyDscHeader"
import MyDscMainContent from "./MyDscMainContent"
import useStyles from "./myDscStyles"

type Props = {
  /** the object that contains auth data from current state */
  auth: Object,
}

/**
 * Personalized component that displays the user's login information (ID, email, name, provider)
 */

export const MyDscPage = (props: Props) => {
  const {
    auth: {
      user: { data },
      provider,
    },
  } = props
  const classes = useStyles()

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item xs={12}>
        <MyDscBreadcrumbs />
      </Grid>
      <Grid item xs={12}>
        <MyDscHeader />
      </Grid>
      <Grid item xs={8}>
        <MyDscMainContent data={data} provider={provider} />
      </Grid>
    </Grid>
  )
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect<*, *, *, *, *, *>(mapStateToProps)(MyDscPage)
