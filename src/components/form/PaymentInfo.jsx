import React, { Component, PropTypes } from 'react'
import Consumer from './Consumer'
import 'styles/core.scss'

export default class PaymentInfo extends Component {
    displayName = 'payment information'

    static propTypes = {
        order: PropTypes.object
    }

    render() {
        const { consumer } = this.props.order
        const { editShipping } = this.props.orderActions
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="page-header">Please enter payment information</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <Consumer consumer={ consumer } edit={ editShipping } />
                    </div>
                </div>
            </div>
        )
    }
}
