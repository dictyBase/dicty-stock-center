import React from "react"
import { Helmet } from "react-helmet"
import Grid from "@material-ui/core/Grid"
import Bowser from "bowser"
import Availability from "./Availability"
import OtherMaterials from "./OtherMaterials"
import Slideshow from "./Slideshow"
import EditablePanel from "./EditablePanel"
import BrowserWarning from "./BrowserWarning"
import HomepageColumn from "./HomepageColumn"
import LinkList from "./LinkList"
import StandardOperatingProcedures from "./StandardOperatingProcedures"
import { useAuthStore } from "components/authentication/AuthStore"
import {
  downloadLinks,
  infoLinks,
  materialsLinks,
  miscLinks,
} from "constants/linkLists"
import useStyles from "./homeStyles"

const metaDesc =
  "The Dicty Stock Center is a rapidly growing central repository for Dictyostelium discoideum strains and those of related species, plasmids, commonly used food bacteria, and other materials such as antibodies."

/**
 * Homepage is the main homepage component for DSC.
 */

const Homepage = () => {
  const classes = useStyles()
  const [{ isAuthenticated, user }] = useAuthStore()
  const fullName = `${user.first_name} ${user.last_name}`

  const browser = Bowser.getParser(window.navigator.userAgent)
  let unsupportedBrowser = false

  if (
    browser.getBrowser().name === "Internet Explorer" &&
    // @ts-ignore
    browser.getBrowser().version <= "10.0"
  ) {
    unsupportedBrowser = true
  }
  return (
    <div className={classes.container}>
      <Helmet>
        <title>Dicty Stock Center</title>
        <meta name="description" content={metaDesc} />
      </Helmet>
      {isAuthenticated && (
        <span>
          <h3>Hello, {`${fullName}!`}</h3>
        </span>
      )}
      {unsupportedBrowser && <BrowserWarning />}
      <Grid container justify="space-between" spacing={3}>
        <Grid item className={classes.header}>
          <h1>Welcome to Dicty Stock Center (DSC)</h1>
        </Grid>
        <Grid item xs={12} className={classes.intro}>
          <EditablePanel slug="dsc-intro" skeletonCount={5} />
        </Grid>
        <HomepageColumn
          components={[
            <EditablePanel slug="dsc-about" skeletonCount={10} />,
            <LinkList list={miscLinks} bgColor="blue" />,
          ]}
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

export default Homepage
