// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import Skeleton from "react-loading-skeleton"
import InlineEditor from "components/InlineEditor"
import { fetchInfoPage } from "actions/page"
import { Flex, Box } from "rebass"

type Props = {
  /** the Auth object taken from the current state */
  auth: Object,
  /** Action creator that fetches data from API */
  fetchInfoPage: Function,
  /** the Page object taken from the current state */
  page: Object,
  /** Checks if data is currently being fetched */
  isFetching: boolean,
}

/**
 * Fetches and displays the Intro page content
 */

export class Intro extends Component<Props> {
  // set defaultprops to prevent console warnings
  static defaultProps = {
    page: {
      data: {
        attributes: {},
      },
    },
  }
  componentDidMount() {
    this.props.fetchInfoPage("dsc-intro")
  }
  render() {
    const { isFetching, page } = this.props

    if (!isFetching && page.data.attributes.content) {
      return <InlineEditor auth={this.props.auth} page={this.props.page} />
    }
    return (
      <Flex justify="center">
        <Box w={"98%"}>
          <Skeleton count={5} />
          <br />
          <br />
        </Box>
      </Flex>
    )
  }
}

const mapStateToProps = state => {
  const slugName = "dsc-intro"
  return {
    auth: state.auth,
    isFetching: state.page.isFetching,
    page: state.page[slugName],
  }
}

export default connect(mapStateToProps, { fetchInfoPage })(Intro)
