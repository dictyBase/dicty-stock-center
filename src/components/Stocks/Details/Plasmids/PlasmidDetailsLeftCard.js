// @flow
import React from "react"
import LeftCardDisplay from "components/Stocks/Details/common/LeftCardDisplay"
import GenesDisplay from "components/Stocks/Details/common/GenesDisplay"
import PublicationsDisplay from "components/Stocks/Details/common/PublicationsDisplay"
import { PlasmidDetailsProps } from "components/Stocks/Details/types/props"

const plasmidRowGenerator = (data, imageMap, publications, genes) => [
  {
    id: 0,
    title: "Name",
    content: data.name,
  },
  {
    id: 1,
    title: "Description",
    content: data.summary,
  },
  {
    id: 2,
    title: "GenBank Accession Number",
    content: data.genbank_accession,
  },
  {
    id: 3,
    title: "Depositor",
    content: data.depositor,
  },
  {
    id: 4,
    title: "Associated Genes",
    content: genes,
  },
  {
    id: 5,
    title: "Keywords",
    content: data.keywords,
  },
  {
    id: 6,
    title: "Reference(s)",
    content: publications,
  },
  {
    id: 7,
    title: "Image Map",
    content: imageMap,
  },
  {
    id: 8,
    title: "Sequence",
    content: data.sequence,
  },
]

const PlasmidDetailsLeftCard = ({ data }: PlasmidDetailsProps) => {
  const imageMap = data.image_map ? (
    <img src={data.image_map} alt={`Map for plasmid ${data.id}`} />
  ) : (
    ""
  )

  const rows = plasmidRowGenerator(
    data,
    imageMap,
    <PublicationsDisplay publications={data.publications} />,
    <GenesDisplay genes={data.genes} />,
  )

  return <LeftCardDisplay rows={rows} stockType="Plasmid" />
}

export default PlasmidDetailsLeftCard
