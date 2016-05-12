import React, { Component, PropTypes } from 'react'
import User from './User'
import ShippingMethod from './ShippingMethod'
import ShippingAdditional from './ShippingAdditional'
import { reduxForm } from 'redux-form'
import { submitForm } from 'actions/order/shipping'
import { syncValidateShipping } from 'forms/validate/order-form'
import 'styles/core.scss'

export const fields = [ 'firstName', 'lastName', 'email', 'org', 'group',
    'address', 'address2', 'city', 'state', 'zip', 'country', 'phone',
    'shipAccount', 'shipAccountNum', 'comments' ]

class Shipping extends Component {
    displayName = 'shipping information';

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
                disabled={ submitting }>Continue&nbsp;
                { submitting ? <i className="fa fa-spinner fa-pulse fa-fw margin-bottom"></i>
                    : <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                }
            </button>
        )
    }

    render() {
        const { handleSubmit } = this.props
        const {
            fields: { firstName, lastName, email, org, group, address, address2, city,
                state, zip, country, phone, shipAccount, shipAccountNum, comments }
        } = this.props
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="page-header">Please enter shipping information</h2>
                    </div>
                </div>
                <div className="row">
                    <form onSubmit={ handleSubmit } className="form-horizontal">
                        <div className="col-md-6">
                            <User title = { 'Shipping Address' }
                                firstName = { firstName }
                                lastName = { lastName }
                                email = { email }
                                org ={ org }
                                group = { group }
                                address = { address }
                                address2 = { address2 }
                                city = { city }
                                state = { state }
                                zip = { zip }
                                country = { country }
                                phone = { phone }
                            />
                        </div>
                        <div className= "col-md-6">
                            <div className="row">
                                <div className="col-xs-12">
                                    <ShippingMethod title = { 'Shipping Method' }
                                        shipAccount = { shipAccount }
                                        shipAccountNum = { shipAccountNum }
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <ShippingAdditional title = { 'Additional Information' }
                                        comments = { comments }
                                    />
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-offset-4 col-md-8">
                                    { this.renderSubmitButton() }
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'shipping',
    fields,
    onSubmit: submitForm,
    validate: syncValidateShipping
})(Shipping)
