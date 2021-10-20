import React from "react"
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  DefaultOptions,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { CachePersistor, LocalStorageWrapper } from "apollo3-cache-persist"
import localForage from "localforage"
import { version as SCHEMA_VERSION } from "dicty-graphql-schema/package.json"
import {
  listStrainsWithAnnotationPagination,
  listPlasmidsWithAnnotationPagination,
  listStrainsPagination,
  listPlasmidsPagination,
} from "common/graphql/pagination"

const SCHEMA_VERSION_KEY = "dsc-apollo-schema-version"
const DSC_CACHE_KEY = "dsc-apollo-cache-persist"

const mutationList = ["Logout", "CreateContent", "UpdateContent"]

const isMutation = (value: string) => {
  if (mutationList.includes(value)) {
    return true
  }
  return false
}

const getGraphQLServer = (url: string, deployEnv: string, origin: string) => {
  if (deployEnv === "staging" && origin === "https://dictycr.org") {
    return process.env.REACT_APP_ALT_GRAPHQL_SERVER
  }
  return url
}

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        listPlasmids: listPlasmidsPagination(),
        listStrains: listStrainsPagination(),
        listStrainsWithAnnotation: listStrainsWithAnnotationPagination(),
        listPlasmidsWithAnnotation: listPlasmidsWithAnnotationPagination(),
      },
    },
  },
})

const authLink = setContext((request, { headers }) => {
  const mutation = isMutation(request.operationName || "")
  return {
    headers: {
      ...headers,
      "X-GraphQL-Method": mutation ? "Mutation" : "Query",
    },
  }
})

const server = getGraphQLServer(
  process.env.REACT_APP_GRAPHQL_SERVER,
  process.env.DEPLOY_ENV,
  window.location.origin,
)

const link = authLink.concat(
  createHttpLink({
    uri: `${server}/graphql`,
    credentials: "include",
  }),
)

const getDefaultApolloConfig = (): DefaultOptions | undefined => {
  if (process.env.REACT_APP_CACHE == "disable") {
    return {
      query: {
        fetchPolicy: "no-cache",
      },
    }
  }
  return undefined
}

const useCreateApolloClient = () => {
  const [cacheInitializing, setCacheInitializing] = React.useState(true)

  React.useEffect(() => {
    const initializeCache = async () => {
      const persistor = new CachePersistor({
        cache,
        storage: new LocalStorageWrapper(localForage),
        key: DSC_CACHE_KEY,
      })
      const currentVersion = await localForage.getItem(SCHEMA_VERSION_KEY)
      if (currentVersion === SCHEMA_VERSION) {
        // If the current version matches the latest version,
        // we're good to go and can restore the cache.
        await persistor.restore()
      } else {
        // Otherwise, we'll want to purge the outdated persisted cache
        // and mark ourselves as having updated to the latest version.
        await persistor.purge()
        await localForage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION)
      }
      setCacheInitializing(false)
    }

    initializeCache()
  }, [])

  const client = new ApolloClient({
    cache,
    link,
    defaultOptions: getDefaultApolloConfig(),
  })
  return { client, cacheInitializing }
}

export { isMutation, getGraphQLServer, getDefaultApolloConfig }
export default useCreateApolloClient
