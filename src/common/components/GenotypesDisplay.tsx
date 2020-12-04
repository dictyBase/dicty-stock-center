import React from "react"
import useGenotypes from "common/hooks/useGenotypes"

type Props = {
  /** List of genotypes in string format */
  genotypes: string
}

const GenotypesDisplay = ({ genotypes }: Props) => {
  const { nonDrugResistances, drugResistances } = useGenotypes(genotypes)

  return (
    <span>
      <em>{nonDrugResistances.map((item: string) => item)}</em>
      {drugResistances.map((item: string) => item)}
    </span>
  )
}

export default GenotypesDisplay
