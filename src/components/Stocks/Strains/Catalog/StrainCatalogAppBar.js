// @flow
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import StrainCatalogAppBarLeftMenu from "./StrainCatalogAppBarLeftMenu"
import StrainCatalogAppBarSearch from "./StrainCatalogAppBarSearch"
import StrainCatalogAppBarRightMenu from "./StrainCatalogAppBarRightMenu"
import { useStrainCatalogState } from "./StrainCatalogContext"
import HelpDialog from "components/Stocks/CatalogPageItems/HelpDialog"

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#0059b3",
  },
  icon: {
    color: "#fff",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
}))

/**
 * StrainCatalogAppBar is the main display component for the app bar
 * at the top of the catalog page.
 */

const StrainCatalogAppBar = () => {
  const {
    helpDialogOpen,
    setHelpDialogOpen,
  }: {
    helpDialogOpen: boolean,
    setHelpDialogOpen: Function,
  } = useStrainCatalogState()
  const classes = useStyles()

  const handleClick = () => {
    setHelpDialogOpen(!helpDialogOpen)
  }

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container justify="flex-start">
            <StrainCatalogAppBarLeftMenu />
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12}>
              <StrainCatalogAppBarSearch />
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <IconButton
              size="small"
              className={classes.icon}
              onClick={handleClick}
              title="Help"
              aria-label="Learn more about the strain catalog page">
              <FontAwesomeIcon icon="question-circle" />
            </IconButton>
            <StrainCatalogAppBarRightMenu />
          </Grid>
        </Toolbar>
      </AppBar>
      <HelpDialog
        helpDialogOpen={helpDialogOpen}
        setHelpDialogOpen={setHelpDialogOpen}
      />
    </>
  )
}

export default StrainCatalogAppBar
