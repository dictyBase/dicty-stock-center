// @flow
import React, { useState } from "react"
import gql from "graphql-tag"
import { FixedSizeList } from "react-window"
import AutoSizer from "react-virtualized-auto-sizer"
import InfiniteLoader from "react-window-infinite-loader"
import { makeStyles } from "@material-ui/styles"
import Paper from "@material-ui/core/Paper"
import Drawer from "@material-ui/core/Drawer"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import StrainCatalogListHeader from "components/Stocks/Strains/Catalog/StrainCatalogListHeader"
import StrainCatalogListItem from "components/Stocks/Strains/Catalog/StrainCatalogListItem"

const GET_MORE_STRAINS_LIST = gql`
  query MoreStrainsList($cursor: Int!) {
    listStrains(input: { cursor: $cursor, limit: 10 }) {
      nextCursor
      strains {
        id
        label
        summary
        in_stock
      }
    }
  }
`

const useStyles = makeStyles({
  catalogPaper: {
    height: 600,
    width: "100%",
  },
  drawerPaper: {
    position: "relative",
    width: "240px",
  },
})

type Props = {
  data: Array<{
    label: string,
    id: string,
    summary: string,
  }>,
  fetchMore: Function,
  cursor: number,
  drawerOpen: boolean,
}

const StrainCatalogList = ({ data, fetchMore, cursor, drawerOpen }: Props) => {
  const [checkedItems, setCheckedItems] = useState([])
  const classes = useStyles()

  const handleCheckboxChange = (id, label) => event => {
    // if checkbox is already checked, remove that item from state
    if (checkedItems.some(item => item.id === id)) {
      setCheckedItems(checkedItems.filter(item => item.id !== id))
    } else {
      setCheckedItems([...checkedItems, { id, label }])
    }
  }

  const handleCheckAllChange = () => {
    if (checkedItems.length > 0) {
      setCheckedItems([])
    }
  }

  const loadMoreItems = () =>
    fetchMore({
      query: GET_MORE_STRAINS_LIST,
      variables: {
        cursor: cursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult
        const previousEntry = previousResult.listStrains
        const newStrains = fetchMoreResult.listStrains.strains
        const newCursor = fetchMoreResult.listStrains.nextCursor
        const allStrains = [...previousEntry.strains, ...newStrains]

        return {
          listStrains: {
            nextCursor: newCursor,
            strains: [...new Set(allStrains)], // remove any duplicate entries
            __typename: previousEntry.__typename,
          },
        }
      },
    })

  return (
    <Paper className={classes.catalogPaper}>
      {/* <Drawer
        variant="persistent"
        open={drawerOpen}
        classes={{ paper: classes.drawerPaper }}>
        <FormControlLabel
          control={<Checkbox value="gwdi" />}
          label="GWDI Strains"
        />
      </Drawer> */}
      <StrainCatalogListHeader
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        handleCheckAllChange={handleCheckAllChange}
      />
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isItemLoaded={({ index }) => !!data[index]}
            itemCount={data.length}
            loadMoreItems={loadMoreItems}>
            {({ onItemsRendered, ref }) => (
              <FixedSizeList
                onItemsRendered={onItemsRendered}
                ref={ref}
                height={535}
                width={width}
                itemSize={50}
                itemCount={data.length}
                itemData={{
                  item: data,
                  handleCheckboxChange,
                  checkedItems,
                }}>
                {StrainCatalogListItem}
              </FixedSizeList>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </Paper>
  )
}

export default StrainCatalogList
