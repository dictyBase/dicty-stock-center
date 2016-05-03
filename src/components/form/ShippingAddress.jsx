import React, { Component, PropTypes } from 'react'
import Panel from 'dicty-react-components/src/Panel'
import PanelHeader from 'dicty-react-components/src/PanelHeader'
import PanelTitle from 'dicty-react-components/src/PanelTitle'
import PanelBody from 'dicty-react-components/src/PanelBody'
import FormPersonalInfo from './FormPersonalInfo'
import FormOrganization from './FormOrganization'
import FormAddress from './FormAddress'
import FormContactInfo from './FormContactInfo'
import { reduxForm } from 'redux-form'
import { submitShippingAddress } from 'actions/order-form'
import syncValidateUser from 'forms/validate/order-form'
import 'styles/core.scss'

export const fields = [ 'firstName', 'lastName', 'email', 'org', 'group',
    'address', 'address2', 'city', 'state', 'zip', 'country', 'phone' ]

class ShippingAddress extends Component {
    displayName = 'shipping address';

    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        submitting: PropTypes.bool
    }

    renderSubmitButton = () => {
        const { submitting } = this.props
        return (
            <button type="submit"
                className="btn btn-primary btn-lg btn-block"
                disabled={ submitting }>
                { submitting ? <i className="fa fa-spinner fa-pulse fa-fw margin-bottom"></i>
                    : <i className="fa fa-truck" aria-hidden="true"></i>
                }
                &nbsp;Ship to this address
            </button>
        )
    }

    render() {
        const { handleSubmit } = this.props
        const {
            fields: { firstName, lastName, email, org, group, address, address2, city,
                state, zip, country, phone }
        } = this.props
        return (
            <div className="container">
                <h2 className="page-header">
                  Select a shipping address
                </h2>
                <form onSubmit={ handleSubmit } className="form-horizontal">
                    <div className="row">
                        <div className="col-md-6">
                            <Panel>
                                <PanelHeader>
                                   <PanelTitle>Shipping address</PanelTitle>
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
                                    <div className="row">
                                        <div className="col-sm-offset-3 col-sm-9">
                                            { this.renderSubmitButton() }
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
    form: 'shipping-address',
    fields,
    onSubmit: submitShippingAddress,
    validate: syncValidateUser
})(ShippingAddress)
