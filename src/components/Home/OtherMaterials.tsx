import React from "react"
import { useQuery } from "@apollo/react-hooks"
import InlineEditor from "components/EditablePages/InlineEditor"
import PanelLoader from "./PanelLoader"
import { GET_CONTENT_BY_SLUG } from "graphql/queries"
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
    return <PanelLoader skeletonCount={6} />
  }

  if (error) {
    return (
      <div className={classes.panelBlue}>
        Error fetching other materials information
      </div>
    )
  }

  return (
    <div className={classes.panelBlue}>
      <InlineEditor data={data.contentBySlug} />
    </div>
  )
}

export default OtherMaterials
