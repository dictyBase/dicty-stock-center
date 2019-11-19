// @flow
import React, { useState, memo } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { areEqual } from "react-window"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import Hidden from "@material-ui/core/Hidden"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCatalogState } from "components/Stocks/Catalogs/common/CatalogContext"
import AddToCartButton from "components/Stocks/Catalogs/common/AddToCartButton"
import characterConverter from "components/Stocks/utils/characterConverter"
import { removeItem } from "actions/cart"
import { catalogTypes } from "constants/catalogs"
import useStyles from "components/Stocks/Catalogs/styles"

type Props = {
  index: number,
  style: Object,
  data: {
    item: Array<{
      label: string,
      id: string,
      summary: string,
    }>,
  },
  cartItems: Array<Object>,
  removeItem: Function,
}

/**
 * StrainCatalogListItem handles the display of an individual
 * row of data in the strain catalog.
 */

export const StrainCatalogListItem = memo<*>(
  ({ index, style, data, cartItems, removeItem }: Props) => {
    // need to keep hover state localized, otherwise
    // it will hover for every item at the same time
    const [hover, setHover] = useState(false)
    const [{ checkedItems }, dispatch] = useCatalogState()
    const classes = useStyles()

    const { item } = data
    const strain = item[index]

    // if item is checked, then return true for checkbox
    const checkedItemsLookup = id => checkedItems.some(item => item.id === id)

    // check if hovered item is already in cart
    const selectedCartItems = cartItems.some(item => item.id === strain.id)

    const handleRemoveItemClick = () => {
      removeItem(strain.id)
      setHover(false)
    }

    const handleCheckboxChange = (
      id: string,
      label: string,
      summary: string,
    ) => (event: SyntheticEvent<>) => {
      // if checkbox is already checked, remove that item from state
      if (checkedItems.some(item => item.id === id)) {
        dispatch({
          type: catalogTypes.SET_CHECKED_ITEMS,
          payload: checkedItems.filter(item => item.id !== id),
        })
      } else {
        dispatch({
          type: catalogTypes.SET_CHECKED_ITEMS,
          payload: [...checkedItems, { id, label, summary }],
        })
      }
    }

    return (
      <ListItem
        key={strain.id}
        className={classes.row}
        style={style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <Grid container spacing={0} alignItems="center">
          <Hidden smDown>
            <Grid item md={1}>
              <Checkbox
                checked={checkedItemsLookup(strain.id)}
                onChange={handleCheckboxChange(
                  strain.id,
                  strain.label,
                  strain.summary,
                )}
                color="default"
                value={strain.id}
                inputProps={{
                  "aria-label": "Strain catalog checkbox",
                }}
              />
            </Grid>
          </Hidden>
          <Grid item xs={8} sm={4} md={3} className={classes.item}>
            <Typography noWrap>
              <Link className={classes.link} to={`/strains/${strain.id}`}>
                {characterConverter(strain.label)}
              </Link>
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid item sm={6} className={classes.item}>
              <Typography noWrap>{strain.summary}</Typography>
            </Grid>
          </Hidden>
          <Hidden mdDown>
            <Grid item lg={1}>
              <Typography noWrap>{strain.id}</Typography>
            </Grid>
          </Hidden>
          <Grid item xs={4} sm={2} md={2} lg={1}>
            <Grid container justify="center">
              {hover && (
                <span>
                  <AddToCartButton
                    data={[
                      {
                        id: strain.id,
                        label: strain.label,
                        summary: strain.summary,
                      },
                    ]}
                    setHover={setHover}
                    stockType="strain"
                  />
                  {selectedCartItems && (
                    <IconButton
                      size="medium"
                      color="secondary"
                      onClick={handleRemoveItemClick}>
                      <FontAwesomeIcon icon="trash" />
                    </IconButton>
                  )}
                </span>
              )}
            </Grid>
          </Grid>
        </Grid>
      </ListItem>
    )
  },
  areEqual,
)

const mapStateToProps = state => ({
  cartItems: state.cart.addedItems,
})

export default connect<*, *, *, *, *, *>(mapStateToProps, { removeItem })(
  StrainCatalogListItem,
)
