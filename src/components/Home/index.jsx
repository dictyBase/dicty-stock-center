import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'
import Links from './Links'
import Info from './Info'
import Availability from './Availability'
import Downloads from './Downloads'
import Slideshow from './Slideshow'
import Materials from './Materials'
import Intro from './Intro'
import About from './About'
import StandardOperatingProcedures from './StandardOperatingProcedures'
import { HomepageHeader, Container } from 'styles'

export default class Home extends Component {
    displayName = 'homepage component'
    static propTypes = {
        stockCenter: PropTypes.object,
        stockCenterActions: PropTypes.object
    }
    renderGreeting = () => {
        const { user } = this.props.auth
        return (
            <span>
                <h3>Hello, { user.name }</h3>
            </span>
        )
    }
    render() {
        const { user } = this.props.auth
        const { stockCenter, stockCenterActions } = this.props
        return (
            <Container>
                { user && this.renderGreeting() }
                <Flex wrap justify="space-between">
                    <Box>
                        <HomepageHeader>
                            <h1>Welcome to Dicty Stock Center (DSC)</h1>
                        </HomepageHeader>
                    </Box>
                    <Box>
                        <Intro />
                    </Box>
                    <Box w={ [1, '30%', '30%'] }>
                        <Flex column>
                            <Box>
                                <About auth={ this.props.auth } />
                            </Box>
                            <Box>
                                <Links />
                            </Box>
                            <Box>
                                <StandardOperatingProcedures />
                            </Box>
                        </Flex>
                    </Box>
                    <Box w={ [1, '30%', '30%'] }>
                        <Flex column>
                            <Box>
                                <Info />
                            </Box>
                            <Box>
                                <Availability
                                    stockCenter={ stockCenter }
                                    stockCenterActions={ stockCenterActions }
                                />
                            </Box>
                            <Box>
                                <Downloads />
                            </Box>
                        </Flex>
                    </Box>
                    <Box w={ [1, '33%', '33%'] }>
                        <Flex justify="center" column>
                            <Box>
                                <Slideshow />
                            </Box>
                            <Box>
                                <Materials />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        )
    }
}
