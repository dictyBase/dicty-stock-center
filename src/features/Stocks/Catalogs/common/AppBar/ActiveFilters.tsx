import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import { Chip, Box } from "@material-ui/core"
import { CatalogActionType } from "features/Stocks/Catalogs/context/CatalogContext"

const useStyles = makeStyles((theme) => ({
  chipHolder: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    "& > div": {
      marginRight: "3px",
    },
    "& > div:last-child": {
      marginRight: "0",
    },
  },
}))

const ActiveFilters = () => {
  const {
    state: { activeFilters },
    dispatch,
  } = useCatalogStore()
  const classes = useStyles()

  const removeFilter = (index: number) => {
    if (index >= activeFilters.length) return
    dispatch({
      type: CatalogActionType.SET_ACTIVE_FILTERS,
      payload: activeFilters.filter((f, i) => i !== index),
    })
    document.getElementById("search-input")?.focus()
  }

  return (
    <Box className={classes.chipHolder} role="chip-holder">
      {activeFilters?.map((val, i) => (
        <Chip
          label={val}
          onDelete={() => removeFilter(i)}
          key={`chip${i}${val}`}
          size="small"
          role={`chip`}
        />
      ))}
    </Box>
  )
}

export default ActiveFilters
