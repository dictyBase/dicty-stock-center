// @flow
import React from "react"
import { Helmet } from "react-helmet"
import gql from "graphql-tag"
import StrainCatalogContainer from "./StrainCatalogContainer"
import { CatalogProvider } from "components/Stocks/Catalogs/common/CatalogContext"

const GET_STRAIN_LIST = gql`
  query StrainList($cursor: Int!) {
    listStrains(input: { cursor: $cursor, limit: 10 }) {
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

/**
 * StrainCatalogWrapper is used to wrap all strain catalog components with the
 * context provider. Helmet is also used for SEO purposes.
 */

export const StrainCatalogWrapper = () => (
  <CatalogProvider query={GET_STRAIN_LIST}>
    <Helmet>
      <title>Strain Catalog - Dicty Stock Center</title>
      <meta name="description" content={"Dicty Stock Center strain catalog"} />
    </Helmet>
    <StrainCatalogContainer />
  </CatalogProvider>
)

export { GET_STRAIN_LIST }
export default StrainCatalogWrapper
