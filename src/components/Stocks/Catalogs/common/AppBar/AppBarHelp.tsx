import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  useAppBarStore,
  AppBarActionType,
} from "components/Stocks/Catalogs/common/AppBar/AppBarContext"
import HelpDialog from "components/Stocks/Catalogs/common/HelpDialog"

const useStyles = makeStyles(theme => ({
  helpIcon: {
    color: "#fff",
    paddingLeft: "20px",
    paddingRight: "10px",
  },
}))

/**
 * AppBarHelp handles the display of the appbar help feature.
 */

const AppBarHelp = () => {
  const [{ helpDialogOpen }, dispatch] = useAppBarStore()
  const classes = useStyles()

  const handleClick = () => {
    dispatch({
      type: AppBarActionType.SET_HELP_DIALOG_OPEN,
      payload: !helpDialogOpen,
    })
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
      <HelpDialog />
    </>
  )
}

export default AppBarHelp
