import React from "react"
import LinkTag from "common/components/LinkTag"

type Props = {
  /** List of gene IDs */
  genes: Array<string>
}

const GenesDisplay = ({ genes }: Props) => (
  <>
    {/* if not an array with an empty string, display links */}
    {genes[0] !== ""
      ? genes.map<any>((gene) => (
          <LinkTag key={gene} item={gene} route="gene" />
        ))
      : ""}
  </>
)

export default GenesDisplay
