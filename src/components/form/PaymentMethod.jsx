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
        return (
            <Panel>
                <PanelHeader>
                   <PanelTitle>{ title }</PanelTitle>
                </PanelHeader>
                <PanelBody>
                    <PaymentInfo payMethod={ payMethod } poNum={ poNum }/>
                </PanelBody>
            </Panel>
        )
    }
}
