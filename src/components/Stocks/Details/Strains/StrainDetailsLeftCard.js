// @flow
import React from "react"
import { Link } from "react-router-dom"
import StrainDetailsLeftCardDisplay from "./StrainDetailsLeftCardDisplay"
import GenesDisplay from "components/Stocks/Details/common/GenesDisplay"
import PublicationsDisplay from "components/Stocks/Details/common/PublicationsDisplay"
import characterConverter from "components/Stocks/utils/characterConverter"
import { StrainDetailsProps } from "components/Stocks/Details/types/props"

const strainRowsGenerator = (data, parent, publications, genes) => [
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
    content: data.genotypes[0].replace(/,/g, ", "),
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

  return <StrainDetailsLeftCardDisplay rows={rows} species={data.species} />
}

export default StrainDetailsLeftCard
