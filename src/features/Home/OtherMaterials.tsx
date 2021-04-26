import React from "react"
import { useQuery } from "@apollo/client"
import InlineEditor from "features/EditablePages/InlineEditor"
import PanelLoader from "./PanelLoader"
import { GET_CONTENT_BY_SLUG } from "common/graphql/queries/content"
import useStyles from "./homeStyles"

const slugName = "dsc-other-materials"

/**
 * OtherMaterials fetches and displays the OtherMaterials page content.
 */

const OtherMaterials = () => {
  const classes = useStyles({ panelBackground: "blue" })
  const { loading, error, data } = useQuery(GET_CONTENT_BY_SLUG, {
    variables: {
      slug: slugName,
    },
    fetchPolicy: "cache-and-network",
  })

  if (loading) {
    return <PanelLoader skeletonCount={6} />
  }

  if (error) {
    return (
      <div className={classes.panel}>
        Error fetching other materials information
      </div>
    )
  }

  return (
    <div className={classes.panel}>
      <InlineEditor data={data.contentBySlug} />
    </div>
  )
}

export default OtherMaterials
