import { gql } from "@apollo/client"

const GET_USER_BY_EMAIL = gql`
  query UserByEmail($email: String!) {
    userByEmail(email: $email) {
      id
    }
  }
`

export { GET_USER_BY_EMAIL }
