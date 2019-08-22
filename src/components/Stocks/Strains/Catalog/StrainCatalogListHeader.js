// @flow
import React from "react"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles({
  listHeaders: {
    borderBottom: "1px solid #888",
    // backgroundColor: "#DCDCDC",
  },
  list: {
    padding: 0,
  },
})

const StrainCatalogListHeader = ({ checkedItems, setCheckedItems }) => {
  const classes = useStyles()
  const checkedItemsLength = Object.keys(checkedItems).length

  const handleCheckAllChange = event => {
    if (checkedItemsLength > 0) {
      setCheckedItems({})
    }
    // also need to make sure checkbox is empty after click
    // and each checkbox should lose their checkmark
  }

  const handleCartClick = () => {
    console.log(checkedItems)
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listHeaders}>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={1}>
            <Checkbox
              indeterminate={checkedItemsLength > 0 ? true : false}
              checked={checkedItemsLength > 0 ? true : false}
              color="default"
              value="selectAll"
              onChange={handleCheckAllChange}
              inputProps={{
                "aria-label": "checkbox select all",
              }}
            />
          </Grid>
          {checkedItemsLength > 0 ? (
            <IconButton size="medium" color="default" onClick={handleCartClick}>
              <FontAwesomeIcon icon="cart-plus" />
            </IconButton>
          ) : (
            <>
              <Grid item xs={3}>
                <strong>Strain Descriptor</strong>
              </Grid>
              <Grid item xs={6}>
                <strong>Strain Summary</strong>
              </Grid>
              <Grid item xs={1}>
                <strong>Strain ID</strong>
              </Grid>
              <Grid item xs={1}></Grid>
            </>
          )}
        </Grid>
      </ListItem>
    </List>
  )
}

export default StrainCatalogListHeader
