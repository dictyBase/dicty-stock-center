import React from "react"
import Grid from "@material-ui/core/Grid"
import MyDscBreadcrumbs from "./MyDscBreadcrumbs"
import MyDscHeader from "./MyDscHeader"
import MyDscMainContent from "./MyDscMainContent"
import { useAuthStore } from "features/Authentication/AuthStore"
import useStyles from "./myDscStyles"

/**
 * Personalized component that displays the user's login information (ID, email, name, provider)
 */

const MyDscPage = () => {
  const [{ user, provider }] = useAuthStore()
  const classes = useStyles()

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item xs={12}>
        <MyDscHeader />
      </Grid>
      <Grid item xs={12}>
        <MyDscBreadcrumbs />
      </Grid>
      <Grid item xs={8}>
        <MyDscMainContent data={user} provider={provider} />
      </Grid>
    </Grid>
  )
}

export default MyDscPage
