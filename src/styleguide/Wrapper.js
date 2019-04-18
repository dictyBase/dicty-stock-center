import React, { Component } from "react"
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "reducers"
const client = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_SERVER}/graphql`,
})
let store = createStore(rootReducer)
export default class Wrapper extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>{this.props.children}</BrowserRouter>
        </Provider>
      </ApolloProvider>
    )
  }
}
