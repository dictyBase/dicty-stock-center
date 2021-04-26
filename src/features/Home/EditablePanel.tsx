import React from "react"
import InlineEditor from "features/EditablePages/InlineEditor"
import PanelLoader from "./PanelLoader"
import { useContentBySlugQuery } from "dicty-graphql-schema"

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

const EditablePanel = ({ slug, skeletonCount }: Props) => {
  const { loading, error, data } = useContentBySlugQuery({
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

  return <InlineEditor data={data?.contentBySlug} />
}

export default EditablePanel
