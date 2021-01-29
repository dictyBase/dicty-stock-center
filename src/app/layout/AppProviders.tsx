import React, { ReactNode } from "react"
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { CartProvider } from "features/ShoppingCart/CartStore"
import useApolloClient from "common/hooks/useApolloClient"

const theme = createMuiTheme({
  // use color tool for palette -- https://material.io/resources/color/
  palette: {
    primary: {
      main: "#004080",
      light: "#476ab0",
      dark: "#001b53",
    },
    secondary: {
      main: "#008080",
      light: "#4cb0af",
      dark: "#005354",
    },
    error: {
      main: "#b2102f",
      light: "#ea4f58",
      dark: "#7b0008",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: "2.00em",
    },
    h2: {
      fontSize: "1.50em",
    },
    h3: {
      fontSize: "1.17em",
    },
    h4: {
      fontSize: "1.00em",
    },
    h5: {
      fontSize: "0.83em",
    },
    h6: {
      fontSize: "0.67em",
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

export { theme }
export default AppProviders
