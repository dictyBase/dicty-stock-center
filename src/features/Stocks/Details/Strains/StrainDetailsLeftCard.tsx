import React from "react"
import { Link } from "react-router-dom"
import StrainDetailsLeftCardDisplay from "./StrainDetailsLeftCardDisplay"
import GenesDisplay from "features/Stocks/Details/common/GenesDisplay"
import PublicationsDisplay from "common/components/PublicationsDisplay"
import GenotypesDisplay from "common/components/GenotypesDisplay"
import {
  StrainDetails,
  StrainDetailsProps,
} from "features/Stocks/Details/types/props"

const strainRowsGenerator = (
  data: StrainDetails,
  parent: string | JSX.Element,
  publications: JSX.Element,
  genes: JSX.Element,
  genotypes: JSX.Element,
) => [
  {
    id: 0,
    title: "Strain Descriptor",
    content: data.label,
  },
  {
    id: 1,
    title: "Strain Names",
    content: data.names.slice().sort().join(", "),
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
    content: data.characteristics.slice().sort().join(", "),
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
    content: genotypes,
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
    ""
  )

  const rows = strainRowsGenerator(
    data,
    parent,
    <PublicationsDisplay publications={data.publications} />,
    <GenesDisplay genes={data.genes} />,
    <GenotypesDisplay genotypes={data.genotypes[0]} />,
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
