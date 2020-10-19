import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { mutationList } from "common/graphql/mutations"

const isMutation = (value: string) => {
  if (mutationList.includes(value)) {
    return true
  }
  return false
}

let deployEnv = process.env.DEPLOY_ENV
let graphqlServer = process.env.REACT_APP_GRAPHQL_SERVER

if (
  deployEnv === "staging" &&
  window.location.origin === "https://dictycr.org"
) {
  graphqlServer = process.env.REACT_APP_ALT_GRAPHQL_SERVER
}

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

  const link = authLink.concat(
    createHttpLink({
      uri: `${graphqlServer}/graphql`,
      credentials: "include",
    }),
  )

  const cache = new InMemoryCache()

  return new ApolloClient({
    cache,
    link,
  })
}

export { isMutation }
export default useApolloClient
