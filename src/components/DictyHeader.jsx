import React, { Component, PropTypes } from 'react'
import Header from 'dicty-react-components/src/Header'
import HeaderLogo from 'dicty-react-components/src/HeaderLogo'
import HeaderLinks, { HeaderLink } from 'dicty-react-components/src/HeaderLinks'
import SearchBox from 'dicty-react-components/src/SearchBox'
import { Grid, Cell } from 'radium-grid'
import 'styles/core.scss'

export default class DictyHeader extends Component {
    displayName = 'navigation bar';
    static propTypes = {
        logo: PropTypes.object,
        auth: PropTypes.object,
        authActions: PropTypes.object
    }
    render() {
        const { logo, auth, authActions } = this.props
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
                                <HeaderLinks>
                                    <HeaderLink
                                      router
                                      to="contact"
                                      name="Contact"
                                      iconClass="fa fa-envelope"
                                    />
                                    {
                                        auth.isAuthenticated ? (
                                            <HeaderLink
                                              onClick={ authActions.logoutUser }
                                              to="#"
                                              name="Logout"
                                              iconClass="fa fa-sign-out"
                                            />
                                        ) : (
                                            <HeaderLink
                                              router
                                              to="login"
                                              name="Login"
                                              iconClass="fa fa-sign-in"
                                            />
                                        )
                                    }
                                </HeaderLinks>
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

