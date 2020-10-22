import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
  publication: {
    /** Returned citation from DOI fetching */
    data: string
    /** Pubmed ID, used for linking to our publication page */
    id: string
  }
}
/**
 * PublicationsDisplay handles the appearance of the reference(s) section on
 * a stock details page.
 */

const PublicationsDisplay = ({ publication }: Props) => (
  <React.Fragment>
    {publication.data}
    <a
      href={`/publication/${publication.id}`}
      title="Visit dictyBase publication page">
      <FontAwesomeIcon icon="external-link-alt" size="sm" />
    </a>
    <br />
  </React.Fragment>
)

export default PublicationsDisplay
