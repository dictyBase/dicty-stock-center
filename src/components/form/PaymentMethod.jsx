import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Panel,
    PanelHeader,
    PanelTitle,
    PanelBody
} from 'dicty-components-panel'
import PaymentInfo from './PaymentInfo'

export default class PaymentMethod extends Component {
    displayName = 'payment method'

    static propTypes = {
        payMethod: PropTypes.object.isRequired,
        poNum: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired
    }

    render() {
        const { payMethod, poNum, title } = this.props
        const panelStyle = {
            border: '1px solid #D2D7D3',
            height: '100%'
        }
        const headerStyle = {
            backgroundColor: '#337ab7',
            padding: '20px',
            borderColor: '#4B77BE'
        }
        const titleStyle = {
            color: '#ffffff',
            fontWeight: '200',
            fontSize: '20px'
        }
        return (
            <Panel collapse style={ panelStyle }>
                <PanelHeader style={ headerStyle }>
                    <PanelTitle style={ titleStyle }>{ title }</PanelTitle>
                </PanelHeader>
                <PanelBody>
                    <PaymentInfo payMethod={ payMethod } poNum={ poNum } />
                </PanelBody>
            </Panel>
        )
    }
}
