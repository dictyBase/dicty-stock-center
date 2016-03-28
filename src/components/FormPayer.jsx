import React, { Component, PropTypes } from 'react'
import Panel from 'components/dicty-react-components/src/Panel'
import PanelHeader from 'components/dicty-react-components/src/PanelHeader'
import PanelTitle from 'components/dicty-react-components/src/PanelTitle'
import PanelBody from 'components/dicty-react-components/src/PanelBody'
import FormPersonalInfo from 'components/FormPersonalInfo'
import FormAddress from 'components/FormAddress'
import FormContactInfo from 'components/FormContactInfo'

export default class FormPayerInfo extends Component {
    displayName = 'component to input payer info into order-form';

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
        email: PropTypes.object.isRequired
    }

    render() {
        const { firstName, lastName, org, group, address, address2, city, state,
            zip, country, phone, email } = this.props
        return (
            <Panel>
                <PanelHeader>
                    <PanelTitle>DSC Payment Information</PanelTitle>
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
                </PanelBody>
            </Panel>
        )
    }
}
