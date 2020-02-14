import React from "react"
import { useQuery } from "@apollo/react-hooks"
import InlineEditor from "components/InlineEditor"
import PanelLoader from "./PanelLoader"
import { GET_CONTENT_BY_SLUG } from "queries/queries"

const slugName = "dsc-intro"

/**
 * Intro fetches and displays the Intro page content.
 */

const Intro = () => {
  const { loading, error, data } = useQuery(GET_CONTENT_BY_SLUG, {
    variables: {
      slug: slugName,
    },
  })

  if (loading) {
    return <PanelLoader skeletonCount={5} />
  }

  if (error) {
    return <div>got an error</div>
  }

  return <InlineEditor data={data.contentBySlug} />
}

export default Intro
