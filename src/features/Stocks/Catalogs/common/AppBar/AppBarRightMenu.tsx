import React, { useState } from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AppBarHelp from "./AppBarHelp"

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    color: "#fff",
    paddingRight: theme.spacing(1),
  },
  menuItem: {
    fontSize: "0.8rem",
  },
}))

const dropdownItems = ["Download PDF", "Download CSV"]

/**
 * AppBarRightMenu contains the icon and display logic
 * for the right menu in the app bar.
 */

const AppBarRightMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const classes = useStyles()
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Menu id="menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {dropdownItems.map((item) => (
          <MenuItem
            key={item}
            onClick={handleClose}
            className={classes.menuItem}>
            <FontAwesomeIcon icon="download" size="sm" />
            &nbsp; {item}
          </MenuItem>
        ))}
      </Menu>
      <AppBarHelp />
    </>
  )
}

export default AppBarRightMenu
