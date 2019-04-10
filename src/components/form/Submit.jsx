// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import EditPanel from "./EditPanel"
import Items from "components/Items"
import { editShipping } from "actions/order/shipping"
import { editPayment } from "actions/order/payment"
import { submitOrder } from "actions/order/submit"
import { Panel, PanelBody } from "dicty-components-panel"
import { Flex, Box } from "rebass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DictyHeader, PrimaryLargeButton } from "styles"

type Props = {
  order: Object,
  cart: Object,
  editShipping: Function,
  editPayment: Function,
  submitOrder: Function,
  addedItems: Array<Object>,
  consumer: Object,
  shipping: Object,
  payer: Object,
  payment: Object,
}

export class Submit extends Component<Props> {
  render() {
    const {
      addedItems,
      consumer,
      shipping,
      payer,
      payment,
      editShipping,
      editPayment,
      submitOrder,
    } = this.props
    return (
      <Flex wrap justify="center">
        <Box w={["85%", "60%"]}>
          <DictyHeader>
            <h2>Review Your Order</h2>
            <p>
              {" "}
              Please review your order and click "Complete Your Order" button to
              place your order
            </p>
          </DictyHeader>
        </Box>
        <Box w={["85%", 3 / 4]}>
          <Flex wrap justify="center">
            <Box w={[1, 1, 1, "45%"]} mr={1}>
              <Panel collapse>
                <PanelBody>
                  <EditPanel
                    user={consumer}
                    edit={editShipping}
                    title={" Ship to:"}
                    icon={"truck"}
                    shipping={shipping}
                  />
                </PanelBody>
              </Panel>
            </Box>
            <Box w={[1, 1, 1, "45%"]} mr={1}>
              <Panel collapse>
                <PanelBody>
                  <EditPanel
                    user={payer}
                    edit={editPayment}
                    title={" Payer:"}
                    icon={"credit-card-alt"}
                    payment={payment}
                  />
                </PanelBody>
              </Panel>
            </Box>
          </Flex>
          <hr />
          <Flex wrap justify="center">
            <Box w={1} mr={1}>
              <Panel collapse>
                <PanelBody>
                  <h4>
                    <FontAwesomeIcon icon="shopping-cart" /> Items
                  </h4>
                  <Items items={addedItems} />
                </PanelBody>
              </Panel>
            </Box>
            <Box w={1} mb={1} mr={1}>
              <hr />
              <PrimaryLargeButton type="button" onClick={submitOrder}>
                Complete Your Order <FontAwesomeIcon icon="check-circle" />
              </PrimaryLargeButton>
            </Box>
          </Flex>
        </Box>
      </Flex>
    )
  }
}

const mapStateToProps = state => ({
  addedItems: state.cart.addedItems,
  consumer: state.order.consumer,
  shipping: state.order.shipping,
  payer: state.order.payer,
  payment: state.order.payment,
})

const mapDispatchToProps = dispatch => ({
  editShipping: () => {
    dispatch(editShipping())
  },
  editPayment: () => {
    dispatch(editPayment())
  },
  submitOrder: () => {
    dispatch(submitOrder())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Submit)
