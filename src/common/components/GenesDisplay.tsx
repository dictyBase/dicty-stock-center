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

const GenesDisplay = ({ genes }: Props) => {
  if (genes.length === 0) {
    return <div />
  }

  return (
    <>
      {genes.map<any>((gene, index: number) => (
        <LinkTag key={index} item={gene.name} route="gene" />
      ))}
    </>
  )
}

export type { Gene }
export default GenesDisplay