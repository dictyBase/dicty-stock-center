import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'
import Links from './Links'
import Info from './Info'
import Availability from './Availability'
import Downloads from './Downloads'
import Carousel from './Carousel'
import Materials from './Materials'
import Intro from './Intro'
import About from './About'
import { HomepageHeader } from 'styles'
import 'styles/custom.scss'

export default class Home extends Component {
    displayName = 'homepage component'
    static propTypes = {
        stockCenter: PropTypes.object,
        stockCenterActions: PropTypes.object
    }
    renderGreeting = () => {
        const { user } = this.props.auth
        return (
            <span>Hello, { user.name }</span>
        )
    }
    render() {
        const { user } = this.props.auth
        const { stockCenter, stockCenterActions } = this.props
        return (
            <div className="container">
                <Flex wrap>
                    <Box>{ user && this.renderGreeting() }</Box>
                    <Box>
                        <HomepageHeader>
                            <h1>Welcome to Dicty Stock Center (DSC)</h1>
                        </HomepageHeader>
                    </Box>
                    <Box>
                        <Intro />
                    </Box>
                </Flex>
                <Flex>
                    <Box width={ 1 / 3 } mr={ 3 }>
                        <Flex direction="column">
                            <Box>
                                <About auth={ this.props.auth } />
                            </Box>
                            <Box>
                                <Links />
                            </Box>
                        </Flex>
                    </Box>
                    <Box width={ 1 / 3 } mr={ 3 }>
                        <Flex direction="column">
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
                    <Box width={ 1 / 3 }>
                        <Flex justify="center" direction="column">
                            <Box>
                                <Carousel />
                            </Box>
                            <Box>
                                <Materials />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </div>
        )
    }
}
