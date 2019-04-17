// @flow
import React from "react"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import Grid from "@material-ui/core/Grid"
import bowser from "bowser"
import MiscLinks from "./MiscLinks"
import InfoLinks from "./InfoLinks"
import Availability from "./Availability"
import OtherMaterials from "./OtherMaterials"
import Downloads from "./Downloads"
import Slideshow from "./Slideshow"
import Materials from "./Materials"
import Intro from "./Intro"
import About from "./About"
import BrowserWarning from "./BrowserWarning"
import StandardOperatingProcedures from "./StandardOperatingProcedures"
import { AuthenticatedUser } from "utils/apiClasses"
import { HomepageHeader, Container } from "styles"
import type { MapStateToProps } from "react-redux"

type Props = {
  /** the User object from the current state */
  user: Object,
  /** the user's first and last names, taken from the AuthenticatedUser class */
  fullName: string,
}

/**
 * Homepage is the main homepage component for DSC.
 */

const Homepage = (props: Props) => {
  const { fullName, user } = props

  return (
    <Container>
      <Helmet>
        <title>Dicty Stock Center</title>
        <meta
          name="description"
          content="The Dicty Stock Center is a rapidly growing central repository for Dictyostelium discoideum strains and those of related species, plasmids, commonly used food bacteria, and other materials such as antibodies."
        />
      </Helmet>
      {user && (
        <span>
          <h3>Hello, {`${fullName}!`}</h3>
        </span>
      )}
      {bowser.msie && bowser.version <= 10 && <BrowserWarning />}
      <Grid container wrap="wrap" justify="space-between" spacing={24}>
        <Grid item>
          <HomepageHeader>
            <h1>Welcome to Dicty Stock Center (DSC)</h1>
          </HomepageHeader>
        </Grid>
        <Grid item xs={12}>
          <Intro />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container direction="column">
            <Grid item>
              <About />
            </Grid>
            <Grid item>
              <MiscLinks />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container direction="column">
            <Grid item>
              <InfoLinks />
            </Grid>
            <Grid item>
              <Availability />
            </Grid>
            <Grid item>
              <OtherMaterials />
            </Grid>
            <Grid item>
              <StandardOperatingProcedures />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container justify="center" direction="column">
            <Grid item>
              <Slideshow />
            </Grid>
            <Grid item>
              <Materials />
            </Grid>
            <Grid item>
              <Downloads />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

const mapStateToProps: MapStateToProps<*, *, *> = state => {
  if (state.auth.user) {
    const userData = new AuthenticatedUser(state.auth.user)
    return {
      user: state.auth.user,
      fullName: userData.getFullName(),
    }
  }
  return {}
}

export default connect(mapStateToProps)(Homepage)
