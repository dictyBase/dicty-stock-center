// @flow
import React from "react"
import { connect } from "react-redux"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { addToCart } from "actions/cart"

const useStyles = makeStyles({
  listHeaders: {
    borderBottom: "1px solid #888",
    backgroundColor: "#f6f9fc",
    color: "#525f7f",
    fontWeight: 600,
  },
  list: {
    padding: 0,
  },
})

type Props = {
  checkedItems: Array<{
    id: string,
    label: string,
  }>,
  setCheckedItems: Function,
  addToCart: Function,
  handleCheckAllChange: Function,
}

const StrainCatalogListHeader = ({
  checkedItems,
  setCheckedItems,
  addToCart,
  handleCheckAllChange,
}: Props) => {
  const classes = useStyles()
  const checkedItemsLength = checkedItems.length

  const handleCartClick = () => {
    checkedItems.forEach(item => {
      addToCart({
        type: "strain",
        id: item.id,
        name: item.label,
      })
    })
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listHeaders}>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={1}>
            {checkedItemsLength > 0 && (
              <Checkbox
                indeterminate={checkedItemsLength > 0 ? true : false}
                color="default"
                value="selectAll"
                onChange={handleCheckAllChange}
                inputProps={{
                  "aria-label": "checkbox select all",
                }}
              />
            )}
          </Grid>
          {checkedItemsLength > 0 ? (
            <IconButton size="medium" color="default" onClick={handleCartClick}>
              <FontAwesomeIcon icon="cart-plus" />
            </IconButton>
          ) : (
            <>
              <Grid item xs={3}>
                Strain Descriptor
              </Grid>
              <Grid item xs={6}>
                Strain Summary
              </Grid>
              <Grid item xs={1}>
                Strain ID
              </Grid>
              <Grid item xs={1}></Grid>
            </>
          )}
        </Grid>
      </ListItem>
    </List>
  )
}

export default connect<*, *, *, *, *, *>(
  null,
  { addToCart },
)(StrainCatalogListHeader)
