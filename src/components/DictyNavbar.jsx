import React, { Component } from 'react'
import Navbar from 'dicty-react-components/src/Navbar'
// import NavItem from 'dicty-react-components/src/NavItem'
import NavbarHeader from 'dicty-react-components/src/NavbarHeader'
import NavbarItems from 'dicty-react-components/src/NavbarItems'
import NavbarDropdown from 'dicty-react-components/src/NavbarDropdown'
import DropdownMenu from 'dicty-react-components/src/DropdownMenu'

export default class DictyNavbar extends Component {
    displayName = 'navigation bar';
    render() {
        const { genomes, tools, explore, research, community } = this.props
        return (
            <Navbar navStyle={ {marginTop: '5px'} }>
                <NavbarHeader href="/" name="Stock Center" />
                <NavbarItems>
                    <NavbarDropdown name="Genomes">
                        <DropdownMenu menuItems={ genomes } />
                    </NavbarDropdown>
                    <NavbarDropdown name="Tools">
                        <DropdownMenu menuItems={ tools } />
                    </NavbarDropdown>
                    <NavbarDropdown name="Explore">
                        <DropdownMenu menuItems={ explore } />
                    </NavbarDropdown>
                    <NavbarDropdown name="Research">
                        <DropdownMenu menuItems={ research } />
                    </NavbarDropdown>
                    <NavbarDropdown name="Stock Center">
                        <DropdownMenu menuItems={ community } />
                    </NavbarDropdown>
                    <NavbarDropdown name="Community">
                        <DropdownMenu menuItems={ community } />
                    </NavbarDropdown>
                </NavbarItems>
            </Navbar>
        )
    }
}

