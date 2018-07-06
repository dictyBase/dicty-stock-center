// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
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
 * Fetches and displays the About page content
 */

export class About extends Component<Props> {
  // set defaultprops to prevent console warnings
  static defaultProps = {
    page: {
      data: {
        attributes: {},
      },
    },
  }
  componentDidMount() {
    this.props.fetchInfoPage("dsc-about")
  }
  render() {
    const { isFetching, page } = this.props

    if (!isFetching && page.data.attributes.content) {
      return <InlineEditor auth={this.props.auth} page={this.props.page} />
    }
    return (
      <Flex justify="center">
        <Box w={"95%"}>
          <SkeletonTheme color="#D3D3D3	" highlightColor="#DCDCDC">
            <Skeleton count={7} />
            <br />
            <br />
            <Skeleton count={7} />
          </SkeletonTheme>
        </Box>
      </Flex>
    )
  }
}

const mapStateToProps = state => {
  const slugName = "dsc-about"
  return {
    auth: state.auth,
    isFetching: state.page.isFetching,
    page: state.page[slugName],
  }
}

export default connect(
  mapStateToProps,
  { fetchInfoPage },
)(About)
