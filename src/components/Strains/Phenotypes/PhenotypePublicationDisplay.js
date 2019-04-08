// @flow
import React, { Fragment } from "react"

type Props = {
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

const PhenotypePublicationDisplay = (props: Props) => {
  const { data } = props

  return (
    <Fragment>
      {data.map((item, index) => {
        const lastNames = item.authors.map(item => item.last_name)
        return (
          <Fragment>
            <strong>
              {lastNames.join(", ")} ({item.pub_date.slice(0, 4)})
            </strong>
            &nbsp;'{item.title}'&nbsp;
            <em>{item.journal}</em>&nbsp;
            {item.volume}:{item.pages}
          </Fragment>
        )
      })}
    </Fragment>
  )
}

export default PhenotypePublicationDisplay
