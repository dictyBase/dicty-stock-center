import React from "react"
import { Helmet } from "react-helmet"
import { useHistory } from "react-router-dom"
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
  const history = useHistory()
  const searchQuery = useSearchQuery()
  // Holds the value for activeFilters
  const filter = searchQuery.get("filter")
  // Holds the value for searchBoxDropdownValue
  const field = searchQuery.get("field")
  // Holds the input value for search
  const search = searchQuery.get("search")

  if (!filter) {
    history.push(`${stockType}s?filter=regular`)
  }

  let catalog = (
    <StrainCatalogContainer filter={filter} field={field} search={search} />
  )
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
