import React, { ReactNode } from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"
import { BrowserRouter } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { useAuthStore } from "features/Authentication/AuthStore"
import { CartProvider } from "features/ShoppingCart/CartStore"
import { mutationList } from "common/graphql/mutations"
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#004080",
    },
    secondary: {
      main: "#b2102f",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        a: {
          textDecoration: "none",
          color: "#004080",
          "&:hover": {
            color: "#001b53",
          },
        },
      },
    },
  },
})

const isMutation = (value: string) => {
  if (mutationList.includes(value)) {
    return true
  }
  return false
}

const useApolloClient = () => {
  const [{ token }] = useAuthStore()

  const authLink = setContext((request, { headers }) => {
    const mutation = isMutation(request.operationName || "")
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
        "X-GraphQL-Method": mutation ? "Mutation" : "Query",
      },
    }
  })

  const link = authLink.concat(
    createHttpLink({
      uri: `${process.env.REACT_APP_GRAPHQL_SERVER}/graphql`,
      credentials: "include",
    }),
  )

  const cache = new InMemoryCache()

  return new ApolloClient({
    cache,
    link,
  })
}

const AppProviders = ({ children }: { children: ReactNode }) => {
  const apolloClient = useApolloClient()

  return (
    <ApolloProvider client={apolloClient}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
          <CartProvider>{children}</CartProvider>
        </BrowserRouter>
      </MuiThemeProvider>
    </ApolloProvider>
  )
}

export { isMutation }
export default AppProviders
