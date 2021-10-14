import { makeStyles } from "@material-ui/core/styles"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import { Chip, Box } from "@material-ui/core"
import { CatalogActionType } from "features/Stocks/Catalogs/context/CatalogContext"
import { useHistory } from "react-router"

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
  const history = useHistory()

  const removeFilter = (index: number) => {
    if (index >= activeFilters.length) return
    dispatch({
      type: CatalogActionType.SET_ACTIVE_FILTERS,
      payload: [],
    })

    history.push("?filter=available")
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
