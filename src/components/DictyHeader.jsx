import React, { Component, PropTypes } from 'react'
import Header from 'dicty-react-components/src/Header'
import HeaderLogo from 'dicty-react-components/src/HeaderLogo'
import HeaderLinks from 'dicty-react-components/src/HeaderLinks'
import SearchBox from 'dicty-react-components/src/SearchBox'
import { Grid, Cell } from 'radium-grid'
import 'styles/core.scss'

export default class DictyHeader extends Component {
    displayName = 'navigation bar';
    static propTypes = {
        logo: PropTypes.object,
        links: PropTypes.array
    }
    render() {
        const { links, logo } = this.props
        return (
            <Header>
                <Grid smallCellWidth="1" mediumCellWidth="1" verticalAlign="bottom">
                    <Cell smallAlign="center" mediumAlign="center">
                        <HeaderLogo
                          path= { logo.path }
                          href= { logo.href }
                        />
                    </Cell>
                    <Cell>
                        <Grid cellWidth="1">
                            <Cell align="right" smallAlign="center" mediumAlign="center">
                                <HeaderLinks links= { links } />
                            </Cell>
                            <Cell>
                                <SearchBox />
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
            </Header>
        )
    }
}

