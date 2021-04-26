import { gql } from "@apollo/client"

const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        email
        first_name
        last_name
        roles {
          role
          permissions {
            permission
            resource
          }
        }
      }
      identity {
        provider
      }
    }
  }
`

const LOGOUT = gql`
  mutation Logout {
    logout {
      success
    }
  }
`

const CREATE_ORDER = gql`
  mutation CreateOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
    }
  }
`

const CREATE_CONTENT = gql`
  mutation CreateContent($input: CreateContentInput!) {
    createContent(input: $input) {
      name
      created_by {
        id
      }
      content
      namespace
    }
  }
`

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
    }
  }
`

const mutationList = ["Logout", "CreateContent", "UpdateContent"]

export {
  LOGIN,
  LOGOUT,
  CREATE_ORDER,
  CREATE_CONTENT,
  CREATE_USER,
  UPDATE_USER,
  mutationList,
}
