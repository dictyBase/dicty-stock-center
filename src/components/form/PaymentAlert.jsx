// @flow
import React, { Component } from "react"
import { AlertInfo } from "styles"

type Props = {
  paymentInfoLink: string,
}

export default class PaymentAlert extends Component<Props> {
  static defaultProps = {
    paymentInfoLink: "/stockcenter/payments/information",
  }

  render() {
    return (
      <div>
        <AlertInfo>
          <p>
            <strong>Credit Card: </strong>
            Secure payment when billed. Incurs a{" "}
            <strong>3.5% service fee.</strong>
          </p>
          <p>
            <strong>Wire Transfer: </strong>
            Northwestern bank information will be emailed
          </p>
          <p>
            <strong>PO: </strong>
            Add PO number if available or send ASAP to&nbsp;
            <u>
              <a href="mailto:dictystocks@northwestern.edu" target="_top">
                dictystocks@northwestern.edu
              </a>
            </u>
          </p>
        </AlertInfo>
        <AlertInfo>
          <p>
            For full payment information please click&nbsp;
            <u>
              <a
                href={this.props.paymentInfoLink}
                target="_blank"
                rel="noopener noreferrer">
                here
              </a>
            </u>
          </p>
        </AlertInfo>
      </div>
    )
  }
}
