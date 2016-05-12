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
        return (
            <Panel>
                <PanelHeader>
                   <PanelTitle>{ title }</PanelTitle>
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
