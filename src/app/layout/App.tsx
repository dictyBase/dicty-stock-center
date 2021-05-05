import React, { useCallback, useRef } from "react"
import Container from "@material-ui/core/Container"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import jwtDecode from "jwt-decode"
import {
  useGetRefreshTokenQuery,
  GetRefreshTokenQuery,
  User,
} from "dicty-graphql-schema"
import { CartProvider } from "features/ShoppingCart/CartStore"
import { useFetchRefreshToken, useFetch } from "dicty-hooks"
import HeaderRow from "./HeaderRow"
import ErrorBoundary from "features/Errors/ErrorBoundary"
import RenderRoutes from "app/routes/RenderRoutes"
import {
  headerItems,
  loggedHeaderItems,
  HeaderLinks,
} from "common/utils/headerItems"
import {
  footerLinks,
  footerURL,
  convertFooterData,
  FooterItems,
} from "common/utils/footerItems"
import {
  navbarItems,
  NavbarItems,
  navbarURL,
  formatNavbarData,
} from "common/utils/navbarItems"
import { navTheme, headerTheme, footerTheme } from "common/utils/themes"
import { useAuthStore, ActionType } from "features/Authentication/AuthStore"
import { useStyles } from "./appStyles"

const getTokenIntervalDelayInMS = (token: string) => {
  if (token === "") {
    return
  }
  const decodedToken = jwtDecode(token) as any
  const currentTime = new Date(Date.now())
  const jwtTime = new Date(decodedToken.exp * 1000)
  const timeDiffInMins = (+jwtTime - +currentTime) / 60000
  // all this to say we want the delay to be two minutes before the JWT expires
  return (timeDiffInMins - 2) * 60 * 1000
}

type Action = {
  type: ActionType.UPDATE_TOKEN
  payload: {
    provider: string
    token: string
    user: User
  }
}

const updateToken = (
  dispatch: (arg0: Action) => void,
  data: GetRefreshTokenQuery["getRefreshToken"],
) =>
  dispatch({
    type: ActionType.UPDATE_TOKEN,
    payload: {
      provider: data?.identity.provider as string,
      token: data?.token as string,
      user: data?.user as User,
    },
  })

const App = () => {
  const [skip, setSkip] = React.useState(false)
  const {
    state: { token, isAuthenticated },
    dispatch,
  } = useAuthStore()
  const navbar = useFetch<NavbarItems>(navbarURL, navbarItems)
  const footer = useFetch<FooterItems>(footerURL, footerLinks)
  const classes = useStyles()
  const { loading, refetch, data } = useGetRefreshTokenQuery({
    variables: { token: token },
    errorPolicy: "ignore",
    fetchPolicy: "no-cache",
    nextFetchPolicy: "no-cache",
    skip, // only run query once
  })
  const interval = useRef<any>(null)
  const delay = getTokenIntervalDelayInMS(token)

  // set skip to true so the query is only run once
  // then update the refresh token in our global state
  React.useEffect(() => {
    if (!loading && data?.getRefreshToken) {
      setSkip(true)
      updateToken(dispatch, data.getRefreshToken)
    }
  }, [data, dispatch, loading])

  const fetchRefreshToken = useCallback(async () => {
    try {
      const res = await refetch({ token: token })
      if (res.data.getRefreshToken) {
        const { data } = res
        updateToken(dispatch, data.getRefreshToken)
      }
    } catch (error) {
      console.error(error)
    }
  }, [dispatch, refetch, token])
  useFetchRefreshToken(fetchRefreshToken, interval, delay!, isAuthenticated)

  const headerContent = isAuthenticated ? loggedHeaderItems : headerItems

  return (
    <div className={classes.body}>
      <Header items={headerContent} render={HeaderLinks} theme={headerTheme} />
      <Navbar items={formatNavbarData(navbar.data)} theme={navTheme} />
      <CartProvider>
        <main className={classes.main}>
          <Container maxWidth="lg">
            <HeaderRow />
            <ErrorBoundary>
              <RenderRoutes />
            </ErrorBoundary>
          </Container>
        </main>
      </CartProvider>
      {footer.data?.data && (
        <Footer
          links={convertFooterData(footer.data.data)}
          theme={footerTheme}
        />
      )}
    </div>
  )
}

export { getTokenIntervalDelayInMS }
export default App
