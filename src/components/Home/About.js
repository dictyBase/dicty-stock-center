// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import InlineEditor from "components/InlineEditor"
import { fetchInfoPage } from "actions/page"

const slugName = "dsc-about"

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
 * About fetches and displays the About page content.
 */

class About extends Component<Props> {
  static defaultProps = {
    page: {
      data: {
        attributes: {},
      },
    },
  }
  componentDidMount() {
    this.props.fetchInfoPage(slugName)
  }
  render() {
    const { isFetching, page } = this.props

    if (!isFetching && page.data.attributes.content) {
      return (
        <InlineEditor
          auth={this.props.auth}
          page={this.props.page}
          slug={slugName}
        />
      )
    }
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <SkeletonTheme color="#D3D3D3	" highlightColor="#DCDCDC">
            <Skeleton count={7} />
            <br />
            <br />
            <Skeleton count={7} />
          </SkeletonTheme>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  isFetching: state.page.isFetching,
  page: state.page[slugName],
})

export { About }
export default connect<*, *, *, *, *, *>(mapStateToProps, { fetchInfoPage })(
  About,
)
