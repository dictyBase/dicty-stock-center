import React from "react"
import { useQuery } from "@apollo/client"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"
import CatalogHeader from "features/Stocks/Catalogs/common/CatalogHeader"
import CatalogErrorMessage from "features/Stocks/Catalogs/common/CatalogErrorMessage"
import CatalogAppBar from "features/Stocks/Catalogs/common/CatalogAppBar"
import StrainCatalogList from "./StrainCatalogList"
import {
  useCatalogStore,
  CatalogActionType,
} from "features/Stocks/Catalogs/common/CatalogContext"
import useSearchQuery from "common/hooks/useSearchQuery"
import {
  GET_STRAIN_LIST,
  GET_BACTERIAL_STRAIN_LIST,
} from "common/graphql/queries"
import useStyles from "features/Stocks/Catalogs/styles"

const leftDropdownItems = [
  {
    name: "All Strains",
    value: "all",
  },
  {
    name: "GWDI Strains",
    value: "gwdi",
  },
  {
    name: "Available Strains",
    value: "available",
  },
  {
    name: "Unavailable Strains",
    value: "unavailable",
  },
  {
    name: "Bacterial Strains",
    value: "bacterial",
  },
]

const rightDropdownItems = [
  {
    name: "Descriptor",
    value: "label",
  },
  {
    name: "Summary",
    value: "summary",
  },
  {
    name: "ID",
    value: "id",
  },
]

const normalizeBacterialStrainsData = (data: any) => ({
  listStrains: {
    __typename: data.bacterialFoodSource.__typename,
    nextCursor: 0,
    totalCount:
      data.bacterialFoodSource.totalCount +
      data.symbioticFarmerBacterium.totalCount,
    strains: [
      ...data.bacterialFoodSource.strains,
      ...data.symbioticFarmerBacterium.strains,
    ],
  },
})

/**
 * StrainCatalogContainer is the main component for the strain catalog page.
 * It is responsible for fetching the data and passing it down to more specific features.
 */

const StrainCatalogContainer = () => {
  const searchQuery = useSearchQuery()
  const filter = searchQuery.get("filter")
  const [hasMore, setHasMore] = React.useState(true)
  const {
    state: { query, queryVariables },
    dispatch,
  } = useCatalogStore()
  const { loading, error, data, fetchMore } = useQuery(query, {
    variables: queryVariables,
  })
  const classes = useStyles()

  React.useEffect(() => {
    const updateData = async () => {
      switch (filter) {
        case "all":
          dispatch({
            type: CatalogActionType.SET_QUERY,
            payload: GET_STRAIN_LIST,
          })
          dispatch({
            type: CatalogActionType.SET_QUERY_VARIABLES,
            payload: {
              cursor: 0,
              limit: 10,
              filter: "",
            },
          })
          break
        case "bacterial":
          dispatch({
            type: CatalogActionType.SET_QUERY,
            payload: GET_BACTERIAL_STRAIN_LIST,
          })
          break
        case "gwdi":
          dispatch({
            type: CatalogActionType.SET_QUERY,
            payload: GET_STRAIN_LIST,
          })
          dispatch({
            type: CatalogActionType.SET_QUERY_VARIABLES,
            payload: {
              cursor: 0,
              limit: 10,
              filter: "label=~gwdi",
            },
          })
          break
        default:
          return
      }
    }

    updateData()
  }, [dispatch, filter])

  let content = <div />

  if (error) {
    content = <CatalogErrorMessage error={error} />
  }

  const loadMoreItems = async () => {
    const newCursor = data.listStrains.nextCursor
    if (newCursor === 0) {
      setHasMore(false)
      return
    }
    await fetchMore({
      query,
      variables: {
        cursor: data.listStrains.nextCursor,
        filter: queryVariables.filter,
        limit: queryVariables.limit,
      },
    })
  }

  if (data && data.bacterialFoodSource) {
    const bacterial = normalizeBacterialStrainsData(data)
    content = (
      <StrainCatalogList
        data={bacterial.listStrains.strains}
        loadMoreItems={() => {}}
        hasMore={hasMore}
      />
    )
  }
  if (data && data.listStrains) {
    content = (
      <StrainCatalogList
        data={data.listStrains.strains}
        loadMoreItems={loadMoreItems}
        hasMore={hasMore}
      />
    )
  }

  return (
    <Grid container className={classes.layout}>
      <Grid item xs={12}>
        <CatalogHeader title="Strain Catalog" />
      </Grid>
      <Grid item xs={12}>
        <CatalogAppBar
          leftDropdownItems={leftDropdownItems}
          rightDropdownItems={rightDropdownItems}
        />
      </Grid>
      <Grid item xs={12}>
        {loading && (
          <div className={classes.spinner}>
            <CircularProgress size={100} />
          </div>
        )}
        {content}
      </Grid>
    </Grid>
  )
}

export default StrainCatalogContainer
