import React, { Component } from 'react'
import LinkList from '../LinkList'
import 'styles/custom.scss'

export default class Downloads extends Component {
    displayName = 'downloads links'
    render() {
        const downloads = [
            {name: 'Phenotype Ontology', to: '', routerAware: true},
            {name: 'Strain Characteristics', to: '', routerAware: true},
            {name: 'Mutagenesis Methods', to: '', routerAware: true},
            {name: 'Plasmid Keywords', to: '', routerAware: true}
        ]
        return (
            <div className="panel-dsc panel-blue">
                <LinkList list={ downloads } title="Download / View"/>
            </div>
        )
    }
}

