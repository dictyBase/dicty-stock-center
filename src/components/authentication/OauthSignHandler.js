// @flow
import { useEffect } from "react"
import { useMutation } from "@apollo/react-hooks"
import { LOGIN } from "queries/queries"
import oauthConfig from "utils/oauthConfig"
import querystring from "querystring"
import { useHistory } from "react-router-dom"

const OauthSignHandler = () => {
  const [login] = useMutation(LOGIN)
  const history = useHistory()

  useEffect(() => {
    const onMessage = async (event: SyntheticInputEvent<>) => {
      event.preventDefault()
      event.stopPropagation()
      const provider = event.data.provider
      if (!provider) {
        return
      }
      const parsed = querystring.parse(event.data.query.replace("?", ""))
      await login({
        variables: {
          input: {
            client_id: oauthConfig[provider].clientId,
            redirect_url: event.data.url,
            state: parsed.state,
            code: parsed.code,
            scopes: oauthConfig[provider].scopes[0],
            provider: provider,
          },
        },
      })
      // need to add error handling
      history.push("/load/auth")
    }
    window.addEventListener("message", onMessage, false)
    return () => {
      window.removeEventListener("message", onMessage)
    }
  }, [history, login])

  return null
}

export default OauthSignHandler
