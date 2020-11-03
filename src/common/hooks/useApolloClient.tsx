import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { mutationList } from "common/graphql/mutations"
import { StrainWithPhenotype } from "features/Stocks/Details/types/props"
import { StrainItem, PlasmidItem } from "features/Stocks/Catalogs/types/list"

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

interface SearchInfo {
  nextCursor: number
  totalCount: number
  __typename: string
}

interface ListStrainsWithPhenotype extends SearchInfo {
  strains: Array<StrainWithPhenotype>
}

interface ListStrains extends SearchInfo {
  strains: Array<StrainItem>
}

interface ListPlasmids extends SearchInfo {
  plasmids: Array<PlasmidItem>
}

const listStrainsWithPhenotypePagination = () => ({
  keyArgs: ["phenotype"],
  merge(
    existing: ListStrainsWithPhenotype,
    incoming: ListStrainsWithPhenotype,
  ) {
    let strains: ListStrainsWithPhenotype["strains"] = []
    let totalCount: ListStrainsWithPhenotype["totalCount"] = 0
    if (existing && existing.strains) {
      strains = strains.concat(existing.strains)
      totalCount = existing.totalCount
    }
    if (incoming && incoming.strains) {
      strains = strains.concat(incoming.strains)
      totalCount = totalCount + incoming.totalCount
    }
    return {
      ...incoming,
      strains,
      totalCount,
    }
  },
  read(existing: ListStrainsWithPhenotype) {
    return existing
  },
})

const listStrainsPagination = () => ({
  keyArgs: ["filter"],
  merge(existing: ListStrains, incoming: ListStrains) {
    let strains: ListStrains["strains"] = []
    // let totalCount: ListStrains["totalCount"] = 0
    if (existing && existing.strains) {
      strains = strains.concat(existing.strains)
      // totalCount = existing.totalCount
    }
    if (incoming && incoming.strains) {
      strains = strains.concat(incoming.strains)
      // totalCount = totalCount + incoming.totalCount
    }
    return {
      ...incoming,
      strains,
      // totalCount,
    }
  },
  read(existing: ListStrains) {
    return existing
  },
})

const listPlasmidsPagination = () => ({
  keyArgs: ["filter"],
  merge(existing: ListPlasmids, incoming: ListPlasmids) {
    let plasmids: ListPlasmids["plasmids"] = []
    // let totalCount: ListPlasmids["totalCount"] = 0
    if (existing && existing.plasmids) {
      plasmids = plasmids.concat(existing.plasmids)
      // totalCount = existing.totalCount
    }
    if (incoming && incoming.plasmids) {
      plasmids = plasmids.concat(incoming.plasmids)
      // totalCount = totalCount + incoming.totalCount
    }
    return {
      ...incoming,
      plasmids,
      // totalCount,
    }
  },
  read(existing: ListPlasmids) {
    return existing
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

  return new ApolloClient({
    cache,
    link,
  })
}

export { isMutation, getGraphQLServer, listStrainsWithPhenotypePagination }
export default useApolloClient
