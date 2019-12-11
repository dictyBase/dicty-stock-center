// @flow
import React from "react"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import Grid from "@material-ui/core/Grid"
import bowser from "bowser"
import Availability from "./Availability"
import OtherMaterials from "./OtherMaterials"
import Slideshow from "./Slideshow"
import Intro from "./Intro"
import About from "./About"
import BrowserWarning from "./BrowserWarning"
import HomepageColumn from "./HomepageColumn"
import LinkList from "./LinkList"
import StandardOperatingProcedures from "./StandardOperatingProcedures"
import { AuthenticatedUser } from "utils/apiClasses"
import {
  downloadLinks,
  infoLinks,
  materialsLinks,
  miscLinks,
} from "constants/linkLists"
import useStyles from "./homeStyles"

type Props = {
  /** the User object from the current state */
  user: Object,
  /** the user's first and last names, taken from the AuthenticatedUser class */
  fullName: string,
}

/**
 * Homepage is the main homepage component for DSC.
 */

const Homepage = ({ fullName, user }: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
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
      <Grid container justify="space-between" spacing={3}>
        <Grid item>
          <h1 className={classes.header}>
            Welcome to Dicty Stock Center (DSC)
          </h1>
        </Grid>
        <Grid item xs={12}>
          <Intro />
        </Grid>
        <HomepageColumn
          components={[<About />, <LinkList list={miscLinks} bgColor="blue" />]}
        />
        <HomepageColumn
          components={[
            <LinkList list={infoLinks} bgColor="blue" />,
            <Availability />,
            <OtherMaterials />,
            <StandardOperatingProcedures />,
          ]}
        />
        <HomepageColumn
          components={[
            <Slideshow />,
            <LinkList list={materialsLinks} bgColor="gray" />,
            <LinkList list={downloadLinks} bgColor="gray" />,
          ]}
        />
      </Grid>
    </div>
  )
}

const mapStateToProps = state => {
  if (state.auth.user) {
    const userData = new AuthenticatedUser(state.auth.user)
    return {
      user: state.auth.user,
      fullName: userData.getFullName(),
    }
  }
  return {}
}

export { Homepage }
export default connect<*, *, *, *, *, *>(mapStateToProps)(Homepage)
