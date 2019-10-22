// @flow
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Input from "@material-ui/core/Input"
import { useAppBarState } from "./AppBarContext"

const useStyles = makeStyles({
  select: {
    "&:focus": {
      backgroundColor: "#fff",
    },
  },
})

type Props = {
  dropdownItems: Array<{
    value: string,
    name: string,
  }>,
}

type AppBarState = {
  filter: string,
  setFilter: Function,
}

/**
 * AppBarSearchFilter is the dropdown search filter in the catalog app bar.
 */

const AppBarSearchFilter = ({ dropdownItems }: Props) => {
  const { filter, setFilter }: AppBarState = useAppBarState()
  const classes = useStyles()

  const handleFilterChange = event => {
    setFilter(event.target.value)
  }

  return (
    <FormControl>
      <Select
        native
        value={filter}
        onChange={handleFilterChange}
        input={
          <Input
            disableUnderline
            name="catalog-search"
            id="search-filter"
            classes={{
              input: classes.select,
            }}
          />
        }>
        {dropdownItems.map(item => (
          <option value={item.value} key={item.value}>
            {item.name}
          </option>
        ))}
      </Select>
    </FormControl>
  )
}

export default AppBarSearchFilter
