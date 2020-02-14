import React from "react"
import { useQuery } from "@apollo/react-hooks"
import Grid from "@material-ui/core/Grid"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import InlineEditor from "components/InlineEditor"
import { GET_CONTENT_BY_SLUG } from "queries/queries"

const slugName = "dsc-about"

/**
 * About fetches and displays the About page content.
 */

const About = () => {
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
            <Skeleton count={7} />
            <br />
            <br />
            <Skeleton count={7} />
          </SkeletonTheme>
        </Grid>
      </Grid>
    )
  }

  if (error) {
    return <div>got an error</div>
  }

  return <InlineEditor data={data.contentBySlug} />
}

export default About
