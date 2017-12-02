import React, { Component } from 'react'
import PropTypes from 'prop-types'
import User from './User'
import ShippingMethod from './ShippingMethod'
import ShippingAdditional from './ShippingAdditional'
import SubmitButton from './SubmitButton'
import { reduxForm } from 'redux-form'
import { submitForm } from 'actions/order/shipping'
import { syncValidateShipping } from 'forms/validate/order-form'
import { AlertBox } from 'styles'
import FontAwesome from 'react-fontawesome'

export const fields = [ 'firstName', 'lastName', 'email', 'org', 'group',
    'address', 'address2', 'city', 'state', 'zip', 'country', 'phone',
    'shipAccount', 'shipAccountNum', 'comments' ]

class EditShipping extends Component {
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
                        <h2 className="page-header">Edit shipping information</h2>
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
                                        <AlertBox>
                                            <FontAwesome name="exclamation-circle" />
                                            <strong> Error! </strong> { error } { error.message }
                                        </AlertBox>
                                    </div>
                                </div>
                            }
                            <div className="row">
                                <div className="col-md-offset-4 col-md-8">
                                    <SubmitButton name={ 'Continue ' }
                                        submitting={ submitting }
                                        icon = { 'arrow-circle-right' }
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

// pull state into forms initial values
const mapStateToProps = state => {
    const { order } = state
    const { firstName, lastName, email, org, group, address,
        address2, city, zip, country, phone
    } = order.consumer
    const { account, accountNum, comments } = order.shipping

    return {
        initialValues: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            org: org,
            group: group,
            address: address,
            address2: address2,
            city: city,
            state: order.consumer.state,
            zip: zip,
            country: country,
            phone: phone,
            shipAccount: account,
            shipAccountNum: accountNum,
            comments: comments
        }
    }
}

export default reduxForm({
    form: 'editShipping',
    fields,
    onSubmit: submitForm,
    validate: syncValidateShipping
},
mapStateToProps
)(EditShipping)
