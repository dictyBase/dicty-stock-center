import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
  /** External link URL */
  url: string
  /** Title of link */
  title: string
}

const ExternalLinkIcon = ({ url, title }: Props) => (
  <a href={url} title={title}>
    <FontAwesomeIcon icon="external-link-alt" size="sm" />
  </a>
)

export default ExternalLinkIcon
