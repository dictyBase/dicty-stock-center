// @flow
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PlasmidCatalogAppBarLeftMenu from "./PlasmidCatalogAppBarLeftMenu"
import PlasmidCatalogAppBarSearch from "./PlasmidCatalogAppBarSearch"
import PlasmidCatalogAppBarRightMenu from "./PlasmidCatalogAppBarRightMenu"
import { usePlasmidCatalogState } from "./PlasmidCatalogContext"
import HelpDialog from "components/Stocks/CatalogPageItems/HelpDialog"

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#0059b3",
  },
  icon: {
    color: "#fff",
    paddingLeft: "20px",
    paddingRight: "10px",
  },
}))

/**
 * PlasmidCatalogAppBar is the container component for the app bar
 * at the top of the catalog page.
 */

const PlasmidCatalogAppBar = () => {
  const {
    helpDialogOpen,
    setHelpDialogOpen,
  }: {
    helpDialogOpen: boolean,
    setHelpDialogOpen: Function,
  } = usePlasmidCatalogState()
  const classes = useStyles()

  const handleClick = () => {
    setHelpDialogOpen(!helpDialogOpen)
  }

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container justify="flex-start">
            <PlasmidCatalogAppBarLeftMenu />
          </Grid>
          <Grid container justify="center">
            <PlasmidCatalogAppBarSearch />
          </Grid>
          <Grid container justify="flex-end">
            <PlasmidCatalogAppBarRightMenu />
            <IconButton
              size="small"
              className={classes.icon}
              onClick={handleClick}
              title="Help"
              aria-label="Learn more about the plasmid catalog page">
              <FontAwesomeIcon icon="question-circle" />
            </IconButton>
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

export default PlasmidCatalogAppBar
