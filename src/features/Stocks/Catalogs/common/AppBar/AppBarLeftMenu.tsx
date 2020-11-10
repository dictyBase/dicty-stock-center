import React from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input"
import Select from "@material-ui/core/Select"
import useSearchQuery from "common/hooks/useSearchQuery"
import { useAppBarStore, AppBarActionType } from "./AppBarContext"

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
  stockType: string
}

/**
 * AppBarLeftMenu handles everything related to the
 * left side of the app bar.
 */

const AppBarLeftMenu = ({ dropdownItems, stockType }: Props) => {
  const query = useSearchQuery()
  const params = query.get("search") || "all"
  const classes = useStyles()
  const history = useHistory()
  const {
    state: { leftDropdownValue },
    dispatch,
  } = useAppBarStore()

  React.useEffect(() => {
    if (params !== leftDropdownValue) {
      dispatch({
        type: AppBarActionType.SET_LEFT_DROPDOWN_VALUE,
        payload: params,
      })
    }
  }, [params, leftDropdownValue, dispatch])

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: any }>,
  ) => {
    history.push(`/${stockType}s?search=${event.target.value}`)
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
