import React from "react"
import { Helmet } from "react-helmet"
import StrainCatalogContainer from "./StrainCatalogContainer"
import { CatalogProvider } from "features/Stocks/Catalogs/common/CatalogContext"

/**
 * StrainCatalogWrapper is used to wrap all strain catalog components with the
 * context provider. Helmet is also used for SEO purposes.
 */

export const StrainCatalogWrapper = () => (
  <CatalogProvider stockType="strain">
    <Helmet>
      <title>Strain Catalog - Dicty Stock Center</title>
      <meta name="description" content={"Dicty Stock Center strain catalog"} />
    </Helmet>
    <StrainCatalogContainer />
  </CatalogProvider>
)

export default StrainCatalogWrapper
