import React, { Component, PropTypes } from 'react'
import Panel from 'dicty-react-components/src/Panel'
import PanelHeader from 'dicty-react-components/src/PanelHeader'
import PanelTitle from 'dicty-react-components/src/PanelTitle'
import PanelBody from 'dicty-react-components/src/PanelBody'
import ShippingInfo from './ShippingInfo'
import 'styles/core.scss'

export default class ShippingMethod extends Component {
    displayName = 'shipping method';

    static propTypes = {
        shipAccount: PropTypes.object.isRequired,
        shipAccountNum: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired
    }

    render() {
        const { title, shipAccount, shipAccountNum } = this.props
        const panelStyle = { border: '1px solid #D2D7D3' }
        const headerStyle = {
            backgroundColor: '#4B77BE',
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
                    <ShippingInfo
                        shipAccount = { shipAccount }
                        shipAccountNum = { shipAccountNum }
                    />
                </PanelBody>
            </Panel>
        )
    }
}
