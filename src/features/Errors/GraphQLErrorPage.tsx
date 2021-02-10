import React from "react"
import ServerError from "./ServerError"
import NotFoundError from "./NotFoundError"
import OtherError from "./OtherError"
import { ApolloError } from "@apollo/client"
import { capitalizeFirstCharacter } from "common/utils/stringCapitalizations"

type Props = {
  /** GraphQL error object */
  error: ApolloError
}

/**
 * GraphQLErrorPage is used to display any errors found when issuing a
 * GraphQL query or mutation.
 */

const GraphQLErrorPage = ({ error }: Props) => {
  if (error.networkError) {
    console.error(error.networkError)
    return <ServerError />
  }
  let errorCode, errorMsg, content

  if (error.graphQLErrors[0].extensions) {
    errorCode = error.graphQLErrors[0].extensions.code
    errorMsg = error.graphQLErrors[0].message
    console.error(`
     error: ${errorMsg}
     code: ${errorCode}
    `)
  }

  switch (errorCode) {
    case "Unavailable":
      content = <ServerError />
      break
    case "NotFound":
      if (errorMsg) {
        content = <NotFoundError error={capitalizeFirstCharacter(errorMsg)} />
      }
      break
    default:
      content = <OtherError />
  }

  return content || null
}

GraphQLErrorPage.defaultProps = {
  error: {},
}

export default GraphQLErrorPage
