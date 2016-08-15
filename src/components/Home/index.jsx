import React, { Component, PropTypes } from 'react'
import { Grid, Cell } from 'radium-grid'
import Links from './Links'
import Info from './Info'
import Availability from './Availability'
import Downloads from './Downloads'
import Carousel from './Carousel'
import Materials from './Materials'
import Intro from './Intro'
import About from './About'

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
                <Grid cellWidth="1">
                    <Cell>{ user && this.renderGreeting() }</Cell>
                    <Cell>
                        <h1 className="page-header">
                            Welcome to Dicty Stock Center (DSC)
                        </h1>
                    </Cell>
                    <Cell>
                        <Intro />
                    </Cell>
                </Grid>
                <Grid smallCellWidth="1">
                    <Cell>
                        <Grid cellWidth="1">
                            <Cell>
                                <About auth={ this.props.auth } />
                            </Cell>
                            <Cell>
                                <Links />
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell>
                        <Grid cellWidth="1">
                            <Cell>
                                <Info />
                            </Cell>
                            <Cell>
                                <Availability
                                  stockCenter={ stockCenter }
                                  stockCenterActions={ stockCenterActions }
                                  />
                            </Cell>
                            <Cell>
                                <Downloads />
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell>
                        <Grid cellWidth="1">
                            <Cell align="center">
                                <Carousel />
                            </Cell>
                            <Cell>
                                <Materials />
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
