import React, { Component, PropTypes } from 'react'
import Panel from 'dicty-react-components/src/Panel'
import PanelHeader from 'dicty-react-components/src/PanelHeader'
import PanelTitle from 'dicty-react-components/src/PanelTitle'
import PanelBody from 'dicty-react-components/src/PanelBody'
import FormPersonalInfo from './FormPersonalInfo'
import FormOrganization from './FormOrganization'
import FormAddress from './FormAddress'
import FormContactInfo from './FormContactInfo'
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
        return (
            <Panel>
                <PanelHeader>
                   <PanelTitle>{ title }</PanelTitle>
                </PanelHeader>
                <PanelBody>
                    <FormPersonalInfo
                        firstName={ firstName }
                        lastName={ lastName }
                        email={ email }
                    />
                    <FormOrganization
                        org={ org }
                        group={ group }
                    />
                    <FormAddress
                        address={ address }
                        address2={ address2 }
                        city={ city }
                        state={ state }
                        zip={ zip }
                        country={ country }
                    />
                    <FormContactInfo phone={ phone } />
                </PanelBody>
            </Panel>
        )
    }
}
