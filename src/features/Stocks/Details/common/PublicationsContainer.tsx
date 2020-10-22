import React from "react"
import Skeleton from "react-loading-skeleton"
import PublicationsDisplay from "./PublicationsDisplay"
import useDOI from "common/hooks/useDOI"
import useStyles from "features/Stocks/Details/styles"

type Props = {
  publications: Array<{
    /** DOI link for publication */
    doi: string
    /** Pubmed ID, used for linking to our publication page */
    id: string
  }>
  /** Used to identify if only top publication should be returned */
  single?: boolean
}
/**
 * PublicationsContainer handles the fetching of publication DOI data.
 */

const PublicationsContainer = ({ publications, single }: Props) => {
  const { data, loading, error } = useDOI(publications)
  const classes = useStyles()

  if (loading) {
    return <Skeleton />
  }

  if (error) {
    return <div className={classes.error}>Error fetching publication data</div>
  }

  if (single && data.length > 1) {
    return <PublicationsDisplay publication={data[0]} />
  }

  return (
    <>
      {data.map<any>((item, index) => (
        <PublicationsDisplay key={index} publication={item} />
      ))}
    </>
  )
}

export default PublicationsContainer
