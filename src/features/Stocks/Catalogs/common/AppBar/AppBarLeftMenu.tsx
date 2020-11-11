import React from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import AppBarDropdown from "./AppBarDropdown"
import useSearchQuery from "common/hooks/useSearchQuery"
import {
  useCatalogStore,
  useCatalogDispatch,
} from "features/Stocks/Catalogs/common/CatalogContext"

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
  },
  select: {
    "&:focus": {
      backgroundColor: "#fff",
    },
  },
})

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
  const classes = useStyles()
  const history = useHistory()
  const {
    state: { leftDropdownValue },
  } = useCatalogStore()
  const { setLeftDropdownValue } = useCatalogDispatch()

  React.useEffect(() => {
    if (filter !== leftDropdownValue) {
      setLeftDropdownValue(filter)
    }
  }, [filter, leftDropdownValue, setLeftDropdownValue])

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: any }>,
  ) => {
    history.push(`?filter=${event.target.value}`)
  }

  return (
    <Paper className={classes.root}>
      <AppBarDropdown
        handleChange={handleChange}
        dropdownValue={leftDropdownValue}
        dropdownItems={dropdownItems}
      />
    </Paper>
  )
}

export default AppBarLeftMenu
