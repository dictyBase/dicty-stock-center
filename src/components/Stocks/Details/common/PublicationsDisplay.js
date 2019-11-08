// @flow
import React from "react"
import LinkChip from "components/Stocks/Details/common/LinkChip"

type Props = {
  publications: Array<{}>,
}

const PublicationsDisplay = ({ publications }: Props) =>
  publications.map(item => (
    <LinkChip key={item.id} item={item.id} route="publication" />
  ))

export default PublicationsDisplay
