import React, { useEffect, useState } from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"
// import { persistCache } from "apollo-cache-persist"
// import { createPersistedQueryLink } from "apollo-link-persisted-queries"
import { BrowserRouter } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { useAuthStore } from "components/authentication/AuthStore"
import { CartProvider } from "components/ShoppingCart/CartStore"

const createClient = async token => {
  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }))
  // const link = createPersistedQueryLink().concat(
  const link = authLink.concat(
    createHttpLink({
      uri: `${process.env.REACT_APP_GRAPHQL_SERVER}/graphql`,
      credentials: "include",
    }),
  )
  // )
  const cache = new InMemoryCache()
  // await persistCache({
  //   cache,
  //   storage: window.localStorage,
  // })
  const client = new ApolloClient({
    cache,
    link,
  })
  return client
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#004080",
    },
    secondary: {
      main: "rgb(220, 0, 78)",
    },
  },
  // typography: {
  //   button: {
  //     textTransform: "none",
  //   },
  // },
})

const AppProviders = ({ children }) => {
  const [client, setClient] = useState(undefined)
  const [{ token }] = useAuthStore()
  useEffect(() => {
    createClient(token).then(apollo => setClient(apollo))
    return () => {}
  }, [token])

  if (client === undefined) return <div>Loading...</div>

  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
          <CartProvider>{children}</CartProvider>
        </BrowserRouter>
      </MuiThemeProvider>
    </ApolloProvider>
  )
}

export default AppProviders
