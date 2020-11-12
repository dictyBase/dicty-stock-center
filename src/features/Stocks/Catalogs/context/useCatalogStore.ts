import React from "react"
import { CatalogContext } from "./CatalogContext"

const useCatalogStore = () => {
  const context = React.useContext(CatalogContext)
  if (!context) {
    throw new Error("useCatalogStore must be used within a CatalogProvider")
  }

  return context
}

export default useCatalogStore
