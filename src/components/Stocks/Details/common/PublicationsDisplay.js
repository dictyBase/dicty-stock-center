// @flow
import React from "react"
import LinkTag from "components/Stocks/Details/common/LinkTag"

type Props = {
  publications: Array<{
    id: string,
  }>,
}

const PublicationsDisplay = ({ publications }: Props) =>
  publications.map<any>(item => (
    <LinkTag key={item.id} item={item.id} route="publication" />
  ))

export default PublicationsDisplay
