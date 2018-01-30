import React, { Component } from 'react'
import { connect } from 'react-redux'
import InlineEditor3 from '../editor/InlineEditor3'
import { PanelBlue } from 'styles'

class OtherMaterials extends Component {
    displayName = 'other DSC materials'
    render() {
        const intro = {
            "entityMap": {},
            "blocks": [
                {
                    "key": "6g2ah",
                    "text": "Other DSC Materials",
                    "type": "header-four",
                    "depth": 0
                },
                {
                    "key": "dbdai",
                    "text": "12 Antibodies",
                    "type": "header-five",
                    "depth": 0,
                    "inlineStyleRanges": [
                        { "offset": 0, "length": 2, "style": "BOLD" }
                    ]
                },
                {
                    "key": "apqi8",
                    "text": "1 cDNA library",
                    "type": "header-five",
                    "depth": 0,
                    "inlineStyleRanges": [
                        { "offset": 0, "length": 1, "style": "BOLD" }
                    ]
                },
                {
                    "key": "22v9v",
                    "text": "1 Genomic library",
                    "type": "header-five",
                    "depth": 0,
                    "inlineStyleRanges": [
                        { "offset": 0, "length": 1, "style": "BOLD" }
                    ]
                }
            ]
        }

        return (
            <PanelBlue>
                <InlineEditor3
                auth={ this.props.auth }
                rawContent={ intro }/>
            </PanelBlue>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(OtherMaterials)
