import React, { Component } from 'react'
import 'styles/core.scss'

export default class PaymentInfo extends Component {
    displayName = 'payment information';

    render() {
        return (
            <div>
              <h2 className="page-header">Please enter payment information</h2>
            </div>
        )
    }
}
