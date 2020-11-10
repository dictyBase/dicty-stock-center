import React from "react"
import { Helmet } from "react-helmet"
import PlasmidCatalogContainer from "./PlasmidCatalogContainer"
import { CatalogProvider } from "features/Stocks/Catalogs/common/CatalogContext"

/**
 * PlasmidCatalogWrapper is used to wrap all strain catalog features with the
 * context provider. Helmet is also used for SEO purposes.
 */

export const PlasmidCatalogWrapper = () => (
  <CatalogProvider stockType="plasmid">
    <Helmet>
      <title>Plasmid Catalog - Dicty Stock Center</title>
      <meta name="description" content={"Dicty Stock Center plasmid catalog"} />
    </Helmet>
    <PlasmidCatalogContainer />
  </CatalogProvider>
)

export default PlasmidCatalogWrapper
