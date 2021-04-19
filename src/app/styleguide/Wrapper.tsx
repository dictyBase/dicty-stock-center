import React from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { Formik } from "formik"
import { AuthProvider } from "features/Authentication/AuthStore"
import { CatalogProvider } from "features/Stocks/Catalogs/context/CatalogContext"
import { CartProvider } from "features/ShoppingCart/CartStore"
import useApolloClient from "common/hooks/useApolloClient"
import { theme } from "app/layout/AppProviders"

/**
 * This is a wrapper component used for all styleguidist documentation.
 */

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const { client, cacheInitializing } = useApolloClient()

  if (cacheInitializing) {
    return <CircularProgress />
  }

  return (
    <MuiThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <AuthProvider>
            <CartProvider>
              <CatalogProvider stockType="strain">
                <Formik initialValues={{}} onSubmit={() => {}}>
                  {children}
                </Formik>
              </CatalogProvider>
            </CartProvider>
          </AuthProvider>
        </BrowserRouter>
      </ApolloProvider>
    </MuiThemeProvider>
  )
}

export default Wrapper
