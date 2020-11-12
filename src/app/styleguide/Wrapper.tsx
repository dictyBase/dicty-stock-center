import React from "react"
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { Formik } from "formik"
import { AuthProvider } from "features/Authentication/AuthStore"
import { CatalogProvider } from "features/Stocks/Catalogs/context/CatalogContext"
import { CartProvider } from "features/ShoppingCart/CartStore"
import useApolloClient from "common/hooks/useApolloClient"

/**
 * This is a wrapper component used for all styleguidist documentation.
 */

const Wrapper = ({ children }: any) => {
  const client = useApolloClient()

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <CartProvider>
          <CatalogProvider>
            <BrowserRouter>
              <Formik initialValues={{}} onSubmit={() => {}}>
                {children}
              </Formik>
            </BrowserRouter>
          </CatalogProvider>
        </CartProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default Wrapper
