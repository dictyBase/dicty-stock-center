import React, { Component } from "react"
import { connect } from "react-redux"
import Skeleton from "react-loading-skeleton"
import InfoPageView from "./InfoPageView"
import { fetchInfoPage } from "actions/page"
import { Flex, Box } from "rebass"
import { NAMESPACE } from "constants/index"

class InfoPage extends Component {
  // set defaultprops to prevent console warnings
  static defaultProps = {
    page: {
      data: {
        attributes: {}
      }
    }
  }
  componentDidMount() {
    const { match, fetchInfoPage } = this.props
    const slugName = `${NAMESPACE}-${match.params.name}`
    fetchInfoPage(slugName)
  }
  render() {
    const { isFetching, page } = this.props

    if (!isFetching && page.data.attributes.content) {
      return <InfoPageView page={page} match={this.props.match} />
    }
    return (
      <Flex justify="center">
        <Box w={"80%"}>
          <h1>
            <Skeleton />
          </h1>
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

const mapStateToProps = (state, ownProps) => {
  const slugName = `${NAMESPACE}-${ownProps.match.params.name}`
  return {
    isFetching: state.page.isFetching,
    page: state.page[slugName]
  }
}

export default connect(mapStateToProps, { fetchInfoPage })(InfoPage)
