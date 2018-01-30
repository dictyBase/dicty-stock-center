import React, { Component } from 'react'
import { PanelBlue } from 'styles'

export default class OtherMaterials extends Component {
    displayName = 'stock center availability'

    render() {
        return (
            <PanelBlue>
                <h4>Other DSC Materials</h4>
                <h5>12 Antibodies</h5>
                <h5>1 cDNA library</h5>
                <h5>1 Genomic library</h5>
            </PanelBlue>
        )
    }
}
