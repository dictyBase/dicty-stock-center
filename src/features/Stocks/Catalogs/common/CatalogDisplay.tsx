import React from "react"
import Box from "@material-ui/core/Box"
import CircularProgress from "@material-ui/core/CircularProgress"
import CatalogHeader from "features/Stocks/Catalogs/common/CatalogHeader"
import CatalogAppBar from "features/Stocks/Catalogs/common/CatalogAppBar"

type DropdownItem = {
  value: string
  name: string
}

type Props = {
  stockType: "Strain" | "Plasmid"
  leftDropdownItems: Array<DropdownItem>
  rightDropdownItems: Array<DropdownItem>
  loading: boolean
  children: React.ReactNode
}

/**
 * CatalogDisplay handles the display for the catalog pages.
 */

const CatalogDisplay = ({
  stockType,
  leftDropdownItems,
  rightDropdownItems,
  loading,
  children,
}: Props) => {
  const title = `${stockType} Catalog` as const

  return (
    <Box>
      <CatalogHeader title={title} />
      <CatalogAppBar
        leftDropdownItems={leftDropdownItems}
        rightDropdownItems={rightDropdownItems}
      />
      {loading && (
        <Box textAlign="center" mt={20} mb={20}>
          <CircularProgress data-testid="catalog-spinner" size={100} />
        </Box>
      )}
      {children}
    </Box>
  )
}

export default CatalogDisplay
