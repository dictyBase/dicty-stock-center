import React from "react"
import { useQuery } from "@apollo/react-hooks"
import PanelLoader from "./PanelLoader"
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
    return <PanelLoader skeletonCount={10} />
  }

  if (error) {
    return <div>got an error</div>
  }

  return <InlineEditor data={data.contentBySlug} />
}

export default About
