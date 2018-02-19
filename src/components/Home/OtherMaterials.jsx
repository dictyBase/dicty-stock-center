// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import OtherMaterialsInlineEditor from '../editor/OtherMaterialsInlineEditor'
import { fetchInfoPage } from 'actions/page'
import { Flex, Box } from 'rebass'
import { PanelBlue } from 'styles'

type Props = {
  auth: Object,
  fetchInfoPage: Function,
  page: Object,
  isFetching: boolean
}

class OtherMaterials extends Component<Props> {
  displayName = 'other DSC materials'
  // set defaultprops to prevent console warnings
  static defaultProps = {
    page: {
      data: {
        attributes: {}
      }
    }
  }
  componentDidMount() {
    this.props.fetchInfoPage('dsc-other-materials')
  }
  render() {
    const { isFetching, page } = this.props

    if (!isFetching && page.data.attributes.content) {
      return (
        <PanelBlue>
          <OtherMaterialsInlineEditor
            auth={this.props.auth}
            page={this.props.page}
          />
        </PanelBlue>
      )
    }
    return (
      <Flex justify="center">
        <Box w={'95%'}>
          <Skeleton count={5} />
        </Box>
      </Flex>
    )
  }
}

const mapStateToProps = state => {
  const slugName = 'dsc-other-materials'
  return {
    auth: state.auth,
    isFetching: state.page.isFetching,
    page: state.page[slugName]
  }
}

export default connect(mapStateToProps, { fetchInfoPage })(OtherMaterials)
