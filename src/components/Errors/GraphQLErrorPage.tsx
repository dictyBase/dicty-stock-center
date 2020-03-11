// @flow
import React from "react"
import ServerError from "./ServerError"
import NotFoundError from "./NotFoundError"
import OtherError from "./OtherError"

type Props = {
  /** GraphQL error object */
  error: {
    message?: string
    networkError?: object
    graphQLErrors?: Array<{
      message: string
      path: Array<string>
      extensions?: {
        code: string
        timestamp: string
      }
    }>
  }
}

/**
 * GraphQLErrorPage is used to display any errors found when issuing a
 * GraphQL query or mutation.
 */

const GraphQLErrorPage = ({ error }: Props) => {
  if (!error || !error.message) return null

  if (error.networkError) {
    console.error(error.networkError)
    return <ServerError />
  }

  let errorCode, errorMsg

  if (error.graphQLErrors && error.graphQLErrors[0].extensions) {
    errorCode = error.graphQLErrors[0].extensions.code
    errorMsg = error.graphQLErrors[0].message
  }

  const printError = `
  error: ${errorMsg}
  code: ${errorCode}
  `

  if (errorCode === "Unavailable") {
    console.error(printError)
    return <ServerError />
  }

  if (errorCode === "NotFound") {
    console.error(printError)
    return (
      <NotFoundError
        error={errorMsg.charAt(0).toUpperCase() + errorMsg.slice(1)}
      />
    )
  }

  console.error(printError)
  return <OtherError />
}

GraphQLErrorPage.defaultProps = {
  error: {},
}

export default GraphQLErrorPage
