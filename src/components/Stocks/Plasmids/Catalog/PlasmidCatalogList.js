// @flow
import React, { useState } from "react"
import gql from "graphql-tag"
import { FixedSizeList } from "react-window"
import AutoSizer from "react-virtualized-auto-sizer"
import InfiniteLoader from "react-window-infinite-loader"
import { makeStyles } from "@material-ui/styles"
import Paper from "@material-ui/core/Paper"
import CatalogListHeader from "components/Stocks/CatalogPageItems/CatalogListHeader"
import PlasmidCatalogListItem from "components/Stocks/Plasmids/Catalog/PlasmidCatalogListItem"

const GET_MORE_PLASMIDS_LIST = gql`
  query MorePlasmidsList($cursor: Int!) {
    listPlasmids(input: { cursor: $cursor, limit: 10 }) {
      totalCount
      nextCursor
      plasmids {
        id
        name
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
})

type Props = {
  data: Array<{
    label: string,
    id: string,
    summary: string,
  }>,
  fetchMore: Function,
  cursor: number,
}

/**
 * PlasmidCatalogList provides the virtualized list of data
 * (via react-window) and handles the checkbox state.
 */

const PlasmidCatalogList = ({ data, fetchMore, cursor }: Props) => {
  const [checkedItems, setCheckedItems] = useState([])
  const [dialogOpen, setDialogOpen] = useState(false)
  const classes = useStyles()

  const handleCheckboxChange = (id, label, summary) => event => {
    // if checkbox is already checked, remove that item from state
    if (checkedItems.some(item => item.id === id)) {
      setCheckedItems(checkedItems.filter(item => item.id !== id))
    } else {
      setCheckedItems([...checkedItems, { id, label, summary }])
    }
  }

  const handleCheckAllChange = () => {
    if (checkedItems.length > 0) {
      setCheckedItems([])
    }
  }

  const loadMoreItems = () =>
    fetchMore({
      query: GET_MORE_PLASMIDS_LIST,
      variables: {
        cursor: cursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult
        const previousEntry = previousResult.listPlasmids
        const newPlasmids = fetchMoreResult.listPlasmids.plasmids
        const newCursor = fetchMoreResult.listPlasmids.nextCursor
        const allPlasmids = [...previousEntry.plasmids, ...newPlasmids]

        return {
          listPlasmids: {
            nextCursor: newCursor,
            plasmids: [...new Set(allPlasmids)], // remove any duplicate entries
            __typename: previousEntry.__typename,
          },
        }
      },
    })

  return (
    <Paper className={classes.catalogPaper}>
      <CatalogListHeader
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        handleCheckAllChange={handleCheckAllChange}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        stockType="plasmid"
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
                // pass props to PlasmidCatalogListItem via itemData
                itemData={{
                  item: data,
                  handleCheckboxChange,
                  checkedItems,
                }}>
                {PlasmidCatalogListItem}
              </FixedSizeList>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </Paper>
  )
}

export default PlasmidCatalogList
