import React from "react"
import { Link } from "react-router-dom"
import StrainDetailsLeftCardDisplay from "./StrainDetailsLeftCardDisplay"
import GenesDisplay from "features/Stocks/Details/common/GenesDisplay"
import PublicationsDisplay from "features/Stocks/Details/common/PublicationsDisplay"
import characterConverter from "features/Stocks/utils/characterConverter"
import {
  StrainDetails,
  StrainDetailsProps,
} from "features/Stocks/Details/types/props"

const strainRowsGenerator = (
  data: StrainDetails,
  parent: any,
  publications: any,
  genes: any,
) => [
  {
    id: 0,
    title: "Strain Descriptor",
    content: characterConverter(data.label),
  },
  {
    id: 1,
    title: "Strain Names",
    content: data.names.join(", "),
  },
  {
    id: 2,
    title: "Strain Summary",
    content: data.summary,
  },
  {
    id: 3,
    title: "Systematic Name",
    content: data.systematic_name,
  },
  {
    id: 4,
    title: "Strain Characteristics",
    content: data.characteristics.join(", "),
  },
  {
    id: 5,
    title: "Genetic Modification",
    content: data.genetic_modification,
  },
  {
    id: 6,
    title: "Mutagenesis Method",
    content: data.mutagenesis_method,
  },
  {
    id: 7,
    title: "Parental Strain",
    content: parent,
  },
  {
    id: 8,
    title: "Plasmid",
    content: data.plasmid,
  },
  {
    id: 9,
    title: "Associated Genes",
    content: genes,
  },
  {
    id: 10,
    title: "Genotypes",
    content: data.genotypes,
  },
  {
    id: 11,
    title: "Depositor",
    content: data.depositor,
  },
  {
    id: 12,
    title: "Reference(s)",
    content: publications,
  },
]

const StrainDetailsLeftCard = ({ data }: StrainDetailsProps) => {
  const parent = data.parent ? (
    <Link to={`/strains/${data.parent.id}`}>{data.parent.label}</Link>
  ) : (
    "N/A"
  )

  const rows = strainRowsGenerator(
    data,
    parent,
    <PublicationsDisplay publications={data.publications} />,
    <GenesDisplay genes={data.genes} />,
  )

  return (
    <StrainDetailsLeftCardDisplay
      rows={rows}
      species={data.species}
      phenotypes={data.phenotypes}
    />
  )
}

export default StrainDetailsLeftCard
