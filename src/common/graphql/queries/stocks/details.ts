import { gql } from "@apollo/client"

const GET_PLASMID = gql`
  query Plasmid($id: ID!) {
    plasmid(id: $id) {
      id
      name
      summary
      depositor
      publications {
        id
        pub_date
        title
        journal
        volume
        pages
        authors {
          last_name
        }
      }
      dbxrefs
      genes {
        name
      }
      image_map
      sequence
      keywords
      genbank_accession
      in_stock
    }
  }
`

const GET_STRAIN = gql`
  query Strain($id: ID!) {
    strain(id: $id) {
      id
      label
      summary
      species
      parent {
        id
        label
      }
      depositor
      plasmid
      dbxrefs
      publications {
        id
        pub_date
        title
        journal
        volume
        pages
        authors {
          last_name
        }
      }
      genes {
        name
      }
      in_stock
      systematic_name
      genotypes
      mutagenesis_method
      genetic_modification
      names
      characteristics
      phenotypes {
        phenotype
        note
        assay
        environment
        publication {
          id
          pub_date
          title
          journal
          volume
          pages
          authors {
            last_name
          }
        }
      }
    }
  }
`

export { GET_STRAIN, GET_PLASMID }
