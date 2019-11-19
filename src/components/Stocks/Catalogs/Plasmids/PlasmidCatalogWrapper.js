// @flow
import React from "react"
import { Helmet } from "react-helmet"
import gql from "graphql-tag"
import PlasmidCatalogContainer from "./PlasmidCatalogContainer"
import { CatalogProvider } from "components/Stocks/Catalogs/common/CatalogContext"

export const GET_PLASMID_LIST = gql`
  query PlasmidList($cursor: Int!) {
    listPlasmids(input: { cursor: $cursor, limit: 10 }) {
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

/**
 * PlasmidCatalogWrapper is used to wrap all strain catalog components with the
 * context provider. Helmet is also used for SEO purposes.
 */

export const PlasmidCatalogWrapper = () => (
  <CatalogProvider query={GET_PLASMID_LIST}>
    <Helmet>
      <title>Plasmid Catalog - Dicty Stock Center</title>
      <meta name="description" content={"Dicty Stock Center plasmid catalog"} />
    </Helmet>
    <PlasmidCatalogContainer />
  </CatalogProvider>
)

export default PlasmidCatalogWrapper
