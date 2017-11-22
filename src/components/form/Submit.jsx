import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EditPanel from './EditPanel'
import Items from 'components/Items'
import { Panel, PanelBody } from 'dicty-components-panel'
import 'styles/core.scss'

export default class Submit extends Component {
    displayName = 'submit order'

    static propTypes = {
        order: PropTypes.object,
        cart: PropTypes.object
    }

    render() {
        const { addedItems } = this.props.cart
        const { consumer, shipping, payer, payment } = this.props.order
        const { editShipping, editPayment, submitOrder } = this.props.orderActions
        return (
            <div>
                <div className="row">
                    <div className="col-md-offset-1">
                        <h2 className="page-header">Review Your Order</h2>
                        <p> Please review your order and click "Complete Your Order"
                            button to place your order
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-1 col-md-5">
                        <Panel>
                            <PanelBody>
                                <EditPanel user={ consumer }
                                    edit={ editShipping }
                                    title={ ' Ship to:' }
                                    icon ={ 'fa fa-truck' }
                                    shipping={ shipping }
                                />
                            </PanelBody>
                        </Panel>
                    </div>
                    <div className="col-md-5">
                        <Panel>
                            <PanelBody>
                                <EditPanel user={ payer }
                                    edit={ editPayment }
                                    title={ ' Payer:' }
                                    icon = { 'fa fa-credit-card-alt' }
                                    payment = { payment }
                                />
                            </PanelBody>
                        </Panel>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-offset-1 col-md-10">
                        <Panel>
                            <PanelBody>
                                <h4><i className="fa fa-shopping-cart"></i> Items</h4>
                                <Items items={ addedItems }/>
                            </PanelBody>
                        </Panel>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <button type="button"
                            className="btn btn-primary btn-lg btn-block"
                            onClick={ submitOrder }>
                            Complete Your Order <i className="fa fa-check-circle"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
