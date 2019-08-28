// @flow
import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
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
 * PlasmidCatalogAppBarLeftMenu handles everything related to the
 * left side of the app bar.
 */

const PlasmidCatalogAppBarLeftMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const classes = useStyles()

  const handleIconClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleItemClick = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        size="small"
        className={classes.icon}
        onClick={handleIconClick}>
        <FontAwesomeIcon icon="cog" />
      </IconButton>
      <Menu id="menu" anchorEl={anchorEl} open={open} onClose={handleItemClick}>
        <MenuItem onClick={handleItemClick} className={classes.menuItem}>
          All Plasmids &nbsp; <FontAwesomeIcon icon="check-circle" size="sm" />
        </MenuItem>
        <MenuItem onClick={handleItemClick} className={classes.menuItem}>
          Available Plasmids
        </MenuItem>
        <MenuItem onClick={handleItemClick} className={classes.menuItem}>
          Unavailable Plasmids
        </MenuItem>
      </Menu>
    </>
  )
}

export default PlasmidCatalogAppBarLeftMenu
