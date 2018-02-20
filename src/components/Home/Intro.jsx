// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import IntroInlineEditor from '../editor/IntroInlineEditor'
import Error from 'components/Error'
import { fetchInfoPage } from 'actions/page'
import { Flex, Box } from 'rebass'

type Props = {
  auth: Object,
  fetchInfoPage: Function,
  page: Object,
  isFetching: boolean,
  error: string
}

class Intro extends Component<Props> {
  displayName = 'homepage introduction'
  // set defaultprops to prevent console warnings
  static defaultProps = {
    page: {
      data: {
        attributes: {}
      }
    }
  }
  componentDidMount() {
    this.props.fetchInfoPage('dsc-intro')
  }
  render() {
    const { isFetching, page, error } = this.props

    if (!isFetching && page.data.attributes.content) {
      return <IntroInlineEditor auth={this.props.auth} page={this.props.page} />
    } else if (error) {
      return <Error fetchError={error} />
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
  const slugName = 'dsc-intro'
  return {
    auth: state.auth,
    isFetching: state.page.isFetching,
    page: state.page[slugName],
    error: state.page.error
  }
}

export default connect(mapStateToProps, { fetchInfoPage })(Intro)
