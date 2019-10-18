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

type Props = {
  dropdownItems: Array<{
    name: string,
  }>,
}

/**
 * AppBarLeftMenu handles everything related to the
 * left side of the app bar.
 */

const AppBarLeftMenu = ({ dropdownItems }: Props) => {
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
        aria-label="Filter options for stock catalog page">
        <FontAwesomeIcon icon="cog" />
      </IconButton>
      <Menu id="menu" anchorEl={anchorEl} open={open} onClose={handleItemClick}>
        {dropdownItems.map(item => (
          <MenuItem
            onClick={handleItemClick}
            className={classes.menuItem}
            key={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default AppBarLeftMenu
