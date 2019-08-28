// @flow
import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Divider from "@material-ui/core/Divider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(theme => ({
  icon: {
    color: "#fff",
    paddingRight: "5px",
  },
  menuItem: {
    fontSize: "0.8rem",
  },
}))

/**
 * StrainCatalogAppBarRightMenu contains the icon and display logic
 * for the right menu in the app bar.
 */

const StrainCatalogAppBarRightMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const classes = useStyles()

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton size="small" className={classes.icon} onClick={handleClick}>
        <FontAwesomeIcon icon="ellipsis-v" />
      </IconButton>
      <Menu id="menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} className={classes.menuItem}>
          <FontAwesomeIcon icon="download" size="sm" />
          &nbsp; Download PDF
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.menuItem}>
          <FontAwesomeIcon icon="download" size="sm" />
          &nbsp; Download CSV
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} className={classes.menuItem}>
          <FontAwesomeIcon icon="info-circle" size="sm" />
          &nbsp; Help
        </MenuItem>
      </Menu>
    </>
  )
}

export default StrainCatalogAppBarRightMenu
