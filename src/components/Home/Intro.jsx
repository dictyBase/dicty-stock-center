import React, { Component } from 'react'
import { connect } from 'react-redux'
import InlineEditor2 from '../editor/InlineEditor2'

class Intro extends Component {
    displayName = 'homepage introduction'
    render() {
        const intro = {
            "entityMap": {},
            "blocks": [
                {
                    "key": "8bu20",
                    "text":
                        "The DSC is a rapidly growing central repository for Dictyostelium discoideum strains and those of related species, plasmids, commonly used food bacteria, and other materials such as antibodies. The DSC is located at Northwestern University in Chicago, IL, USA.",
                    "type": "unstyled"
                }
            ]
        }

        return (
            <InlineEditor2
            auth={ this.props.auth }
            rawContent={ intro }/>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Intro)
