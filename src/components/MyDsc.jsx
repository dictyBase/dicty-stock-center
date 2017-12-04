import React, { Component } from 'react'
import { Panel, PanelBody } from 'dicty-components-panel'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'rebass'
import { Container, DictyHeader, Breadcrumb } from 'styles'
import FontAwesome from 'react-fontawesome'

// double-check proper center alignment

export default class MyDsc extends Component {
    displayName = 'user profile';
    render() {
        const { user, provider } = this.props.auth
        return (
            <Container>
                <Flex justify="center">
                    <Box w={ 1 }>
                        <Breadcrumb>
                          <li><Link to="/">Home</Link></li>
                          <li className="active">My DSC</li>
                        </Breadcrumb>
                    </Box>
                    <Box>
                        <DictyHeader>
                            <h1>My DSC</h1>
                        </DictyHeader>
                    </Box>
                    <Box w={ 1 }>
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

