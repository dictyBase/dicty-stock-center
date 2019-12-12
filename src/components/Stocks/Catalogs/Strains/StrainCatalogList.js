// @flow
import React from "react"
import { FixedSizeList } from "react-window"
import AutoSizer from "react-virtualized-auto-sizer"
import InfiniteLoader from "react-window-infinite-loader"
import Paper from "@material-ui/core/Paper"
import CatalogListHeader from "components/Stocks/Catalogs/common/CatalogListHeader"
import StrainCatalogListItem from "./StrainCatalogListItem"
import { useCatalogStore } from "components/Stocks/Catalogs/common/CatalogContext"
import useStyles from "components/Stocks/Catalogs/styles"
import { CartItem } from "components/Stocks/Catalogs/types/cart"
import { GET_STRAIN_LIST } from "queries/queries"

type Props = {
  data: Array<CartItem>,
  fetchMore: Function,
  cursor: number,
}

/**
 * StrainCatalogList provides the virtualized list of data
 * (via react-window) and handles the checkbox state.
 */

const StrainCatalogList = ({ data, fetchMore, cursor }: Props) => {
  const [{ queryVariables }] = useCatalogStore()
  const classes = useStyles()

  const loadMoreItems = () =>
    fetchMore({
      query: GET_STRAIN_LIST,
      variables: {
        cursor: cursor,
        filter: queryVariables.filter,
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
      <CatalogListHeader stockType="strain" />
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
