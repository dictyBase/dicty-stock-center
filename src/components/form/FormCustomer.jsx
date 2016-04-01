import React, { Component, PropTypes } from 'react'
import Panel from 'dicty-react-components/src/Panel'
import PanelHeader from 'dicty-react-components/src/PanelHeader'
import PanelTitle from 'dicty-react-components/src/PanelTitle'
import PanelBody from 'dicty-react-components/src/PanelBody'
import FormPersonalInfo from './FormPersonalInfo'
import FormAddress from './FormAddress'
import FormContactInfo from './FormContactInfo'
import FormShippingInfo from './FormShippingInfo'
import FormComments from './FormComments'

export default class FormCustomer extends Component {
    displayName = 'component to input customer info into order-form';

    static propTypes = {
        firstName: PropTypes.object.isRequired,
        lastName: PropTypes.object.isRequired,
        org: PropTypes.object.isRequired,
        group: PropTypes.object.isRequired,
        address: PropTypes.object.isRequired,
        city: PropTypes.object.isRequired,
        state: PropTypes.object.isRequired,
        zip: PropTypes.object.isRequired,
        country: PropTypes.object.isRequired,
        phone: PropTypes.object.isRequired,
        email: PropTypes.object.isRequired,
        shipAccount: PropTypes.object.isRequired,
        shipAccountNum: PropTypes.object.isRequired,
        comments: PropTypes.object.isRequired
    }

    render() {
        const { firstName, lastName, org, group, address, address2, city, state,
            zip, country, phone, email, shipAccount, shipAccountNum, comments
        } = this.props
        return (
            <Panel>
                <PanelHeader>
                   <PanelTitle>Shipping Information</PanelTitle>
                </PanelHeader>
                <PanelBody>
                    <FormPersonalInfo
                        firstName={ firstName }
                        lastName={ lastName }
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
                    <FormContactInfo phone={ phone } email={ email } />
                    <FormShippingInfo
                        shipAccount={ shipAccount }
                        shipAccountNum={ shipAccountNum }
                    />
                    <FormComments comments={ comments } />
                </PanelBody>
            </Panel>
        )
    }
}
