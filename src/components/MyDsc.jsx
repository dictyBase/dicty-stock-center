// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import { Panel, PanelBody } from "dicty-components-panel"
import { Link } from "react-router-dom"
import { Flex, Box } from "rebass"
import { Container, DictyHeader, Breadcrumb } from "styles"
import FontAwesome from "react-fontawesome"
import type { MapStateToProps } from "react-redux"

type Props = {
  user: Object,
  provider: string,
}

export class MyDsc extends Component<Props> {
  displayName = "user profile"
  render() {
    const { auth } = this.props
    return (
      <Container>
        <Flex wrap justify="center">
          <Box w={1}>
            <Breadcrumb>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>My DSC</li>
            </Breadcrumb>
          </Box>
          <Box w={1}>
            <DictyHeader>
              <h2>My DSC</h2>
            </DictyHeader>
          </Box>
          <Box w={3 / 4}>
            <Panel collapse>
              <PanelBody>
                <h1>
                  <FontAwesome name="user" /> Personal Information
                </h1>
                <hr />
                {auth.user.id && <h3>Id: {auth.user.id}</h3>}
                {auth.user.email && <h3>Email: {auth.user.email}</h3>}
                <h3>Provider: {auth.provider}</h3>
              </PanelBody>
            </Panel>
          </Box>
        </Flex>
      </Container>
    )
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(MyDsc)
