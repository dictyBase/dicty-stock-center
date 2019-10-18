// @flow
import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAppBarState } from "components/Stocks/CatalogPageItems/AppBar/AppBarContext"
import HelpDialog from "components/Stocks/CatalogPageItems/HelpDialog"

const useStyles = makeStyles(theme => ({
  icon: {
    color: "#fff",
    paddingRight: "5px",
  },
  menuItem: {
    fontSize: "0.8rem",
  },
  helpIcon: {
    color: "#fff",
    paddingLeft: "20px",
    paddingRight: "10px",
  },
}))

/**
 * AppBarRightMenu contains the icon and display logic
 * for the right menu in the app bar.
 */

const AppBarRightMenu = () => {
  const {
    helpDialogOpen,
    setHelpDialogOpen,
  }: {
    helpDialogOpen: boolean,
    setHelpDialogOpen: Function,
  } = useAppBarState()
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles()

  const open = Boolean(anchorEl)

  const handleHelpClick = () => {
    setHelpDialogOpen(!helpDialogOpen)
  }

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
        <MenuItem onClick={handleClose} className={classes.menuItem}>
          <FontAwesomeIcon icon="download" size="sm" />
          &nbsp; Download PDF
        </MenuItem>
        <MenuItem onClick={handleClose} className={classes.menuItem}>
          <FontAwesomeIcon icon="download" size="sm" />
          &nbsp; Download CSV
        </MenuItem>
      </Menu>
      <IconButton
        size="small"
        className={classes.helpIcon}
        onClick={handleHelpClick}
        title="Help"
        aria-label="Learn more about the strain catalog page">
        <FontAwesomeIcon icon="question-circle" />
      </IconButton>
      <HelpDialog
        helpDialogOpen={helpDialogOpen}
        setHelpDialogOpen={setHelpDialogOpen}
      />
    </>
  )
}

export default AppBarRightMenu
