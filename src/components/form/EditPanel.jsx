// @flow
import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { InlineLink } from "styles"

type Props = {
  payment?: Object,
  shipping?: Object,
  title: string,
  icon?: string,
  user: Object,
  edit: Function,
}

export default class EditPanel extends Component<Props> {
  renderShippingMethod = () => {
    const { shipping } = this.props
    // display the shipping method with shipping account number(if available)
    if (shipping === null || shipping === undefined) {
      return
    } else {
      return (
        <div>
          <strong>Shipping method: </strong>
          {shipping.account}
          {shipping.accountNum && <span> (#{shipping.accountNum})</span>}
        </div>
      )
    }
  }

  renderPaymentMethod = () => {
    const { payment } = this.props
    // if pay method is PO and PO# is available, display that.
    // else, just display the pay method, credit card, wire transfer etc.
    if (payment === null || payment === undefined) {
      return
    } else {
      return (
        <div>
          <strong>Payment method: </strong>
          {payment.method}
          {payment.method === "PO" && payment.poNum && (
            <span> (#{payment.poNum})</span>
          )}
        </div>
      )
    }
  }

  render() {
    const { title, edit, icon, shipping, payment } = this.props
    const {
      firstName,
      lastName,
      address,
      address2,
      city,
      state,
      zip,
      country,
    } = this.props.user
    return (
      <div>
        <h4>
          {icon && <FontAwesomeIcon icon={icon} />}
          {title}
        </h4>
        <div>
          {firstName} {lastName}
        </div>
        <div>{address}</div>
        <div>{address2 && address2}</div>
        <div>
          {city} {state && state} {zip}
        </div>
        <div>{country}</div>
        {(shipping || payment) && <br />}
        {shipping && this.renderShippingMethod()}
        {payment && this.renderPaymentMethod()}
        <br />
        <div>
          <InlineLink onClick={edit}>
            <FontAwesomeIcon icon="pencil-alt" />
            {payment ? " Edit payment info" : " Edit shipping info"}
          </InlineLink>
        </div>
      </div>
    )
  }
}
