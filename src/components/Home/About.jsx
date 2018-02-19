// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import AboutInlineEditor from '../editor/AboutInlineEditor'
import { fetchInfoPage } from 'actions/page'
import { Flex, Box } from 'rebass'

type Props = {
  auth: Object,
  fetchInfoPage: Function,
  page: Object,
  isFetching: boolean
}

class About extends Component<Props> {
  displayName = 'homepage about us component'
  // set defaultprops to prevent console warnings
  static defaultProps = {
    page: {
      data: {
        attributes: {}
      }
    }
  }
  componentDidMount() {
    this.props.fetchInfoPage('dsc-about')
  }
  render() {
    const { isFetching, page } = this.props

    if (!isFetching && page.data.attributes.content) {
      return <AboutInlineEditor auth={this.props.auth} page={this.props.page} />
    }
    return (
      <Flex justify="center">
        <Box w={'95%'}>
          <Skeleton count={5} />
          <br /><br />
          <Skeleton count={5} />
        </Box>
      </Flex>
    )
  }
}

const mapStateToProps = state => {
  const slugName = 'dsc-about'
  return {
    auth: state.auth,
    isFetching: state.page.isFetching,
    page: state.page[slugName]
  }
}

export default connect(mapStateToProps, { fetchInfoPage })(About)
