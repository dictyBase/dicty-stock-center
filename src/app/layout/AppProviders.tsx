import React, { ReactNode } from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { BrowserRouter } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { CartProvider } from "features/ShoppingCart/CartStore"
import useApolloClient from "common/hooks/useApolloClient"

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

export default AppProviders
