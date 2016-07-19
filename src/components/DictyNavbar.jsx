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
        const { items } = this.props
        return (
            <Navbar navStyle={ {marginTop: '5px'} }>
                <NavbarHeader href="/" name="Dicty Stock Center" />
                <NavbarItems>
                    {
                        items.map((item, index) => {
                            return (
                                <NavbarDropdown key={ index } name={ item.name }>
                                    <DropdownMenu menuItems={ item.links } />
                                </NavbarDropdown>
                            )
                        })
                    }
                </NavbarItems>
            </Navbar>
        )
    }
}

