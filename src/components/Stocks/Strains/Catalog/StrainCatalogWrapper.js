// @flow
import React from "react"
import { Helmet } from "react-helmet"
import StrainCatalogContainer from "./StrainCatalogContainer"
import { StrainCatalogProvider } from "./StrainCatalogContext"

/**
 * StrainCatalogWrapper is used to wrap all strain catalog components with the
 * context provider. Helmet is also used for SEO purposes.
 */

export const StrainCatalogWrapper = () => (
  <StrainCatalogProvider>
    <Helmet>
      <title>Strain Catalog - Dicty Stock Center</title>
      <meta name="description" content={"Dicty Stock Center strain catalog"} />
    </Helmet>
    <StrainCatalogContainer />
  </StrainCatalogProvider>
)

export default StrainCatalogWrapper
