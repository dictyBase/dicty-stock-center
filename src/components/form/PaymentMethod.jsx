import React, { Component, PropTypes } from 'react'
import Panel from 'dicty-react-components/src/Panel'
import PanelHeader from 'dicty-react-components/src/PanelHeader'
import PanelTitle from 'dicty-react-components/src/PanelTitle'
import PanelBody from 'dicty-react-components/src/PanelBody'
import PaymentInfo from './PaymentInfo'
import 'styles/core.scss'

export default class PaymentMethod extends Component {
    displayName = 'payment method';

    static propTypes = {
        payMethod: PropTypes.object.isRequired,
        poNum: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired
    }

    render() {
        const { payMethod, poNum, title } = this.props
        const panelStyle = { border: '1px solid #D2D7D3' }
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
            <Panel style={ panelStyle }>
                <PanelHeader style={ headerStyle }>
                   <PanelTitle style={ titleStyle }>{ title }</PanelTitle>
                </PanelHeader>
                <PanelBody>
                    <PaymentInfo payMethod={ payMethod } poNum={ poNum }/>
                </PanelBody>
            </Panel>
        )
    }
}
