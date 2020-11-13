import React from "react"
import useCatalogStore from "features/Stocks/Catalogs/context/useCatalogStore"

/**
 * useLoadMoreItems provides a callback for fetching more data (generally used
 * for infinite scrolling).
 */

const useLoadMoreItems = () => {
  const [hasMore, setHasMore] = React.useState(true)
  const {
    state: { query, queryVariables },
  } = useCatalogStore()

  const loadMoreItems = async (data: any, fetchMore: any) => {
    const newCursor = data.nextCursor
    if (newCursor === 0) {
      setHasMore(false)
      return
    }
    await fetchMore({
      query,
      variables: {
        cursor: newCursor,
        filter: queryVariables.filter,
        limit: queryVariables.limit,
      },
    })
  }

  return {
    loadMoreItems,
    hasMore,
  }
}

export default useLoadMoreItems
