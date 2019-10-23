// @flow
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Input from "@material-ui/core/Input"
import { useAppBarState } from "./AppBarContext"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
  },
  select: {
    "&:focus": {
      backgroundColor: "#fff",
    },
  },
}))

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
 * AppBarLeftMenu handles everything related to the
 * left side of the app bar.
 */

const AppBarLeftMenu = ({ dropdownItems }: Props) => {
  const { filter, setFilter }: AppBarState = useAppBarState()
  const classes = useStyles()

  const handleChange = event => {
    setFilter(event.target.value)
  }

  return (
    <Paper className={classes.root}>
      <FormControl>
        <Select
          native
          onChange={handleChange}
          input={
            <Input
              disableUnderline
              name="stock-catalog"
              id="catalog-filter"
              classes={{
                input: classes.select,
              }}
            />
          }
          value={filter}>
          {dropdownItems.map(item => (
            <option value={item.value} key={item.value}>
              {item.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </Paper>
  )
}

export default AppBarLeftMenu
