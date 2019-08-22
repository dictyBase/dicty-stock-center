// @flow
import React, { useState } from "react"
import gql from "graphql-tag"
import { FixedSizeList } from "react-window"
import AutoSizer from "react-virtualized-auto-sizer"
import InfiniteLoader from "react-window-infinite-loader"
import { makeStyles } from "@material-ui/styles"
import Paper from "@material-ui/core/Paper"
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
})

const StrainCatalogList = ({ data, fetchMore, cursor }) => {
  const [checkedItems, setCheckedItems] = useState([])
  const classes = useStyles()

  const handleChange = (id, label) => event => {
    // if (checkedItems.some(item => item.id)) {
    //   const newArr = checkedItems.filter(item => item.id !== id)
    //   return setCheckedItems(newArr)
    // } else {
    setCheckedItems([...checkedItems, { id, label }])
    // }
  }
  console.log(checkedItems)
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
      <StrainCatalogListHeader
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isItemLoaded={({ index }) => !!data[index]}
            itemCount={30000}
            loadMoreItems={loadMoreItems}>
            {({ onItemsRendered, ref }) => (
              <FixedSizeList
                onItemsRendered={onItemsRendered}
                ref={ref}
                height={535}
                width={width}
                itemSize={50}
                itemCount={data.length}
                itemData={{ item: data, handleChange, checkedItems }}>
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
