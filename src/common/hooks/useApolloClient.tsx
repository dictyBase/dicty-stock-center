import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { mutationList } from "common/graphql/mutations"
import {
  listStrainsWithPhenotypePagination,
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
        listStrainsWithPhenotype: listStrainsWithPhenotypePagination(),
      },
    },
  },
})

const useApolloClient = () => {
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

  return new ApolloClient({
    cache,
    link,
  })
}

export { isMutation, getGraphQLServer }
export default useApolloClient
