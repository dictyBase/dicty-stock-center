import React, { Component, PropTypes } from 'react'
import Panel from 'dicty-react-components/src/Panel'
import PanelHeader from 'dicty-react-components/src/PanelHeader'
import PanelTitle from 'dicty-react-components/src/PanelTitle'
import PanelBody from 'dicty-react-components/src/PanelBody'
import Comments from './Comments'
import 'styles/core.scss'

export default class ShippingAdditional extends Component {
    displayName = 'shipping details';

    static propTypes = {
        comments: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired
    }

    render() {
        const { title, comments } = this.props
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
                    <Comments comments= { comments } rows = { '5' }
                        placeholder = { 'Please enter any comments or special instructions here' }>
                        Comments:
                    </Comments>
                </PanelBody>
            </Panel>
        )
    }
}
