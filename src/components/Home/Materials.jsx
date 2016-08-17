import React, { Component } from 'react'
import LinkList from '../LinkList'
import 'styles/custom.scss'

export default class Materials extends Component {
    displayName = 'links to stock catalogs'
    render() {
        const materials = [
            {name: 'Strain Catalog', to: '', routerAware: true},
            {name: 'Plasmid Catalog', to: '', routerAware: true},
            {name: 'Bacterial Strains', to: '', routerAware: true},
            {name: 'Other Materials', to: '', routerAware: true}
        ]
        return (
            <div className="panel-dsc panel-gray">
                <LinkList list={ materials }/>
            </div>
        )
    }
}

