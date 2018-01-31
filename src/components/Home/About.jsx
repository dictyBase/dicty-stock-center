import React, { Component } from 'react'
import { connect } from 'react-redux'
import AboutInlineEditor from 'components/editor/AboutInlineEditor'

class About extends Component {
    displayName = 'front page about DSC'

    render() {
        const about = {
            "entityMap": {},
            "blocks": [
                {
                    "key": "2fmbl",
                    "text":
                        "Strains are stored frozen in liquid nitrogen as axenic cultures, cells grown on bacterial lawn, or spores recovered from development on bacterial lawn. Storage is in three separate identical tanks, one of which is located in a different building. Plasmids are stored frozen at -80°C in duplicate freezers as transformed bacteria and often as DNA, stored at -20°C.\n",
                    "type": "unstyled",
                    "depth": 0
                },
                {
                    "key": "728fp",
                    "text":
                        "The collection is being built by requesting published strains and plasmids. We encourage and also periodically remind investigators to send new mutants, natural isolates, and plasmids, once they have been published. We do regular quality checks, however, a large component of the quality control program consists of feedback from the recipients of materials. DSC orders are placed through a shopping cart system and are filled in the order they are received.",
                    "type": "unstyled",
                    "depth": 0
                }
            ]
        }        
        
        return (
          <AboutInlineEditor
            auth={ this.props.auth }
            rawContent={ about }/>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(About)
