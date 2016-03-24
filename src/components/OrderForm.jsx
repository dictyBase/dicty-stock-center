import React, { Component, PropTypes } from 'react'
import Panel from 'components/dicty-react-components/src/Panel'
import PanelHeader from 'components/dicty-react-components/src/PanelHeader'
import PanelTitle from 'components/dicty-react-components/src/PanelTitle'
import PanelBody from 'components/dicty-react-components/src/PanelBody'
import FormPersonalInfo from 'components/FormPersonalInfo'
import FormAddress from 'components/FormAddress'
import FormContactInfo from 'components/FormContactInfo'
import FormShippingInfo from 'components/FormShippingInfo'
import FormComments from 'components/FormComments'
import { reduxForm } from 'redux-form'
import { submitForm } from 'actions/order-form'
import validate from 'forms/validate/order-form'
import 'styles/core.scss'

export const fields = [ 'firstName', 'lastName', 'org', 'group', 'address',
    'address2', 'city', 'state', 'zip', 'country', 'phone', 'email',
    'shipAccount', 'shipAccountNum', 'comments', 'shipFirstName',
    'shipLastName', 'shipOrg', 'shipGroup', 'shipAddress', 'shipAddress2',
    'shipCity', 'shipState', 'shipZip', 'shipCountry', 'shipPhone', 'shipEmail'
]

class OrderForm extends Component {
    displayName = 'dsc order form';

    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired
    }

    render() {
        const { handleSubmit, submitting } = this.props
        const {
            fields: { firstName, lastName, org, group, address, address2, city,
                state, zip, country, phone, email, shipAccount, shipAccountNum, comments,
                shipFirstName, shipLastName, shipOrg, shipGroup, shipAddress, shipAddress2,
                shipCity, shipState, shipZip, shipCountry, shipPhone, shipEmail
            }
        } = this.props
        return (
            <div className="container">
                <h2 className="page-header">
                  Please fill out the following information to complete your order
                </h2>
                <form onSubmit={ handleSubmit } className="form-horizontal">
                    <div className="row">
                        <div className="col-md-6">
                            <Panel>
                                <PanelHeader>
                                    <PanelTitle>Shipping</PanelTitle>
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
                        </div>
                        <div className="col-md-6">
                            <Panel>
                                <PanelHeader>
                                    <PanelTitle>Billing</PanelTitle>
                                </PanelHeader>
                                <PanelBody>
                                    <FormPersonalInfo
                                        firstName={ shipFirstName }
                                        lastName={ shipLastName }
                                        org={ shipOrg }
                                        group={ shipGroup }
                                    />
                                    <FormAddress
                                        address={ shipAddress }
                                        address2={ shipAddress2 }
                                        city={ shipCity }
                                        state={ shipState }
                                        zip={ shipZip }
                                        country={ shipCountry }
                                    />
                                    <FormContactInfo phone={ shipPhone } email={ shipEmail } />
                                    <div className="form-group">
                                        <div className="col-sm-offset-3 col-sm-9">
                                            <button type="submit"
                                                className="btn btn-primary btn-lg btn-block"
                                                disabled={ submitting }> Submit
                                            </button>
                                        </div>
                                    </div>
                                </PanelBody>
                            </Panel>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'dsc-order-form',
    fields,
    onSubmit: submitForm,
    validate
})(OrderForm)
