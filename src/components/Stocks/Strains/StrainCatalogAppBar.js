// @flow
import React from "react"
import { makeStyles, fade } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#0059b3",
  },
  icon: {
    color: "#fff",
    paddingRight: "5px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
      },
    },
  },
}))

const StrainCatalogAppBar = props => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.container}>
      <Toolbar>
        <Grid container justify="flex-start">
          <IconButton size="small" className={classes.icon}>
            <FontAwesomeIcon icon="bars" />
          </IconButton>
        </Grid>
        <Grid container justify="center">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <IconButton size="small" className={classes.icon}>
                <FontAwesomeIcon icon="search" />
              </IconButton>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Grid>
        <Grid container justify="flex-end">
          <IconButton size="small" className={classes.icon}>
            <FontAwesomeIcon icon="ellipsis-v" />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default StrainCatalogAppBar
