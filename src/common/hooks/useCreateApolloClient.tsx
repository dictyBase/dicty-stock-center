import React from "react"
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist"
import localForage from "localforage"
import { mutationList } from "common/graphql/mutations"
import {
  listStrainsWithAnnotationPagination,
  listPlasmidsWithAnnotationPagination,
  listStrainsPagination,
  listPlasmidsPagination,
} from "common/graphql/pagination"

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

const useCreateApolloClient = () => {
  const [cacheInitializing, setCacheInitializing] = React.useState(true)

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

  React.useEffect(() => {
    const initializeCache = async () => {
      await persistCache({
        cache,
        storage: new LocalStorageWrapper(localForage),
        key: "dsc-apollo-cache-persist",
      })
      setCacheInitializing(false)
    }

    initializeCache()
  }, [])

  const client = new ApolloClient({
    cache,
    link,
  })

  return { client, cacheInitializing }
}

export { isMutation, getGraphQLServer }
export default useCreateApolloClient
