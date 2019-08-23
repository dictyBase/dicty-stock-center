// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import InlineEditor from "components/InlineEditor"
import { fetchInfoPage } from "actions/page"
import styles from "./homeStyles"

const slugName = "dsc-other-materials"

type Props = {
  /** the Auth object taken from the current state */
  auth: Object,
  /** Action creator that fetches data from API */
  fetchInfoPage: Function,
  /** the Page object taken from the current state */
  page: Object,
  /** Checks if data is currently being fetched */
  isFetching: boolean,
  /** Material-UI styling */
  classes: Object,
}

/**
 * OtherMaterials fetches and displays the Other Materials page content.
 */

export class OtherMaterials extends Component<Props> {
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
    const { isFetching, page, classes } = this.props

    if (!isFetching && page.data.attributes.content) {
      return (
        <div className={classes.panelBlue}>
          <InlineEditor
            auth={this.props.auth}
            page={this.props.page}
            slug={slugName}
          />
        </div>
      )
    }
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <SkeletonTheme color="#D3D3D3	" highlightColor="#DCDCDC">
            <Skeleton count={6} />
            &nbsp;
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

export default connect<*, *, *, *, *, *>(
  mapStateToProps,
  { fetchInfoPage },
)(withStyles(styles)(OtherMaterials))
