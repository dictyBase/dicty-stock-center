import gql from "graphql-tag"

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
  query StrainList($cursor: Int!, $filter: String!) {
    listStrains(input: { cursor: $cursor, limit: 10, filter: $filter }) {
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

const GET_PLASMID_LIST = gql`
  query PlasmidListFilter($cursor: Int!, $filter: String!) {
    listPlasmids(input: { cursor: $cursor, limit: 10, filter: $filter }) {
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
    }
  }
`

/**
 * query will still need these from annotations:
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
 */

const GET_CONTENT_BY_SLUG = gql`
  query contentBySlug($slug: String!) {
    contentBySlug(slug: $slug) {
      id
      content
      name
      slug
      created_by {
        email
        roles {
          role
          permissions {
            permission
            resource
          }
        }
      }
      updated_by {
        email
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

const GET_USER = gql`
  query GetUserByID($id: ID!) {
    user(id: $id) {
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
`

const GET_REFRESH_TOKEN = gql`
  query GetRefreshToken($token: String!) {
    getRefreshToken(token: $token) {
      token
    }
  }
`

// MUTATIONS

const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
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
          }
        }
      }
      identity {
        provider
      }
    }
  }
`

const LOGOUT = gql`
  mutation Logout {
    logout {
      success
    }
  }
`

const POST_ORDER = gql`
  mutation CreateOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
    }
  }
`

const CREATE_CONTENT = gql`
  mutation CreateContent($input: CreateContentInput!) {
    createContent(input: $input) {
      name
      created_by {
        id
      }
      content
      namespace
    }
  }
`

const UPDATE_CONTENT = gql`
  mutation UpdateContent($input: UpdateContentInput!) {
    updateContent(input: $input) {
      id
      updated_by {
        id
      }
      content
    }
  }
`

export {
  GET_STOCK_TOTALS,
  GET_STRAIN_LIST,
  GET_PLASMID_LIST,
  GET_RELATED_STRAINS,
  GET_STRAIN,
  GET_PLASMID,
  GET_CONTENT_BY_SLUG,
  GET_USER,
  GET_REFRESH_TOKEN,
  LOGIN,
  LOGOUT,
  POST_ORDER,
  CREATE_CONTENT,
  UPDATE_CONTENT,
}
