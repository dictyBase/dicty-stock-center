import React, { Component } from 'react'
import LinkList from '../LinkList'
import { PanelGray } from 'styles'

export default class Materials extends Component {
    displayName = 'links to stock catalogs'
    render() {
        const procedures = [
            {name: 'Standard Operating Procedures', to: '#', routerAware: true}
        ]
        return (
            <PanelGray>
                <LinkList list={ procedures }/>
            </PanelGray>
        )
    }
}

