// @flow
import React from "react"
import Grid from "@material-ui/core/Grid"
import StrainAvailabilityCard from "./StrainAvailabilityCard"
import MoreStrainsCard from "./MoreStrainsCard"

type Props = {
  data: {
    id: string,
    label: string,
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
      label: string,
    },
    depositor: string,
    plasmid: string,
    publications: Array<{
      id: string,
    }>,
    dbxrefs: Array<string>,
    genes: Array<string>,
    phenotypes: {
      phenotype: string,
      note: string,
      assay: string,
      environment: string,
      publication: {
        authors: Array<{
          last_name: string,
        }>,
        pub_date: string,
        title: string,
        journal: string,
        volume: string,
        pages: string,
        id: string,
      },
    },
  },
}

const StrainDetailsRightColumn = ({ data }: Props) => (
  <Grid item xs={2}>
    <StrainAvailabilityCard data={data} />
    <MoreStrainsCard genes={data.genes} />
  </Grid>
)

export default StrainDetailsRightColumn
