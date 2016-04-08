import React, { Component, PropTypes } from 'react'
import FormCustomer from './FormCustomer'
import FormPayer from './FormPayer'
import FormControl from './FormControl'
import { reduxForm } from 'redux-form'
import { submitForm } from 'actions/order-form'
import validate from 'forms/validate/order-form'
import 'styles/core.scss'

export const fields = [ 'firstName', 'lastName', 'org', 'group', 'address',
    'address2', 'city', 'state', 'zip', 'country', 'phone', 'email',
    'shipAccount', 'shipAccountNum', 'comments', 'payerFirstName',
    'payerLastName', 'payerEmail', 'payerOrg', 'payerGroup', 'payerAddress', 'payerAddress2',
    'payerCity', 'payerState', 'payerZip', 'payerCountry', 'payerPhone', 'payMethod', 'poNum'
]

class OrderForm extends Component {
    displayName = 'dsc order form';

    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        resetForm: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired
    }

    render() {
        const { handleSubmit, resetForm, submitting } = this.props
        const {
            fields: { firstName, lastName, email, org, group, address, address2, city,
                state, zip, country, phone, shipAccount, shipAccountNum, comments,
                payerFirstName, payerLastName, payerEmail, payerOrg, payerGroup, payerAddress,
                payerAddress2, payerCity, payerState, payerZip, payerCountry, payerPhone,
                payMethod, poNum
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
                            <FormCustomer
                                firstName={ firstName }
                                lastName={ lastName }
                                email={ email }
                                org={ org }
                                group={ group }
                                address={ address }
                                address2={ address2 }
                                city={ city }
                                state={ state }
                                zip={ zip }
                                country={ country }
                                phone={ phone }
                                shipAccount={ shipAccount }
                                shipAccountNum={ shipAccountNum }
                                comments={ comments }
                            />
                        </div>
                        <div className="col-md-6">
                            <FormPayer
                                firstName={ payerFirstName }
                                lastName={ payerLastName }
                                email={ payerEmail }
                                org={ payerOrg }
                                group={ payerGroup }
                                address={ payerAddress }
                                address2={ payerAddress2 }
                                city={ payerCity }
                                state={ payerState }
                                zip={ payerZip }
                                country={ payerCountry }
                                phone={ payerPhone }
                                payMethod={ payMethod }
                                poNum={ poNum }
                            />
                        </div>
                    </div>
                    <hr />
                    <FormControl resetForm={ resetForm } submitting={ submitting }/>
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
