import React, { Component } from 'react'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import InfoPageView from './InfoPageView'
import { fetchInfoPage } from 'actions/page'
import { Flex, Box } from 'rebass'

class InfoPage extends Component {
  displayName = 'toolbar with entity controls'
  componentDidMount() {
    const { match, fetchInfoPage } = this.props
    const slugName = 'dsc-' + match.params.name
    fetchInfoPage(slugName)
  }
  // componentWillReceiveProps(nextProps) {
  //   if (this.props.page.page !== nextProps.page.page) {
  //     const { match, fetchInfoPage } = nextProps
  //     fetchInfoPage(match.params.name)
  //   }
  // }
  render() {
    const { isFetching, content } = this.props
    if (!isFetching && content) {
      return <InfoPageView page={this.props.page} match={this.props.match} />
    }
    return (
      <Flex justify="center">
        <Box w={'80%'}>
          <h1>{this.props.title || <Skeleton />}</h1>
          <Skeleton count={10} />
          <br />
          <br />
          <Skeleton count={10} />
          <br />
          <br />
          <Skeleton count={10} />
        </Box>
      </Flex>
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.page.isFetching,
    content: state.page.content,
    page: state.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchInfoPage: id => {
      dispatch(fetchInfoPage(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage)
