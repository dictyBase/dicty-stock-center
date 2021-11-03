import React from "react"
import { useHistory } from "react-router-dom"
import AppBarDropdown from "./AppBarDropdown"
import useSearchQuery from "common/hooks/useSearchQuery"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import useCatalogDispatch from "features/Stocks/Catalogs/context/useCatalogDispatch"
import { updateSearchQueries } from "../../Strains/StrainCatalogContainer"

type Props = {
  dropdownItems: Array<{
    value: string
    name: string
  }>
}

/**
 * AppBarLeftMenu handles everything related to the
 * left side of the app bar.
 */

const AppBarLeftMenu = ({ dropdownItems }: Props) => {
  const query = useSearchQuery()
  const filter = query.get("filter") || "all"
  const history = useHistory()
  const {
    state: { leftDropdownValue, searchBoxDropdownValue, searchValue },
  } = useCatalogStore()
  const { setLeftDropdownValue } = useCatalogDispatch()

  React.useEffect(() => {
    if (filter !== leftDropdownValue) {
      setLeftDropdownValue(filter)
    }
  }, [filter, leftDropdownValue, setLeftDropdownValue])

  const handleChange = (name: string, value: any) => {
    history.push(
      updateSearchQueries(value, searchBoxDropdownValue, searchValue),
    )
  }

  return (
    <AppBarDropdown
      handleChange={handleChange}
      dropdownValue={leftDropdownValue}
      dropdownItems={dropdownItems}
      inputName="catalog-filter"
    />
  )
}

export default AppBarLeftMenu
