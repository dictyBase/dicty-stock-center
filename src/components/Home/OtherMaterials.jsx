// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import OtherMaterialsInlineEditor from '../editor/OtherMaterialsInlineEditor'
import { fetchInfoPage } from 'actions/page'
import { PanelBlue } from 'styles'
import type { MapStateToProps } from 'react-redux'

type Props = {
  auth: Object
}

class OtherMaterials extends Component<Props> {
  displayName = 'other DSC materials'
  componentDidMount() {
    this.props.fetchInfoPage('dsc-other-materials')
  }
  render() {
    const materials = {
      entityMap: {},
      blocks: [
        {
          key: '6g2ah',
          text: 'Other DSC Materials',
          type: 'header-four',
          depth: 0
        },
        {
          key: 'dbdai',
          text: '12 Antibodies',
          type: 'header-five',
          depth: 0,
          inlineStyleRanges: [{ offset: 0, length: 2, style: 'BOLD' }]
        },
        {
          key: 'apqi8',
          text: '1 cDNA library',
          type: 'header-five',
          depth: 0,
          inlineStyleRanges: [{ offset: 0, length: 1, style: 'BOLD' }]
        },
        {
          key: '22v9v',
          text: '1 Genomic library',
          type: 'header-five',
          depth: 0,
          inlineStyleRanges: [{ offset: 0, length: 1, style: 'BOLD' }]
        }
      ]
    }

    return (
      <PanelBlue>
        <OtherMaterialsInlineEditor
          auth={this.props.auth}
          rawContent={materials}
        />
      </PanelBlue>
    )
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchInfoPage })(OtherMaterials)
