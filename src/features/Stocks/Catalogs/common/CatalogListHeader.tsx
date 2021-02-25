import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Checkbox from "@material-ui/core/Checkbox"
import Hidden from "@material-ui/core/Hidden"
import CatalogListHeaderButtons from "./CatalogListHeaderButtons"
import CatalogListHeaderGrid from "./CatalogListHeaderGrid"
import useCheckboxes from "common/hooks/useCheckboxes"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"

const useStyles = makeStyles((theme: Theme) => ({
  listHeaders: {
    borderBottom: "1px solid #888",
    backgroundColor: "#f6f9fc",
    color: "#525f7f",
    fontWeight: 600,
    "@media (max-width: 1024px)": {
      fontSize: "0.85rem",
    },
  },
  list: {
    padding: theme.spacing(0),
  },
}))

type Props = {
  /** Type of stock */
  stockType: "strain" | "plasmid"
}

/**
 * CatalogListHeader contains the list of headers (i.e.
 * descriptor, summary, etc) at the top of the catalog page.
 */

const CatalogListHeader = ({ stockType }: Props) => {
  const {
    state: { checkedItems },
  } = useCatalogStore()
  const { handleCheckAllChange } = useCheckboxes()
  const classes = useStyles()
  const checkedItemsLength = checkedItems.length

  let headerValues = [] as Array<string>
  if (stockType === "strain") {
    headerValues = ["Strain Descriptor", "Strain Summary", "Strain ID"]
  } else {
    headerValues = ["Plasmid Name", "Description", "Plasmid ID"]
  }

  let content = <CatalogListHeaderGrid values={headerValues} />

  if (checkedItemsLength > 0) {
    content = <CatalogListHeaderButtons />
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listHeaders}>
        <Grid container spacing={0} alignItems="center">
          <Hidden xsDown>
            <Grid item sm={1}>
              {checkedItemsLength > 0 && (
                <Checkbox
                  indeterminate={true}
                  color="default"
                  value="selectAll"
                  onChange={handleCheckAllChange}
                  inputProps={{
                    "aria-label": "checkbox select all",
                  }}
                />
              )}
            </Grid>
          </Hidden>
          {content}
        </Grid>
      </ListItem>
    </List>
  )
}

export default CatalogListHeader
