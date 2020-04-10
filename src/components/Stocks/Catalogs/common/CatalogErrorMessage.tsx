import React from "react"
import NotFoundError from "./NotFoundError"
import OtherError from "./OtherError"
import { ApolloError } from "apollo-client"

type Props = {
  /** GraphQL error object */
  error: ApolloError
}

/**
 * CatalogErrorMessage is used to display any errors found when fetching
 * catalog data.
 */

const CatalogErrorMessage = ({ error }: Props) => {
  if (!error || !error.message) return null

  if (error.networkError) {
    console.error(error.networkError)
    return <OtherError />
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

  if (errorCode === "NotFound" && errorMsg) {
    return (
      <NotFoundError
        error={errorMsg.charAt(0).toUpperCase() + errorMsg.slice(1)}
      />
    )
  }

  console.error(printError)
  return <OtherError />
}

CatalogErrorMessage.defaultProps = {
  error: {},
}

export default CatalogErrorMessage
