// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel, PanelBody } from 'dicty-components-panel'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'rebass'
import { Container, DictyHeader, Breadcrumb } from 'styles'
import FontAwesome from 'react-fontawesome'
import type { MapStateToProps } from 'react-redux'

type Props = {
    user: Object,
    provider: string
}

export class MyDsc extends Component<Props> {
    displayName = 'user profile';
    render() {
        const { user, provider } = this.props
        return (
            <Container>
                <Flex wrap justify="center">
                    <Box w={ 1 }>
                        <Breadcrumb>
                          <li><Link to="/">Home</Link></li>
                          <li>My DSC</li>
                        </Breadcrumb>
                    </Box>
                    <Box w={ 1 }>
                        <DictyHeader>
                            <h2>My DSC</h2>
                        </DictyHeader>
                    </Box>
                    <Box w={ 3 / 4 }>
                        <Panel collapse>
                            <PanelBody>
                                <h1>
                                    <FontAwesome name="user" /> Personal Information
                                </h1>
                                <hr />
                                <h3>Name: { user.name }</h3>
                                <h3>Email: { user.email }</h3>
                                <h3>Provider: { provider }</h3>
                            </PanelBody>
                        </Panel>
                    </Box>
                </Flex>
            </Container>
        )
    }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => {
    return {
        user: state.auth.user,
        provider: state.auth.provider
    }
}

export default connect(mapStateToProps)(MyDsc)
