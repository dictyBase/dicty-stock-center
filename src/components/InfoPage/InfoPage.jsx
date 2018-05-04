// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import Skeleton from "react-loading-skeleton"
import InfoPageView from "./InfoPageView"
import { fetchInfoPage } from "actions/page"
import { Flex, Box } from "rebass"
import { NAMESPACE } from "constants/dsctypes"

type Props = {
  /** Checks if data is currently being fetched */
  isFetching: boolean,
  /** the Page object taken from the current state  */
  page: Object,
  /** React Router's match object */
  match: Object,
  /** Action creator that fetches data from API */
  fetchInfoPage: Function
}

/**
 * Fetches the data for the desired info page
 */

class InfoPage extends Component<Props> {
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

    if (!isFetching && page.content) {
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
