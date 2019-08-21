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
}))

const StrainCatalogAppBarRightMenu = props => {
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
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <FontAwesomeIcon icon="download" />
          &nbsp; Download PDF
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FontAwesomeIcon icon="download" />
          &nbsp; Download CSV
        </MenuItem>
      </Menu>
    </>
  )
}

export default StrainCatalogAppBarRightMenu
