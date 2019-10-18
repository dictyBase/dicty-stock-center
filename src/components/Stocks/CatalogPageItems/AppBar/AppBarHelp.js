// @flow
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAppBarState } from "components/Stocks/CatalogPageItems/AppBar/AppBarContext"
import HelpDialog from "components/Stocks/CatalogPageItems/HelpDialog"

const useStyles = makeStyles(theme => ({
  helpIcon: {
    color: "#fff",
    paddingLeft: "20px",
    paddingRight: "10px",
  },
}))

type HelpDialogType = {
  helpDialogOpen: boolean,
  setHelpDialogOpen: Function,
}

/**
 * AppBarHelp handles the display of the appbar help feature.
 */

const AppBarHelp = () => {
  const { helpDialogOpen, setHelpDialogOpen }: HelpDialogType = useAppBarState()
  const classes = useStyles()

  const handleClick = () => {
    setHelpDialogOpen(!helpDialogOpen)
  }

  return (
    <>
      <IconButton
        size="small"
        className={classes.helpIcon}
        onClick={handleClick}
        title="Catalog Help"
        aria-label="Learn more about the stock catalog page">
        <FontAwesomeIcon icon="question-circle" />
      </IconButton>
      <HelpDialog
        helpDialogOpen={helpDialogOpen}
        setHelpDialogOpen={setHelpDialogOpen}
      />
    </>
  )
}

export default AppBarHelp
