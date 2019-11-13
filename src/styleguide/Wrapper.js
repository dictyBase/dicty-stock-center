import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import createRootReducer from "reducers"
import history from "utils/routerHistory"

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_SERVER}/graphql`,
})

let store = createStore(createRootReducer(history))

/**
 * This is a wrapper component used for all styleguidist documentation.
 */

const Wrapper = ({ children }) => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  </ApolloProvider>
)

export default Wrapper
