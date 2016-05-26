import React, { Component, PropTypes } from 'react'
import 'styles/core.scss'

export default class PaymentAlert extends Component {
    displayName = 'payment information'

    static propTypes = {
        orderInfoLink: PropTypes.string.isRequired
    }

    static defaultProps = {
        orderInfoLink: 'http://dictybase.org/StockCenter/OrderInfo.html'
    }

    render() {
        return (
            <div>
                <div className="alert alert-info">
                    <p><strong>Credit Card: </strong>
                        Secure payment when billed
                    </p>
                    <p><strong>Wire Transfer: </strong>
                        Northwestern bank information will be emailed
                    </p>
                    <p><strong>PO: </strong>
                        Add PO number if available or send ASAP to dictybase@northwestern.edu
                    </p>
                </div>
                <div className="alert alert-info">
                    <p>For full payment information please click&nbsp;
                        <a href={ this.props.orderInfoLink } target="_blank">here</a>
                    </p>
                </div>
            </div>
        )
    }
}
