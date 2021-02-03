import React from "react"
import { FixedSizeList } from "react-window"
import AutoSizer from "react-virtualized-auto-sizer"
import InfiniteLoader from "react-window-infinite-loader"
import Paper from "@material-ui/core/Paper"
import useStyles from "features/Stocks/Catalogs/styles"

type Props = {
  data: Array<any>
  loadMoreItems: (startIndex: number, stopIndex: number) => Promise<any> | null
  children: any
  headerComponent?: React.ReactNode
  rowHeight?: number
  hasMore: boolean
}

/**
 * VirtualizedList provides a virtualized list of data
 * (via react-window).
 */
const VirtualizedList = ({
  data,
  loadMoreItems,
  children,
  headerComponent,
  rowHeight,
  hasMore,
}: Props) => {
  const classes = useStyles()

  const itemCount = hasMore ? data.length + 1 : data.length
  const isItemLoaded = (index: number) => !hasMore || index < data.length

  return (
    <Paper className={classes.catalogPaper}>
      {headerComponent}
      <AutoSizer>
        {({ width }) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}>
            {({ onItemsRendered, ref }) => (
              <FixedSizeList
                onItemsRendered={onItemsRendered}
                ref={ref}
                height={535}
                width={width}
                itemSize={rowHeight ? rowHeight : 50}
                itemCount={data.length}
                // pass props to list item via itemData
                itemData={{
                  item: data,
                }}>
                {children}
              </FixedSizeList>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </Paper>
  )
}

export default VirtualizedList
