import React, { Component } from 'react'
import 'styles/core.scss'

export default class OrderConfirmation extends Component {
    displayName = 'order confirmation'

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className="page-header">Success!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <div className="alert alert-success">
                            <h3>Thank you, your order has been submitted successfully!</h3>
                            <p>The PAYER will receive several emails through the NU Core
                                system to complete the payment.
                            </p>
                        </div>
                        <button type="button"
                            className="btn btn-primary btn-lg btn-block"
                            onClick={ '' }>
                            Stock Center Home
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
