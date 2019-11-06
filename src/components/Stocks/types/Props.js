type PhenotypeData = {
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
}

export type StrainDetailsProps = {
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
    phenotypes: Array<PhenotypeData>,
  },
}

export type PlasmidDetailsProps = {
  data: {
    id: string,
    name: string,
    summary: string,
    depositor: string,
    publications: Array<{
      id: string,
    }>,
    dbxrefs: Array<string>,
    genes: Array<string>,
    image_map: string,
    sequence: string,
    keywords: Array<string>,
    genbank_accession: string,
  },
}

export type PhenotypeProps = {
  /** Phenotype data */
  item: PhenotypeData,
}
