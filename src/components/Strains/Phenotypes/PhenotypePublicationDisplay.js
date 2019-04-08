// @flow
import React, { Fragment } from "react"

type Props = {
  /** Publication data */
  data: Array<{
    authors: Array<{
      last_name: string,
    }>,
    pub_date: string,
    title: string,
    journal: string,
    volume: string,
    pages: string,
    doi: string,
  }>,
}

/**
 * PhenotypePublicationDisplay handles the display of the phenotype reference table cell.
 */

const PhenotypePublicationDisplay = (props: Props) => {
  const { data } = props

  return (
    <Fragment>
      {data.map((item, index) => {
        const lastNames = item.authors.map(item => item.last_name)
        return (
          <Fragment key={index}>
            <strong>
              {lastNames.join(", ")} ({item.pub_date.slice(0, 4)})
            </strong>{" "}
            '{item.title}' <em>{item.journal}</em> {item.volume}:{item.pages}
          </Fragment>
        )
      })}
    </Fragment>
  )
}

export default PhenotypePublicationDisplay
