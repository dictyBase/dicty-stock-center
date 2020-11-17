import React, { useCallback, useRef } from "react"
import { useQuery } from "@apollo/client"
import { Header, Footer } from "dicty-components-header-footer"
import { Navbar } from "dicty-components-navbar"
import jwtDecode from "jwt-decode"
import { CartProvider } from "features/ShoppingCart/CartStore"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { useFetchRefreshToken, useFooter, useNavbar } from "dicty-hooks"
import {
  headerItems,
  loggedHeaderItems,
  generateLinks,
} from "common/utils/headerItems"
import CartIcon from "features/ShoppingCart/CartIcon"
import ErrorBoundary from "features/Errors/ErrorBoundary"
import RenderRoutes from "app/routes/RenderRoutes"
import { useAuthStore, ActionType } from "features/Authentication/AuthStore"
import { GET_REFRESH_TOKEN } from "common/graphql/queries/auth"
import { User } from "common/@types/user"
import { useStyles, navTheme } from "./appStyles"

type HeaderProps = {
  /** Identifies if header link should use React Router */
  isRouter?: boolean
  /** Text to display in link */
  text: string
  /** Font Awesome Icon to display */
  icon: IconProp
  /** URL of link */
  url: string
}

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

type RefreshTokenData = {
  token: string
  user: User
  identity: {
    provider: string
  }
}

type Action = {
  type: string
  payload: {
    provider: string
    token: string
    user: User
  }
}

const updateToken = (
  dispatch: (arg0: Action) => void,
  data: RefreshTokenData,
) =>
  dispatch({
    type: ActionType.UPDATE_TOKEN,
    payload: {
      provider: data.identity.provider,
      token: data.token,
      user: data.user,
    },
  })

const App = () => {
  const [skip, setSkip] = React.useState(false)
  const [{ isAuthenticated, token }, dispatch] = useAuthStore()
  const { navbarData } = useNavbar()
  const { footerData } = useFooter()
  const classes = useStyles()
  const { loading, refetch, data } = useQuery(GET_REFRESH_TOKEN, {
    variables: { token: token },
    errorPolicy: "ignore",
    skip, // only run query once
  })
  const interval = useRef<any>(null)
  const delay = getTokenIntervalDelayInMS(token)

  // set skip to true so the query is only run once
  // then update the refresh token in our global state
  // https://github.com/trojanowski/react-apollo-hooks/issues/157#issuecomment-491151909
  React.useEffect(() => {
    if (!loading && data && data.getRefreshToken) {
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
      <Header items={headerContent}>
        {(items: Array<HeaderProps>) => items.map(generateLinks)}
      </Header>
      <Navbar items={navbarData} theme={navTheme} />
      <br />
      <CartProvider>
        <main className={classes.main}>
          <CartIcon />
          <ErrorBoundary>
            <RenderRoutes />
          </ErrorBoundary>
        </main>
      </CartProvider>
      <Footer items={footerData} />
    </div>
  )
}

export { getTokenIntervalDelayInMS }
export default App
