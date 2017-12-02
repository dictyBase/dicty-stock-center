import React, { Component } from 'react'
import { Panel, PanelBody } from 'dicty-components-panel'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'rebass'
import { Container } from 'styles'
import FontAwesome from 'react-fontawesome'

// double-check proper center alignment

export default class MyDsc extends Component {
    displayName = 'user profile';
    render() {
        const { user, provider } = this.props.auth
        return (
            <Container>
                <Flex>
                    <Box width={ 1 }>
                        <ol className="breadcrumb">
                          <li><Link to="/">Home</Link></li>
                          <li className="active">My DSC</li>
                        </ol>
                    </Box>
                    <Box>
                        <h1 className="page-header">My DSC</h1>
                    </Box>
                    <Box width={ 1 } align="center">
                        <Panel>
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

