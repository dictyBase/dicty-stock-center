import React from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input"
import Select from "@material-ui/core/Select"
import useSearchQuery from "common/hooks/useSearchQuery"
import {
  useCatalogStore,
  CatalogActionType,
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
    dispatch,
  } = useCatalogStore()

  React.useEffect(() => {
    if (filter !== leftDropdownValue) {
      dispatch({
        type: CatalogActionType.SET_LEFT_DROPDOWN_VALUE,
        payload: filter,
      })
    }
  }, [filter, leftDropdownValue, dispatch])

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: any }>,
  ) => {
    history.push(`?filter=${event.target.value}`)
  }

  return (
    <Paper className={classes.root}>
      <FormControl>
        <Select
          native
          value={leftDropdownValue}
          onChange={handleChange}
          input={
            <Input
              disableUnderline
              name="catalog-search"
              id="catalog-filter"
              classes={{
                input: classes.select,
              }}
            />
          }>
          {dropdownItems.map((item, index) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </Paper>
  )
}

export default AppBarLeftMenu
