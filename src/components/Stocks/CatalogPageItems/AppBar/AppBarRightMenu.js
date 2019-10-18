// @flow
import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AppBarHelp from "./AppBarHelp"

const useStyles = makeStyles(theme => ({
  icon: {
    color: "#fff",
    paddingRight: "5px",
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
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles()
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        size="small"
        className={classes.icon}
        onClick={handleClick}
        title="More options"
        aria-label="More options for stock catalog page">
        <FontAwesomeIcon icon="ellipsis-v" />
      </IconButton>
      <Menu id="menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {dropdownItems.map(item => (
          <MenuItem onClick={handleClose} className={classes.menuItem}>
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
