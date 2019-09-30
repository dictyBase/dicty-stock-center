// @flow
import React from "react"
import NotFoundError from "./NotFoundError"
import OtherError from "./OtherError"

type Props = {
  /** GraphQL error object */
  error: Object,
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

  const errorCode = error.graphQLErrors[0].extensions.code
  const errorMsg = error.graphQLErrors[0].message
  const printError = `
  error: ${errorMsg}
  code: ${errorCode}
  `

  if (errorCode === "NotFound") {
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
