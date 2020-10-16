import { gql } from "@apollo/client"

// used in Availability component (homepage)
const GET_STOCK_TOTALS = gql`
  query StockList($cursor: Int!) {
    listPlasmids(input: { cursor: $cursor, limit: 30000 }) {
      totalCount
    }
    listStrains(input: { cursor: $cursor, limit: 30000 }) {
      totalCount
    }
  }
`

const GET_STRAIN_LIST = gql`
  query StrainList($cursor: Int!, $limit: Int!, $filter: String!) {
    listStrains(input: { cursor: $cursor, limit: $limit, filter: $filter }) {
      nextCursor
      strains {
        id
        label
        summary
        in_stock
      }
    }
  }
`

const GET_STRAIN_LIST_WITH_PHENOTYPE = gql`
  query ListStrainsWithPhenotype(
    $cursor: Int!
    $limit: Int!
    $phenotype: String!
  ) {
    listStrainsWithPhenotype(
      input: { cursor: $cursor, limit: $limit, phenotype: $phenotype }
    ) {
      nextCursor
      strains {
        id
        label
        genes
        publications {
          id
          doi
        }
      }
    }
  }
`

const GET_PLASMID_LIST = gql`
  query PlasmidListFilter($cursor: Int!, $limit: Int!, $filter: String!) {
    listPlasmids(input: { cursor: $cursor, limit: $limit, filter: $filter }) {
      nextCursor
      plasmids {
        id
        name
        summary
        in_stock
      }
    }
  }
`

const GET_RELATED_STRAINS = gql`
  query StrainList($filter: String!) {
    listStrains(input: { limit: 10, filter: $filter }) {
      strains {
        id
        label
      }
    }
  }
`

const GET_PLASMID = gql`
  query Plasmid($id: ID!) {
    plasmid(id: $id) {
      id
      name
      summary
      depositor
      publications {
        id
        doi
      }
      dbxrefs
      genes
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
        doi
      }
      genes
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
          doi
          id
        }
      }
    }
  }
`

const GET_CONTENT_BY_SLUG = gql`
  query contentBySlug($slug: String!) {
    contentBySlug(slug: $slug) {
      id
      content
      name
      slug
      updated_at
      updated_by {
        id
        email
        first_name
        last_name
        roles {
          role
          permissions {
            permission
            resource
          }
        }
      }
    }
  }
`

const GET_REFRESH_TOKEN = gql`
  query GetRefreshToken($token: String!) {
    getRefreshToken(token: $token) {
      token
      user {
        id
        email
        first_name
        last_name
        roles {
          role
          permissions {
            permission
            resource
          }
        }
      }
      identity {
        provider
      }
    }
  }
`

const GET_USER_BY_EMAIL = gql`
  query UserByEmail($email: String!) {
    userByEmail(email: $email) {
      id
    }
  }
`

export {
  GET_STOCK_TOTALS,
  GET_STRAIN_LIST,
  GET_STRAIN_LIST_WITH_PHENOTYPE,
  GET_PLASMID_LIST,
  GET_RELATED_STRAINS,
  GET_STRAIN,
  GET_PLASMID,
  GET_CONTENT_BY_SLUG,
  GET_REFRESH_TOKEN,
  GET_USER_BY_EMAIL,
}
