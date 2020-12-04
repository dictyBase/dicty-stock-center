import React from "react"
import useGenotypes from "common/hooks/useGenotypes"

// formatElements adds comma to each element except for the last one
const formatElements = (item: string, index: number) =>
  (index ? "," : "") + item

type Props = {
  /** List of genotypes in string format */
  genotypes: string
}

const GenotypesDisplay = ({ genotypes }: Props) => {
  const { nonDrugResistances, drugResistances } = useGenotypes(genotypes)

  return (
    <span>
      <em>
        {nonDrugResistances.map((item: string, index: number) =>
          drugResistances.length ? `${item},` : formatElements(item, index),
        )}
      </em>
      {drugResistances.map(formatElements)}
    </span>
  )
}

export default GenotypesDisplay
