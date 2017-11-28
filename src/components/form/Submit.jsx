import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EditPanel from './EditPanel'
import Items from 'components/Items'
import { Panel, PanelBody } from 'dicty-components-panel'
import { Flex, Box } from 'rebass'
import { DictyHeader } from 'styles'

export default class Submit extends Component {
    displayName = 'submit order'

    static propTypes = {
        order: PropTypes.object,
        cart: PropTypes.object
    }

    render() {
        const { addedItems } = this.props.cart
        const { consumer, shipping, payer, payment } = this.props.order
        const {
            editShipping,
            editPayment,
            submitOrder
        } = this.props.orderActions
        return (
            <Flex wrap justify="center">
                <Box w={ '60%' }>
                    <DictyHeader>
                        <h2>Review Your Order</h2>
                        <p>
                            { ' ' }
                            Please review your order and click "Complete Your
                            Order" button to place your order
                        </p>
                    </DictyHeader>
                </Box>
                <Box w={ 3 / 4 }>
                    <Flex wrap>
                        <Box w={ [1, 1, 1, '45%'] } mr={ 1 }>
                            <Panel collapse>
                                <PanelBody>
                                    <EditPanel
                                        user={ consumer }
                                        edit={ editShipping }
                                        title={ ' Ship to:' }
                                        icon={ 'fa fa-truck' }
                                        shipping={ shipping }
                                    />
                                </PanelBody>
                            </Panel>
                        </Box>
                        <Box w={ [1, 1, 1, '45%'] } mr={ 1 }>
                            <Panel collapse>
                                <PanelBody>
                                    <EditPanel
                                        user={ payer }
                                        edit={ editPayment }
                                        title={ ' Payer:' }
                                        icon={ 'fa fa-credit-card-alt' }
                                        payment={ payment }
                                    />
                                </PanelBody>
                            </Panel>
                        </Box>
                    </Flex>
                    <hr />
                    <Box>
                        <Panel collapse>
                            <PanelBody>
                                <h4>
                                    <i className="fa fa-shopping-cart" /> Items
                                </h4>
                                <Items items={ addedItems } />
                            </PanelBody>
                        </Panel>
                    </Box>
                    <hr />
                    <Box>
                        <button
                            type="button"
                            className="btn btn-primary btn-lg btn-block"
                            onClick={ submitOrder }>
                            Complete Your Order{ ' ' }
                            <i className="fa fa-check-circle" />
                        </button>
                    </Box>
                </Box>
            </Flex>
        )
    }
}
