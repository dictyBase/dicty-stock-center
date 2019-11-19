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
import AddToCartButton from "components/Stocks/Catalogs/common/AddToCartButton"
import characterConverter from "components/Stocks/utils/characterConverter"
import { usePlasmidCatalogState } from "./PlasmidCatalogContext"
import { removeItem } from "actions/cart"
import { catalogTypes } from "constants/catalogs"
import useStyles from "components/Stocks/Catalogs/styles"

type Props = {
  index: number,
  style: Object,
  data: {
    handleCheckboxChange: Function,
    checkedItems: Array<Object>,
    item: Array<{
      name: string,
      id: string,
      summary: string,
    }>,
  },
  cartItems: Array<Object>,
  removeItem: Function,
}

/**
 * PlasmidCatalogListItem handles the display of an individual
 * row of data in the plasmid catalog.
 */

export const PlasmidCatalogListItem = memo<*>(
  ({ index, style, data, cartItems, removeItem }: Props) => {
    const [hover, setHover] = useState(false)
    const [{ checkedItems }, dispatch] = usePlasmidCatalogState()
    const classes = useStyles()

    const { item } = data
    const plasmid = item[index]

    // if item is checked, then return true for checkbox
    const checkedItemsLookup = id => checkedItems.some(item => item.id === id)

    // check if hovered item is already in cart
    const selectedCartItems = cartItems.some(item => item.id === plasmid.id)

    const handleRemoveItemClick = () => {
      removeItem(plasmid.id)
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
        key={plasmid.id}
        className={classes.row}
        style={style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <Grid container spacing={0} alignItems="center">
          <Hidden smDown>
            <Grid item md={1}>
              <Checkbox
                checked={checkedItemsLookup(plasmid.id)}
                onChange={handleCheckboxChange(
                  plasmid.id,
                  plasmid.name,
                  plasmid.summary,
                )}
                color="default"
                value={plasmid.id}
                inputProps={{
                  "aria-label": "Plasmid catalog checkbox",
                }}
              />
            </Grid>
          </Hidden>
          <Grid item xs={8} sm={3} md={2} className={classes.item}>
            <Typography noWrap>
              <Link className={classes.link} to={`/plasmids/${plasmid.id}`}>
                {characterConverter(plasmid.name)}
              </Link>
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid item sm={7} className={classes.item}>
              <Typography noWrap>{plasmid.summary}</Typography>
            </Grid>
          </Hidden>
          <Hidden mdDown>
            <Grid item lg={1}>
              <Typography noWrap>{plasmid.id}</Typography>
            </Grid>
          </Hidden>
          <Grid item xs={4} sm={2} md={2} lg={1}>
            <Grid container justify="center">
              {hover && (
                <span>
                  <AddToCartButton
                    data={[
                      {
                        id: plasmid.id,
                        label: plasmid.name,
                        summary: plasmid.summary,
                      },
                    ]}
                    setHover={setHover}
                    stockType="plasmid"
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
  PlasmidCatalogListItem,
)
