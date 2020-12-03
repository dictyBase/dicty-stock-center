import React from "react"
import { Link } from "react-router-dom"
import StrainDetailsLeftCardDisplay from "./StrainDetailsLeftCardDisplay"
import GenesDisplay from "features/Stocks/Details/common/GenesDisplay"
import PublicationsDisplay from "common/components/PublicationsDisplay"
import {
  StrainDetails,
  StrainDetailsProps,
} from "features/Stocks/Details/types/props"

/**
 * genotypeFormatter converts a given genotype string into correctly formatted
 * italics with drug resistance at the end
 */
const genotypeFormatter = (genotype: string) => {
  const drugResistances = ["neoR", "bsR", "hygR", "tetR", "phleoR", "bleoR"]

  const splitGenotype = genotype.split(",")
  // get array of italicized genotypes
  const nonDrugResistance = splitGenotype
    .filter((item: string) => !drugResistances.includes(item))
    .map((item) => <em>{item},</em>)
  // get array of drug resistances then join them with commas except for last one
  const drugResistanceItems = splitGenotype.filter((item: string) =>
    drugResistances.includes(item),
  )
  const lastItem = drugResistanceItems[drugResistanceItems.length - 1]
  const lastItems = drugResistanceItems.length
    ? drugResistanceItems.join(",")
    : lastItem

  return [nonDrugResistance, lastItems]
}

const strainRowsGenerator = (
  data: StrainDetails,
  parent: any,
  publications: JSX.Element,
  genes: JSX.Element,
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
    content: genotypeFormatter(data.genotypes[0]),
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
  )

  return (
    <StrainDetailsLeftCardDisplay
      rows={rows}
      species={data.species}
      phenotypes={data.phenotypes}
    />
  )
}

export { genotypeFormatter }
export default StrainDetailsLeftCard
