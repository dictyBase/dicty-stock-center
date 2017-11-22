import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Panel from 'dicty-react-components/src/Panel'
import PanelHeader from 'dicty-react-components/src/PanelHeader'
import PanelTitle from 'dicty-react-components/src/PanelTitle'
import PanelBody from 'dicty-react-components/src/PanelBody'
import Personal from './Personal'
import Organization from './Organization'
import Address from './Address'
import Contact from './Contact'
import 'styles/core.scss'

export default class User extends Component {
    displayName = 'user information';

    static propTypes = {
        firstName: PropTypes.object.isRequired,
        lastName: PropTypes.object.isRequired,
        email: PropTypes.object.isRequired,
        org: PropTypes.object.isRequired,
        group: PropTypes.object.isRequired,
        address: PropTypes.object.isRequired,
        address2: PropTypes.object.isRequired,
        city: PropTypes.object.isRequired,
        state: PropTypes.object.isRequired,
        zip: PropTypes.object.isRequired,
        country: PropTypes.object.isRequired,
        phone: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired
    }

    render() {
        const { firstName, lastName, email, org, group, address, address2, city,
                state, zip, country, phone, title } = this.props
        const panelStyle = { border: '1px solid #D2D7D3' }
        const headerStyle = {
            backgroundColor: '#337ab7',
            padding: '20px',
            borderColor: '#2e6da4'
        }
        const titleStyle = {
            color: '#ffffff',
            fontWeight: '200',
            fontSize: '20px'
        }
        return (
            <Panel style={ panelStyle }>
                <PanelHeader style={ headerStyle }>
                   <PanelTitle style={ titleStyle }>{ title }</PanelTitle>
                </PanelHeader>
                <PanelBody>
                    <Personal
                        firstName={ firstName }
                        lastName={ lastName }
                        email={ email }
                    />
                    <Organization
                        org={ org }
                        group={ group }
                    />
                    <Address
                        address={ address }
                        address2={ address2 }
                        city={ city }
                        state={ state }
                        zip={ zip }
                        country={ country }
                    />
                    <Contact phone={ phone } />
                </PanelBody>
            </Panel>
        )
    }
}
