import React, { Component } from 'react'
import 'styles/custom.scss'

export default class Availability extends Component {
    displayName = 'stock center availability'
    render() {
        const availability = [
            {name: 'Strains', amount: 1927},
            {name: 'Plasmids', amount: 882},
            {name: 'Antibodies', amount: 12},
            {name: 'cDNA library', amount: 1},
            {name: 'Genomic library', amount: 1}
        ]
        return (
            <div className="panel-dsc panel-gray">
                <h4>Availability</h4>
                { availability.map((item, index) => {
                    return (
                        <h5 key={ index }>
                            <strong>{ item.amount }</strong> { item.name }
                        </h5>
                    )
                }) }
            </div>
        )
    }
}

