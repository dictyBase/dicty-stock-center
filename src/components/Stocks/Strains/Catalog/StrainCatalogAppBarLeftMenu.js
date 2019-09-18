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
 * StrainCatalogAppBarLeftMenu handles everything related to the
 * left side of the app bar.
 */

const StrainCatalogAppBarLeftMenu = () => {
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
        onClick={handleIconClick}
        title="Filter options"
        aria-label="Filter options for the strain catalog page">
        <FontAwesomeIcon icon="cog" />
      </IconButton>
      <Menu id="menu" anchorEl={anchorEl} open={open} onClose={handleItemClick}>
        <MenuItem onClick={handleItemClick} className={classes.menuItem}>
          All Strains &nbsp; <FontAwesomeIcon icon="check-circle" size="sm" />
        </MenuItem>
        <MenuItem onClick={handleItemClick} className={classes.menuItem}>
          GWDI Strains
        </MenuItem>
        <MenuItem onClick={handleItemClick} className={classes.menuItem}>
          Available Strains
        </MenuItem>
        <MenuItem onClick={handleItemClick} className={classes.menuItem}>
          Unavailable Strains
        </MenuItem>
      </Menu>
    </>
  )
}

export default StrainCatalogAppBarLeftMenu
