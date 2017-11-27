import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PanelGroup, Panel, PanelHeader, PanelTitle, PanelBody } from 'dicty-components-panel'
import ShippingInfo from './ShippingInfo'
import 'styles/core.scss'

// still need to pass in custom styles

const theme = {
    borderColor: '#D2D7D3',
    borderWidth: 1,
    headerBackgroundColor: '#337ab7',
    color: '#ffffff'
}

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
            <PanelGroup theme={ theme }>
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
            </PanelGroup>
        )
    }
}
