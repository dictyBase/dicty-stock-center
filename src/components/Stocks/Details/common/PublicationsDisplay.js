// @flow
import React from "react"
import Skeleton from "react-loading-skeleton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import usePublicationFetch from "../hooks/usePublicationFetch"
import useStyles from "components/Stocks/Details/styles"

type Props = {
  publications: Array<{
    /** DOI link for publication */
    doi: string,
    /** Pubmed ID, used for linking to our publication page */
    id: string,
  }>,
}
/**
 * PublicationsDisplay handles the appearance of the reference(s) section on
 * a stock details page.
 */

const PublicationsDisplay = ({ publications }: Props) => {
  const { data, loading, error } = usePublicationFetch(publications)
  const classes = useStyles()

  if (loading) {
    return <Skeleton />
  }

  if (error) {
    return "Error fetching publication data"
  }

  return data.map<any>(item => (
    <React.Fragment key={item.id}>
      {item.data}
      <a
        className={classes.link}
        href={`/publication/${item.id}`}
        title="Visit dictyBase publication page">
        <FontAwesomeIcon icon="external-link-alt" size="sm" />
      </a>
      <br />
    </React.Fragment>
  ))
}

export default PublicationsDisplay
