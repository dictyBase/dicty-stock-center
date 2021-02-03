import React from "react"
import LinkTag from "common/components/LinkTag"

type Gene = {
  /** Gene name */
  name: string
}

type Props = {
  /** List of gene IDs */
  genes: Gene[]
}

/**
 * GenesDisplay provides a list of genes displayed as link tags.
 */
const GenesDisplay = ({ genes }: Props) => {
  if (genes.length === 0) {
    return <div />
  }

  return (
    <React.Fragment>
      {genes.map<any>((gene, index: number) => (
        <LinkTag key={index} item={gene.name} route="gene" />
      ))}
    </React.Fragment>
  )
}

export type { Gene }
export default GenesDisplay
