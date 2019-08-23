// @flow
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(theme => ({
  icon: {
    color: "#fff",
    paddingRight: "5px",
  },
}))

const StrainCatalogAppBarLeftMenu = () => {
  const classes = useStyles()

  return (
    <>
      <IconButton size="small" className={classes.icon}>
        <FontAwesomeIcon icon="bars" />
      </IconButton>
    </>
  )
}

export default StrainCatalogAppBarLeftMenu
