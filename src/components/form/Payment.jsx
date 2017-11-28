import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import { submitForm } from 'actions/order/payment'
import EditPanel from './EditPanel'
import User from './User'
import PaymentMethod from './PaymentMethod'
import SubmitButton from './SubmitButton'
import PaymentAlert from './PaymentAlert'
import { syncValidatePayment } from 'forms/validate/order-form'
import { Flex, Box } from 'rebass'
import { PanelGreen, DictyHeader } from 'styles'

export const fields = [
    'firstName',
    'lastName',
    'email',
    'org',
    'group',
    'address',
    'address2',
    'city',
    'state',
    'zip',
    'country',
    'phone',
    'payMethod',
    'poNum'
]

class Payment extends Component {
    displayName = 'payment information'

    static propTypes = {
        order: PropTypes.object,
        fields: PropTypes.object.isRequired,
        submitting: PropTypes.bool
    }

    render() {
        const { consumer } = this.props.order
        const { editShipping, sameAsShipping } = this.props.orderActions
        const {
            submitting,
            handleSubmit,
            error,
            fields: {
                firstName,
                lastName,
                email,
                org,
                group,
                address,
                address2,
                city,
                state,
                zip,
                country,
                phone,
                payMethod,
                poNum
            }
        } = this.props
        return (
            <Flex wrap justify="center">
                <Box w={ 2 / 3 }>
                    <DictyHeader>
                        <h2>Please enter payment information</h2>
                    </DictyHeader>
                </Box>
                <Box w={ 3 / 5 }>
                    <PanelGreen>
                        <EditPanel
                            user={ consumer }
                            edit={ editShipping }
                            title={ 'Ship to:' }
                        />
                    </PanelGreen>
                    <hr />
                    <button
                        type="button"
                        className="btn btn-success btn-xs"
                        onClick={ sameAsShipping }>
                        Same as shipping
                    </button>{ ' ' }
                    Click here if payer address is the same as shipping address
                    <form onSubmit={ handleSubmit } className="form-horizontal">
                        <Flex>
                            <Box w={ 1 / 2 } mr={ 2 }>
                                <User
                                    title={ 'Payer Address' }
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
                                />
                            </Box>
                            <Box w={ 1 / 2 }>
                                <Flex>
                                    <Box w={ 1 }>
                                        <PaymentMethod
                                            title={ 'Payment Method' }
                                            payMethod={ payMethod }
                                            poNum={ poNum }
                                        />
                                    </Box>
                                </Flex>
                                <hr />
                                <Flex>
                                    <Box w={ 1 }>
                                        <PaymentAlert />
                                    </Box>
                                </Flex>
                                <hr />
                                { error && (
                                    <Flex>
                                        <Box w={ 1 }>
                                            <div className="alert alert-danger">
                                                <i className="fa fa-exclamation-circle" />
                                                <strong> Error! </strong>{ ' ' }
                                                { error }
                                            </div>
                                        </Box>
                                    </Flex>
                                ) }
                                <Flex justify="flex-end">
                                    <Box w={ 2 / 3 }>
                                        <SubmitButton
                                            name={ 'Continue ' }
                                            submitting={ submitting }
                                            icon={ 'fa fa-arrow-circle-right' }
                                        />
                                        <small className="text-info">
                                            You can review this order before
                                            it's final.
                                        </small>
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex>
                    </form>
                </Box>
            </Flex>
        )
    }
}

// pull state into forms initial values,
// if user had already filled out the form
const mapStateToProps = state => {
    if (state.order.payer) {
        const { payer, payment } = state.order
        const {
            firstName,
            lastName,
            email,
            org,
            group,
            address,
            address2,
            city,
            zip,
            country,
            phone
        } = payer
        const { method, poNum } = payment

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
                state: payer.state,
                zip: zip,
                country: country,
                phone: phone,
                payMethod: method,
                poNum: poNum
            }
        }
    }
}

export default reduxForm(
    {
        form: 'payment',
        fields,
        onSubmit: submitForm,
        validate: syncValidatePayment
    },
    mapStateToProps
)(Payment)
