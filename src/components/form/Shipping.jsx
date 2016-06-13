import React, { Component, PropTypes } from 'react'
import User from './User'
import ShippingMethod from './ShippingMethod'
import ShippingAdditional from './ShippingAdditional'
import SubmitButton from './SubmitButton'
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

    render() {
        const { handleSubmit, submitting, error } = this.props
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
                            {
                                error &&
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="alert alert-danger">
                                            <i className="fa fa-exclamation-circle"></i>
                                            <strong> Error! </strong> { error }
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="row">
                                <div className="col-md-offset-4 col-md-8">
                                    <SubmitButton name={ 'Continue ' }
                                        submitting={ submitting }
                                        icon = { 'fa fa-arrow-circle-right' }
                                    />
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
