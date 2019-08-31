// @flow
import React, { useState } from "react"
import gql from "graphql-tag"
import { FixedSizeList } from "react-window"
import AutoSizer from "react-virtualized-auto-sizer"
import InfiniteLoader from "react-window-infinite-loader"
import { makeStyles } from "@material-ui/styles"
import Paper from "@material-ui/core/Paper"
import CatalogListHeader from "components/Stocks/CatalogPageItems/CatalogListHeader"
import StrainCatalogListItem from "components/Stocks/Strains/Catalog/StrainCatalogListItem"

const GET_MORE_STRAINS_LIST = gql`
  query MoreStrainsList($cursor: Int!, $filter: String) {
    listStrains(input: { cursor: $cursor, limit: 10, filter: $filter }) {
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
})

type Props = {
  data: Array<{
    label: string,
    id: string,
    summary: string,
  }>,
  fetchMore: Function,
  cursor: number,
  filter: string,
}

/**
 * StrainCatalogList provides the virtualized list of data
 * (via react-window) and handles the checkbox state.
 */

const StrainCatalogList = ({ data, fetchMore, cursor, filter }: Props) => {
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
      query: GET_MORE_STRAINS_LIST,
      variables: {
        cursor: cursor,
        filter: filter,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult
        const previousEntry = previousResult.listStrains
        const previousStrains = previousEntry.strains
        const newStrains = fetchMoreResult.listStrains.strains
        const newCursor = fetchMoreResult.listStrains.nextCursor
        const allStrains = [...previousStrains, ...newStrains]

        // fix issue where response always brings back a duplicate of last item;
        // check if first item of new batch equals last item of previous batch
        // if dupes, then remove it
        if (
          newStrains[0].id === previousStrains[previousStrains.length - 1].id
        ) {
          allStrains.pop()
        }

        return {
          listStrains: {
            nextCursor: newCursor,
            strains: [...new Set(allStrains)], // remove any duplicate entries
            __typename: previousEntry.__typename,
          },
        }
      },
    })

  const isItemLoaded = ({ index }) => !!data[index]

  return (
    <Paper className={classes.catalogPaper}>
      <CatalogListHeader
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        handleCheckAllChange={handleCheckAllChange}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        stockType="strain"
      />
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
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
                // pass props to StrainCatalogListItem via itemData
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
