// @flow
import React from "react"

type Props = {
  entityKey: string,
  children: any,
  contentState: Function
}

/**
 * This is used in conjunction with the utils/findLinkEntities component to create link decorators for Draft.js content.
 */

const Link = (props: Props) => {
  const { entityKey, children, contentState } = props
  const { url } = contentState.getEntity(entityKey).getData()
  return <a href={url}>{children}</a>
}

export default Link
