import React from "react"
import Skeleton from "react-loading-skeleton"
import ExternalLinkIcon from "common/components/ExternalLinkIcon"
import useDOI from "common/hooks/useDOI"
import useStyles from "features/Stocks/Details/styles"

type Props = {
  publications: Array<{
    /** DOI link for publication */
    doi: string
    /** Pubmed ID, used for linking to our publication page */
    id: string
  }>
}
/**
 * PublicationsDisplay handles the appearance of the reference(s) section on
 * a stock details page.
 */

const PublicationsDisplay = ({ publications }: Props) => {
  const { data, loading, error } = useDOI(publications)
  const classes = useStyles()

  if (loading) {
    return <Skeleton />
  }

  if (error) {
    return <div className={classes.error}>Error fetching publication data</div>
  }

  return (
    <>
      {data.map<any>((item, index) => (
        <React.Fragment key={index}>
          {item.data}
          <ExternalLinkIcon
            url={`/publication/${item.id}`}
            title="Visit dictyBase publication page"
          />
          <br />
        </React.Fragment>
      ))}
    </>
  )
}

export default PublicationsDisplay
