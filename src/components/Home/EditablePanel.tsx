import React from "react"
import { useQuery } from "@apollo/react-hooks"
import InlineEditor from "components/InlineEditor"
import PanelLoader from "./PanelLoader"
import { GET_CONTENT_BY_SLUG } from "queries/queries"

type Props = {
  /** The slug name for the data to fetch */
  slug: string
  /** Number of skeleton lines to display during loading */
  skeletonCount: number
}

/**
 * EditablePanel fetches content from the GraphQL server and
 * displays it as editable content if the user is properly
 * authorized.
 */

const EditablePanel = ({ slug, skeletonCount }) => {
  const { loading, error, data } = useQuery(GET_CONTENT_BY_SLUG, {
    variables: {
      slug: slug,
    },
  })

  if (loading) {
    return <PanelLoader skeletonCount={skeletonCount} />
  }

  if (error) {
    return <div>Error fetching data</div>
  }

  return <InlineEditor data={data.contentBySlug} />
}

export default EditablePanel
