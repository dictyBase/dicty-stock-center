import React, { Component, PropTypes } from 'react'
import InlineEditor from '../editor/InlineEditor'
import 'styles/custom.scss'

export default class About extends Component {
    displayName = 'front page about dsc'
    static propTypes = {
        auth: PropTypes.object.isRequired
    }
    render() {
        const about = {
            entityMap: {},
            blocks: [
                {
                    text: 'The collection is being built by requesting published strains ' +
                          'and plasmids. We encourage and also periodically remind investigators ' +
                          'to send new mutants, natural isolates, and plasmids, once they have ' +
                          'been published. We do regular quality checks, however, a large ' +
                          'component of the quality control program consists of feedback from  ' +
                          'the recipients of materials. DSC orders are placed through a shopping ' +
                          'cart system and are filled in the order they are received.',
                    type: 'unstyled'
                }
            ]
        }
        return (
          <InlineEditor
            auth={ this.props.auth }
            rawContent={ about }/>
        )
    }
}

