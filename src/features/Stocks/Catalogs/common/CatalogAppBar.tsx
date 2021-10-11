import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Hidden from "@material-ui/core/Hidden"
import AppBarLeftMenu from "features/Stocks/Catalogs/common/AppBar/AppBarLeftMenu"
import AppBarSearch from "features/Stocks/Catalogs/common/AppBar/AppBarSearch"
import AppBarRightMenu from "features/Stocks/Catalogs/common/AppBar/AppBarRightMenu"
import { Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  appBar: {
    border: "1px #eee solid",
    borderRadius: "4px",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
    backgroundColor: "white",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)!important",
  },
  toolbar: {
    margin: 0,
    padding: 0,
    display: "block",
    minHeight: "56px!important",
  },
  toolbarInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
    minHeight: "inherit",
  },
  toolbarOption: {
    display: "block",
    minHeight: "inherit",
    width: "100%",
    borderRight: "1px solid #eee",
    "&:last-child": { borderRight: "0px" },
  },
}))

type Props = {
  /** List of items to display in left dropdown menu */
  leftDropdownItems: Array<{
    name: string
    value: string
  }>
  /** List of items to display in right dropdown menu */
  rightDropdownItems: Array<{ name: string; value: string }>
}

/**
 * CatalogAppBar is the container component for the app bar
 * at the top of the catalog page.
 */

const CatalogAppBar = ({ leftDropdownItems, rightDropdownItems }: Props) => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.toolbarInner}>
          <Box
            flex="2"
            className={classes.toolbarOption}
            style={{ minWidth: "185px" }}>
            <AppBarLeftMenu dropdownItems={leftDropdownItems} />
          </Box>
          <Box flex="9" className={classes.toolbarOption}>
            <AppBarSearch dropdownItems={rightDropdownItems} />
          </Box>
          <Hidden smDown>
            <Box flex="1" className={classes.toolbarOption}>
              <AppBarRightMenu />
            </Box>
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default CatalogAppBar
