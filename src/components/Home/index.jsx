// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { Flex, Box } from "rebass"
import bowser from "bowser"
import Links from "./Links"
import Info from "./Info"
import Availability from "./Availability"
import OtherMaterials from "./OtherMaterials"
import Downloads from "./Downloads"
import Slideshow from "./Slideshow"
import Materials from "./Materials"
import Intro from "./Intro"
import About from "./About"
import BrowserWarning from "./BrowserWarning"
import StandardOperatingProcedures from "./StandardOperatingProcedures"
import { HomepageHeader, Container } from "styles"
import type { MapStateToProps } from "react-redux"

type Props = {
  /** the Auth object from the current state */
  auth: Object
}

/**
 * This is the main homepage component for DSC
 */

class Home extends Component<Props> {
  renderGreeting = () => {
    const { user } = this.props.auth
    return (
      <span>
        <h3>Hello, {`${user.first_name} ${user.last_name}`}</h3>
      </span>
    )
  }
  render() {
    const { user } = this.props.auth
    return (
      <Container>
        {user && this.renderGreeting()}
        {bowser.msie && bowser.version <= 10 && <BrowserWarning />}
        <Flex wrap justify="space-between">
          <Box>
            <HomepageHeader>
              <h1>Welcome to Dicty Stock Center (DSC)</h1>
            </HomepageHeader>
          </Box>
          <Box w={1}>
            <Intro />
          </Box>
          <Box w={[1, "30%", "30%"]}>
            <Flex column>
              <Box>
                <About />
              </Box>
              <Box>
                <Links />
              </Box>
            </Flex>
          </Box>
          <Box w={[1, "30%", "30%"]}>
            <Flex column>
              <Box>
                <Info />
              </Box>
              <Box>
                <Availability />
              </Box>
              <Box>
                <OtherMaterials />
              </Box>
              <Box>
                <StandardOperatingProcedures />
              </Box>
            </Flex>
          </Box>
          <Box w={[1, "33%", "33%"]}>
            <Flex justify="center" column>
              <Box>
                <Slideshow />
              </Box>
              <Box>
                <Materials />
              </Box>
              <Box>
                <Downloads />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    )
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(Home)
