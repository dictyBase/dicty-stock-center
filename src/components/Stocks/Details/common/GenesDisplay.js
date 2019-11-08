// @flow
import React from "react"
import LinkChip from "components/Stocks/Details/common/LinkChip"

type Props = {
  genes: Array<string>,
}

const GenesDisplay = ({ genes }: Props) =>
  // if not an array with an empty string, display links
  genes[0] !== ""
    ? genes.map<any>(gene => <LinkChip key={gene} item={gene} route="gene" />)
    : ""

export default GenesDisplay
