import React from "react"
import { Helmet } from "react-helmet"
import StrainCatalogContainer from "../Strains/StrainCatalogContainer"
import PlasmidCatalogContainer from "../Plasmids/PlasmidCatalogContainer"
import { CatalogProvider } from "features/Stocks/Catalogs/context/CatalogContext"

const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

type Props = {
  /** Type of stock catalog */
  stockType: "strain" | "plasmid"
}

/**
 * CatalogWrapper is used to wrap all catalog features with the
 * context provider. Helmet is also used for SEO purposes.
 */

const CatalogWrapper = ({ stockType }: Props) => {
  let catalog = <StrainCatalogContainer />
  if (stockType === "plasmid") {
    catalog = <PlasmidCatalogContainer />
  }

  return (
    <CatalogProvider stockType={stockType}>
      <Helmet>
        <title>
          {capitalizeFirstLetter(stockType)} Catalog - Dicty Stock Center
        </title>
        <meta
          name="description"
          content={`Dicty Stock Center ${stockType} catalog`}
        />
      </Helmet>
      {catalog}
    </CatalogProvider>
  )
}

export default CatalogWrapper
