import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import AppBarDropdown from "./AppBarDropdown"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
  },
}))

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
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <AppBarDropdown dropdownItems={dropdownItems} />
    </Paper>
  )
}

export default AppBarLeftMenu
