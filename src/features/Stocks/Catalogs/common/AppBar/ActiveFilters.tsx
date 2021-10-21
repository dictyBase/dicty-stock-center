import { makeStyles } from "@material-ui/core/styles"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"
import { Chip, Box } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Cancel"

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

interface IFilterChipProps {
  val: string
  removeChip: () => void
}

const FilterChip = ({ val, removeChip }: IFilterChipProps) => (
  <Chip
    label={val}
    onDelete={removeChip}
    deleteIcon={
      <DeleteIcon role="remove-chip" aria-hidden="false" focusable="true" />
    }
    size="small"
    role={`chip`}
  />
)

interface IActiveFiltersProps {
  removeFilter: () => void
}

const ActiveFilters = ({ removeFilter }: IActiveFiltersProps) => {
  const {
    state: { activeFilters },
  } = useCatalogStore()
  const classes = useStyles()

  return (
    <Box className={classes.chipHolder} role="chip-holder">
      {activeFilters?.map((val, i) => (
        <FilterChip
          val={val}
          removeChip={removeFilter}
          key={`chip${i}${val}`}
        />
      ))}
    </Box>
  )
}

export default ActiveFilters
