import React, { Component, PropTypes } from 'react'
import EditPanel from './EditPanel'
import Items from 'components/Items'
import Panel from 'dicty-react-components/src/Panel'
import PanelBody from 'dicty-react-components/src/PanelBody'
import 'styles/core.scss'

export default class Submit extends Component {
    displayName = 'submit order'

    static propTypes = {
        order: PropTypes.object
    }

    render() {
        // mocking items. order items must be in the state
        const items = [
            {id: 'Strain-DBS0238283', name: 'A+/scrA/dis-GFP'},
            {id: 'Strain-DBS0236054', name: 'DDB_G0268328-'},
            {id: 'Plasmid-87', name: 'pACA.URA'}
        ]
        const { consumer, payer } = this.props.order
        const { editShipping, editPayment, submitOrder } = this.props.orderActions
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="page-header">Review Your Order</h2>
                        <p> Please review your order and click "Complete Order"
                            button to place your order
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <Panel>
                                    <PanelBody>
                                        <EditPanel user={ consumer }
                                            edit={ editShipping }
                                            title={ ' Ship to:' }
                                            icon ={ 'fa fa-truck' }
                                        />
                                    </PanelBody>
                                </Panel>
                            </div>
                            <div className="col-md-6">
                                <Panel>
                                    <PanelBody>
                                        <EditPanel user={ payer }
                                            edit={ editPayment }
                                            title={ ' Payer:' }
                                            icon = { 'fa fa-credit-card-alt' }
                                        />
                                    </PanelBody>
                                </Panel>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-xs-12">
                                <Panel>
                                    <PanelBody>
                                        <h4><i className="fa fa-shopping-cart"></i> Items</h4>
                                        <Items items={ items }/>
                                    </PanelBody>
                                </Panel>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <button type="button"
                            className="btn btn-primary btn-lg btn-block"
                            onClick={ submitOrder }>
                            Complete Order
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
