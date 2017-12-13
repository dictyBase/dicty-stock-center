import React, { Component } from 'react'
import { Panel, PanelBody } from 'dicty-components-panel'
import { Link } from 'react-router-dom'
import { Flex, Box } from 'rebass'
import { Container, DictyHeader, Breadcrumb } from 'styles'
import FontAwesome from 'react-fontawesome'

export default class MyDsc extends Component {
    displayName = 'user profile';
    render() {
        const { user, provider } = this.props.auth
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

