import React, { Component } from 'react'
import Navbar from 'dicty-react-components/src/Navbar'
import NavItem from 'dicty-react-components/src/NavItem'
import NavbarHeader from 'dicty-react-components/src/NavbarHeader'
import NavbarItems from 'dicty-react-components/src/NavbarItems'
import NavbarDropdown from 'dicty-react-components/src/NavbarDropdown'
import DropdownMenu from 'dicty-react-components/src/DropdownMenu'

export default class DictyNavbar extends Component {
    displayName = 'navigation bar';
    render() {
        const { genomes, tools, explore, research, community } = this.props
        const navStyle = {
            backgroundColor: '#1F4484',
            border: '1px solid #1F4484'
        }
        const itemStyle = {
            color: '#ffffff',
            fontSize: '18px',
            ':hover': {
                color: '#ffffff',
                backgroundColor: '#1b3c74'
            },
            ':focus': {
                color: '#ffffff',
                backgroundColor: '#1b3c74'
            }
        }
        const menuItemStyle = {
            ':hover': {
                color: '#ffffff',
                backgroundColor: '#1F4484'
            },
            ':focus': {
                color: '#ffffff',
                backgroundColor: '#1F4484'
            },
            '@media (max-width: 767px)': {
                color: '#ffffff',

                ':hover': {
                    color: '#2574A9'
                }
            }
        }
        return (
            <Navbar navStyle={ navStyle }>
                <NavbarHeader href="/" name="dictyBase"/>
                <NavbarItems>
                    <NavbarDropdown name="Genomes" itemStyle={ itemStyle }>
                        <DropdownMenu menuItems={ genomes }
                            menuItemStyle={ menuItemStyle }
                        />
                    </NavbarDropdown>
                    <NavbarDropdown name="Tools" itemStyle={ itemStyle }>
                        <DropdownMenu menuItems={ tools }
                            menuItemStyle={ menuItemStyle }
                        />
                    </NavbarDropdown>
                    <NavbarDropdown name="Explore" itemStyle={ itemStyle }>
                        <DropdownMenu menuItems={ explore }
                            menuItemStyle={ menuItemStyle }
                        />
                    </NavbarDropdown>
                    <NavbarDropdown name="Research" itemStyle={ itemStyle }>
                        <DropdownMenu menuItems={ research }
                            menuItemStyle={ menuItemStyle }
                        />
                    </NavbarDropdown>
                    <NavItem link="/" title="Dicty Stock Center" itemStyle={ itemStyle }/>
                    <NavbarDropdown name="Community" itemStyle={ itemStyle }>
                        <DropdownMenu menuItems={ community }
                            menuItemStyle={ menuItemStyle }
                        />
                    </NavbarDropdown>
                </NavbarItems>
            </Navbar>
        )
    }
}

