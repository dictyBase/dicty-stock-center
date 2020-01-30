// @flow
import { useEffect } from "react"
import { oAuthLogin } from "actions/auth"
import { connect } from "react-redux"

type Props = {
  oAuthLogin: Function,
}

const OauthSignHandler = ({ oAuthLogin }: Props) => {
  useEffect(() => {
    const onMessage = (event: SyntheticInputEvent<>) => {
      event.preventDefault()
      event.stopPropagation()
      if (!event.data.provider) {
        return
      }
      oAuthLogin(event.data)
    }
    window.addEventListener("message", onMessage, false)
    return () => {
      window.removeEventListener("message", onMessage)
    }
  }, [oAuthLogin])

  return null
}

export default connect<*, *, *, *, *, *>(null, { oAuthLogin })(OauthSignHandler)
