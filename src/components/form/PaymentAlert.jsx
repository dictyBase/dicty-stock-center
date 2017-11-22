import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'styles/core.scss'

export default class PaymentAlert extends Component {
    displayName = 'payment information'

    static propTypes = {
        paymentInfoLink: PropTypes.string.isRequired
    }

    static defaultProps = {
        paymentInfoLink: '/stockcenter/payments/information'
    }

    render() {
        return (
            <div>
                <div className="alert alert-info">
                    <p><strong>Credit Card: </strong>
                        Secure payment when billed.
                        Incurs a <strong>3.5% service fee.</strong>
                    </p>
                    <p><strong>Wire Transfer: </strong>
                        Northwestern bank information will be emailed
                    </p>
                    <p><strong>PO: </strong>
                        Add PO number if available or send ASAP to&nbsp;
                        <u><a href="mailto:dictystocks@northwestern.edu" target="_top">
                            dictystocks@northwestern.edu
                        </a></u>
                    </p>
                </div>
                <div className="alert alert-info">
                    <p>For full payment information please click&nbsp;
                        <u><a href={ this.props.paymentInfoLink } target="_blank">here</a></u>
                    </p>
                </div>
            </div>
        )
    }
}
