import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AppBarDropdown from "./AppBarDropdown"
import { useAppBarStore, AppBarActionType } from "./AppBarContext"
import { CatalogActionType } from "features/Stocks/Catalogs/common/CatalogContext"

const useStyles = makeStyles((theme) => ({
  root: {},
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  separator: {
    borderLeftColor: "#bfbfbf",
    borderLeftStyle: "solid",
    borderLeftWidth: "1px",
    display: "inline-block",
    height: "30px",
    verticalAlign: "middle",
    paddingRight: "4px",
  },
}))

type Props = {
  dropdownItems: Array<{
    value: string
    name: string
  }>
  catalogDispatch: Function
}

/**
 * AppBarSearch is the search box found on a stock catalog page.
 */

const AppBarSearch = ({ dropdownItems, catalogDispatch }: Props) => {
  const [{ searchValue, filter }, dispatch] = useAppBarStore()
  const classes = useStyles()

  const resetQueryVariables = () =>
    catalogDispatch({
      type: CatalogActionType.SET_QUERY_VARIABLES,
      payload: { cursor: 0, limit: 10, filter: `${filter}~${searchValue}` },
    })

  const handleChange = (
    event: React.ChangeEvent<{ value: unknown; name?: string | undefined }>,
  ) => {
    dispatch({
      type: AppBarActionType.SET_SEARCH_VALUE,
      payload: event.target.value,
    })
  }

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent,
  ) => {
    event.preventDefault()
    resetQueryVariables()
  }

  const clearSearch = () => {
    dispatch({
      type: AppBarActionType.SET_SEARCH_VALUE,
      payload: "",
    })
    resetQueryVariables()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Paper className={classes.root}>
        <Grid container alignItems="center">
          <IconButton
            className={classes.iconButton}
            aria-label="Catalog search icon"
            title="Search catalog"
            onClick={handleSubmit}>
            <FontAwesomeIcon icon="search" size="sm" />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            onChange={handleChange}
            value={searchValue}
          />
          <IconButton
            className={classes.iconButton}
            title="Clear search box"
            aria-label="clear search box"
            onClick={clearSearch}>
            <FontAwesomeIcon icon="times" size="sm" />
          </IconButton>
          <div className={classes.separator} />
          <AppBarDropdown dropdownItems={dropdownItems} />
        </Grid>
      </Paper>
    </form>
  )
}

export default AppBarSearch
