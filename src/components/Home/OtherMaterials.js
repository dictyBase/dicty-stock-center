// @flow
import React from "react"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import InlineEditor from "components/InlineEditor"
import { fetchInfoPage } from "actions/page"
import useStyles from "./homeStyles"

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
}

/**
 * OtherMaterials fetches and displays the Other Materials page content.
 */

const OtherMaterials = ({ auth, fetchInfoPage, isFetching, page }: Props) => {
  const classes = useStyles()

  React.useEffect(() => {
    fetchInfoPage(slugName)
  }, [fetchInfoPage])

  if (!isFetching && page.data.attributes.content) {
    return (
      <div className={classes.panelBlue}>
        <InlineEditor auth={auth} page={page} slug={slugName} />
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

OtherMaterials.defaultProps = {
  page: {
    data: {
      attributes: {},
    },
  },
}

const mapStateToProps = state => ({
  auth: state.auth,
  isFetching: state.page.isFetching,
  page: state.page[slugName],
})

export { OtherMaterials }
export default connect<*, *, *, *, *, *>(mapStateToProps, { fetchInfoPage })(
  OtherMaterials,
)
