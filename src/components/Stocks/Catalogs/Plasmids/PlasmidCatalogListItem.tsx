import React from "react"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import Hidden from "@material-ui/core/Hidden"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AddToCartButton from "components/Stocks/Catalogs/common/AddToCartButton"
import characterConverter from "components/Stocks/utils/characterConverter"
import useCheckboxes from "hooks/useCheckboxes"
import useCartItems from "hooks/useCartItems"
import useHover from "hooks/useHover"
import { plasmidListItemProps } from "components/Stocks/Catalogs/types/list"
import useStyles from "components/Stocks/Catalogs/styles"

/**
 * PlasmidCatalogListItem handles the display of an individual
 * row of data in the plasmid catalog.
 */

const PlasmidCatalogListItem = ({
  index,
  style,
  data,
}: plasmidListItemProps) => {
  const plasmid = data.item[index]
  const cartData = {
    id: plasmid.id,
    name: plasmid.name,
    summary: plasmid.summary,
    type: "plasmid",
  }
  const { handleCheckboxChange, itemIsChecked } = useCheckboxes(cartData)
  const { itemIsInCart, removeFromCart } = useCartItems([cartData])
  const { hover, setHover, bind } = useHover()
  const classes = useStyles()

  const handleRemoveItemClick = () => {
    removeFromCart()
    setHover(false)
  }

  return (
    <ListItem key={plasmid.id} className={classes.row} style={style} {...bind}>
      <Grid container spacing={0} alignItems="center">
        <Hidden smDown>
          <Grid item md={1}>
            <Checkbox
              checked={itemIsChecked}
              onChange={handleCheckboxChange}
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
                <AddToCartButton data={[cartData]} />
                {itemIsInCart && (
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
}

export default PlasmidCatalogListItem
