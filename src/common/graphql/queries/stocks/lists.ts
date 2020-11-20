import { gql } from "@apollo/client"

// used in Availability component (homepage)
const GET_STOCK_TOTALS = gql`
  query StockList($limit: Int!) {
    listPlasmids(limit: $limit, filter: "") {
      totalCount
    }
    listStrains(limit: $limit, filter: "") {
      totalCount
    }
  }
`

const GET_STRAIN_LIST = gql`
  query StrainList($cursor: Int!, $limit: Int!, $filter: String!) {
    listStrains(cursor: $cursor, limit: $limit, filter: $filter) {
      nextCursor
      totalCount
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
    $type: String!
    $annotation: String!
  ) {
    listStrainsWithAnnotation(
      cursor: $cursor
      limit: $limit
      type: $type
      annotation: $annotation
    ) {
      totalCount
      nextCursor
      strains {
        id
        label
        genes {
          name
        }
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
      }
    }
  }
`

const GET_BACTERIAL_STRAIN_LIST = gql`
  query ListBacterialStrains {
    bacterialFoodSource: listStrainsWithAnnotation(
      cursor: 0
      limit: 100
      type: "characteristic"
      annotation: "bacterial food source"
    ) {
      totalCount
      nextCursor
      strains {
        id
        label
        summary
        in_stock
      }
    }

    symbioticFarmerBacterium: listStrainsWithAnnotation(
      cursor: 0
      limit: 100
      type: "characteristic"
      annotation: "symbiotic farmer bacterium"
    ) {
      totalCount
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

const GET_STRAIN_INVENTORY_LIST = gql`
  query ListStrainsInventory($cursor: Int!, $limit: Int!) {
    listStrainsWithAnnotation(
      cursor: $cursor
      limit: $limit
      type: "strain_inventory"
      annotation: "strain_inventory"
    ) {
      totalCount
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

const GET_PLASMID_INVENTORY_LIST = gql`
  query ListPlasmidsInventory($cursor: Int!, $limit: Int!) {
    listPlasmidsWithAnnotation(
      cursor: $cursor
      limit: $limit
      type: "plasmid_inventory"
      annotation: "plasmid inventory"
    ) {
      totalCount
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

const GET_PLASMID_LIST = gql`
  query PlasmidListFilter($cursor: Int!, $limit: Int!, $filter: String!) {
    listPlasmids(cursor: $cursor, limit: $limit, filter: $filter) {
      nextCursor
      totalCount
      plasmids {
        id
        name
        summary
        in_stock
      }
    }
  }
`

export {
  GET_STOCK_TOTALS,
  GET_STRAIN_LIST,
  GET_STRAIN_LIST_WITH_PHENOTYPE,
  GET_BACTERIAL_STRAIN_LIST,
  GET_STRAIN_INVENTORY_LIST,
  GET_PLASMID_INVENTORY_LIST,
  GET_PLASMID_LIST,
}
