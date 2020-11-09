import React from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input"
import Select from "@material-ui/core/Select"

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
  searchTerm: string | null
  setSearchTerm: (arg0: string) => void
  stockType: string
}

/**
 * AppBarLeftMenu handles everything related to the
 * left side of the app bar.
 */

const AppBarLeftMenu = ({
  dropdownItems,
  searchTerm,
  setSearchTerm,
  stockType,
}: Props) => {
  const classes = useStyles()
  const history = useHistory()

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: any }>,
  ) => {
    history.push(`/${stockType}s?search=${event.target.value}`)
    setSearchTerm(event.target.value)
  }

  return (
    <Paper className={classes.root}>
      <FormControl>
        <Select
          native
          value={searchTerm}
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
