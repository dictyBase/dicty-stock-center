import React, { Component } from 'react'
import LinkList from '../LinkList'
import { PanelGray } from 'styles'

export default class Materials extends Component {
    displayName = 'links to stock catalogs'
    render() {
        const materials = [
            {name: 'Strain Catalog', to: '/strains', routerAware: true},
            {name: 'Plasmid Catalog', to: '/plasmids', routerAware: true},
            {name: 'Bacterial Strains', to: '', routerAware: true},
            {name: 'Other Materials', to: '', routerAware: true}
        ]
        return (
            <PanelGray>
                <LinkList list={ materials }/>
            </PanelGray>
        )
    }
}

