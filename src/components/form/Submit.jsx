import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EditPanel from './EditPanel'
import Items from 'components/Items'
import { Panel, PanelBody } from 'dicty-components-panel'
import { Flex, Box } from 'rebass'
import FontAwesome from 'react-fontawesome'
import { DictyHeader } from 'styles'
import { PrimaryButton } from 'styles/buttons'

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
                <Box w={ ['85%', '60%'] }>
                    <DictyHeader>
                        <h2>Review Your Order</h2>
                        <p>
                            { ' ' }
                            Please review your order and click "Complete Your
                            Order" button to place your order
                        </p>
                    </DictyHeader>
                </Box>
                <Box w={ ['85%', 3 / 4] }>
                    <Flex wrap justify="center">
                        <Box w={ [1, 1, 1, '45%'] } mr={ 1 }>
                            <Panel collapse>
                                <PanelBody>
                                    <EditPanel
                                        user={ consumer }
                                        edit={ editShipping }
                                        title={ ' Ship to:' }
                                        icon={ 'truck' }
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
                                        icon={ 'credit-card-alt' }
                                        payment={ payment }
                                    />
                                </PanelBody>
                            </Panel>
                        </Box>
                    </Flex>
                    <hr />
                    <Flex wrap justify="center">
                    <Box w={ 1 } mr={ 1 }>
                        <Panel collapse>
                            <PanelBody>
                                <h4>
                                    <FontAwesome name="shopping-cart" /> Items
                                </h4>
                                <Items items={ addedItems } />
                            </PanelBody>
                        </Panel>
                    </Box>
                    <Box w={ 1 } mb={ 1 } mr={ 1 }>
                        <hr />
                        <PrimaryButton
                            type="button"
                            className={ `large block` }
                            onClick={ submitOrder }>
                            Complete Your Order{ ' ' }
                            <FontAwesome name="check-circle" />
                        </PrimaryButton>
                    </Box>
                    </Flex>
                </Box>
            </Flex>
        )
    }
}
