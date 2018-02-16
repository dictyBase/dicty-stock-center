// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import InfoInlineEditor from '../editor/InfoInlineEditor'
import { fetchInfoPage } from 'actions/page'
import type { MapStateToProps } from 'react-redux'

type Props = {
  auth: Object
}

class Intro extends Component<Props> {
  displayName = 'homepage introduction'
  componentDidMount() {
    fetchInfoPage('dsc-intro')
  }
  render() {
    const intro = {
      entityMap: {},
      blocks: [
        {
          key: '8bu20',
          text:
            'The DSC is a rapidly growing central repository for Dictyostelium discoideum strains and those of related species, plasmids, commonly used food bacteria, and other materials such as antibodies.  The DSC opened at Columbia University in New York City in the fall of 2002. In 2009 the DSC moved to its current location at Northwestern University in Chicago, IL, USA. The DSC is supported by NIH/NIGMS. Since 2015, DSC materials incur a small fee.',
          type: 'unstyled'
        }
      ]
    }

    return <InfoInlineEditor auth={this.props.auth} rawContent={intro} />
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchInfoPage })(Intro)
