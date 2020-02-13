import { useEffect } from "react"
import { useMutation } from "@apollo/react-hooks"
import { useHistory } from "react-router-dom"
import querystring from "querystring"
import { useAuthStore, ActionType } from "components/authentication/AuthStore"
import { LOGIN } from "queries/queries"
import oauthConfig from "utils/oauthConfig"

/**
 * OauthSignHandler listens to an event message and attempts to login
 * with the event data.
 */

const OauthSignHandler = () => {
  const [login, { data }] = useMutation(LOGIN)
  const history = useHistory()
  const [, dispatch] = useAuthStore()

  useEffect(() => {
    const onMessage = async (event: MessageEvent) => {
      event.preventDefault()
      event.stopPropagation()
      if (!event.data.provider) {
        return
      }
      const provider = (oauthConfig as any)[event.data.provider]
      const parsed = querystring.parse(event.data.query.replace("?", ""))
      const res = await login({
        variables: {
          input: {
            client_id: provider.clientId,
            redirect_url: event.data.url,
            state: parsed.state,
            code: parsed.code,
            scopes: provider.scopes[0],
            provider: event.data.provider,
          },
        },
      })
      // need to add error handling
      history.push("/load/auth")
      if (res) {
        const { token, user, identity } = res.data.login
        await dispatch({
          type: ActionType.LOGIN,
          payload: {
            token: token,
            user: user,
            provider: identity.provider,
          },
        })
        history.push("/mydsc")
      }
    }
    window.addEventListener("message", onMessage, false)
    return () => {
      window.removeEventListener("message", onMessage)
    }
  }, [data, dispatch, history, login])

  return null
}

export default OauthSignHandler
