// @flow
import React from "react"
import StrainDetailsListHeader from "./StrainDetailsListHeader"
import ItemDisplay from "components/common/ItemDisplay"
import LeftDisplay from "components/common/LeftDisplay"
import RightDisplay from "components/common/RightDisplay"

type Props = {
  data: {
    id: string,
    descriptor: string,
    names: Array<string>,
    systematic_name: string,
    characteristics: Array<string>,
    summary: string,
    editable_summary?: string,
    genetic_modification: string,
    genotypes: Array<string>,
    mutagenesis_method: string,
    species: string,
    parent: {
      id: string,
    },
    depositor: string,
    plasmid: string,
    dbxrefs: Array<string>,
    genes: Array<string>,
    phenotypes: Object,
  },
}

/**
 * StrainDetailsList is the main component for displaying strain data.
 */

const StrainDetailsList = (props: Props) => {
  const { data } = props

  return (
    <div>
      <StrainDetailsListHeader
        title={`Strain Details for ${data.names.join(", ")}`}
      />
      <ItemDisplay>
        <LeftDisplay>Strain ID</LeftDisplay>
        <RightDisplay>{data.id}</RightDisplay>
        <LeftDisplay>Strain Descriptor</LeftDisplay>
        <RightDisplay>{data.descriptor}</RightDisplay>
      </ItemDisplay>
      <ItemDisplay>
        <LeftDisplay>Strain Names</LeftDisplay>
        <RightDisplay>{data.names.join(", ")}</RightDisplay>
        <LeftDisplay>Systematic Name</LeftDisplay>
        <RightDisplay>{data.systematic_name}</RightDisplay>
      </ItemDisplay>
      <ItemDisplay>
        <LeftDisplay>Strain Summary</LeftDisplay>
        <RightDisplay>{data.summary}</RightDisplay>
        <LeftDisplay>Strain Characteristics</LeftDisplay>
        <RightDisplay>{data.characteristics.join(", ")}</RightDisplay>
      </ItemDisplay>
      <ItemDisplay>
        <LeftDisplay>Genetic Modification</LeftDisplay>
        <RightDisplay>{data.genetic_modification}</RightDisplay>
        <LeftDisplay>Genotypes</LeftDisplay>
        <RightDisplay>{data.genotypes.join(", ")}</RightDisplay>
      </ItemDisplay>
      <ItemDisplay>
        <LeftDisplay>Mutagenesis Method</LeftDisplay>
        <RightDisplay>{data.mutagenesis_method}</RightDisplay>
        <LeftDisplay>Species</LeftDisplay>
        <RightDisplay>{data.species}</RightDisplay>
      </ItemDisplay>
      <ItemDisplay>
        <LeftDisplay>Parental Strain</LeftDisplay>
        <RightDisplay>{data.parent.id}</RightDisplay>
        <LeftDisplay>Depositor</LeftDisplay>
        <RightDisplay>{data.depositor}</RightDisplay>
      </ItemDisplay>
      <ItemDisplay>
        <LeftDisplay>Plasmid</LeftDisplay>
        <RightDisplay>{data.plasmid}</RightDisplay>
        <LeftDisplay>Reference(s)</LeftDisplay>
        <RightDisplay>{data.dbxrefs.join(", ")}</RightDisplay>
      </ItemDisplay>
      <ItemDisplay>
        <LeftDisplay>Associated Genes</LeftDisplay>
        <RightDisplay>{data.genes.join(", ")}</RightDisplay>
        <RightDisplay />
        <RightDisplay />
      </ItemDisplay>
    </div>
  )
}

export default StrainDetailsList
