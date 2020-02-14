import React from "react"
import { useQuery } from "@apollo/react-hooks"
import Grid from "@material-ui/core/Grid"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import InlineEditor from "components/InlineEditor"
import { GET_CONTENT_BY_SLUG } from "queries/queries"
import useStyles from "./homeStyles"

const slugName = "dsc-other-materials"

/**
 * OtherMaterials fetches and displays the OtherMaterials page content.
 */

const OtherMaterials = () => {
  const classes = useStyles()
  const { loading, error, data } = useQuery(GET_CONTENT_BY_SLUG, {
    variables: {
      slug: slugName,
    },
  })

  if (loading) {
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

  if (error) {
    return <div className={classes.panelBlue}>got an error</div>
  }

  return (
    <div className={classes.panelBlue}>
      <InlineEditor data={data.contentBySlug} />
    </div>
  )
}

export default OtherMaterials
