import React from "react"
import { Helmet } from "react-helmet"
import { useNavigate } from "react-router-dom"
import StrainCatalogContainer from "../Strains/StrainCatalogContainer"
import PlasmidCatalogContainer from "../Plasmids/PlasmidCatalogContainer"
import { CatalogProvider } from "features/Stocks/Catalogs/context/CatalogContext"
import useSearchQuery from "common/hooks/useSearchQuery"
import { capitalizeFirstCharacter } from "common/utils/stringCapitalizations"

type Props = {
  /** Type of stock catalog */
  stockType: "strain" | "plasmid"
}

/**
 * CatalogWrapper is used to wrap all catalog features with the
 * context provider. Helmet is also used for SEO purposes.
 */

const CatalogWrapper = ({ stockType }: Props) => {
  const history = useNavigate()
  const searchQuery = useSearchQuery()
  const filter = searchQuery.get("filter")

  if (!filter) {
    history(`?filter=regular`)
  }

  let catalog = <StrainCatalogContainer filter={filter} />
  if (stockType === "plasmid") {
    catalog = <PlasmidCatalogContainer filter={filter} />
  }

  return (
    <CatalogProvider stockType={stockType}>
      <Helmet>
        <title>
          {capitalizeFirstCharacter(stockType)} Catalog - Dicty Stock Center
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
