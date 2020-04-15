import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"
import { BrowserRouter } from "react-router-dom"
import { CatalogProvider } from "features/Stocks/Catalogs/common/CatalogContext"
import { AppBarProvider } from "features/Stocks/Catalogs/common/AppBar/AppBarContext"
import { CartProvider } from "features/ShoppingCart/CartStore"

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_SERVER}/graphql`,
})

/**
 * This is a wrapper component used for all styleguidist documentation.
 */

const Wrapper = ({ children }: any) => (
  <ApolloProvider client={client}>
    <CartProvider>
      <CatalogProvider>
        <AppBarProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </AppBarProvider>
      </CatalogProvider>
    </CartProvider>
  </ApolloProvider>
)

export default Wrapper
