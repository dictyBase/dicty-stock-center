// @flow
import { MAIN_RESOURCE } from "../constants/resources"
import jwtDecode from "jwt-decode"

interface Json {
  user: {
    first_name?: string
    last_name?: string
    updated_by?: string
    id: string
    roles: Array<{
      role: string
      permissions?: Array<{
        permission: string
        resource: string
      }>
    }>
  }
  isAuthenticated: boolean
  provider?: string
  token?: string
}

class JsonAPI {
  json: Json
  constructor(json: Json) {
    this.json = json
  }
  getId() {
    return this.json.user!.id
  }
}

class AuthAPI extends JsonAPI {
  // checks if user is currently authenticated
  isAuthenticated() {
    if (this.json.isAuthenticated === true) {
      return true
    }
    return false
  }

  // gets JWT from currently logged in user
  getToken() {
    return this.json.token
  }

  // verifies token is not expired
  verifyToken() {
    // get stored token
    const token = this.json.token

    // decode token
    const decodedToken = jwtDecode(token as string)

    // get current time in plain UTC
    const currentTime = Date.now().valueOf() / 1000

    // check if current time is less than token expiration date
    // @ts-ignore
    if (currentTime < decodedToken.exp) {
      return true
    }
    return false
  }

  // gets provider (i.e. google) from logged in user
  getProvider() {
    return this.json.provider
  }

  // gets user user
  getUser() {
    return this.json.user
  }
}

class AuthenticatedUser extends JsonAPI {
  // gets the first and last name of logged in user
  getFullName() {
    return `${this.json.user.first_name} ${this.json.user.last_name}`
  }

  // gets capitalized version of user's role
  getRoles() {
    if (this.json.user.roles) {
      const rolesArr = this.json.user.roles

      if (rolesArr[0] === undefined || rolesArr[0] === null) {
        // if user doesn't have role for some reason, just return "User"
        return "User"
      } else {
        // return the role and capitalize the first letter
        return (
          rolesArr[0].role.charAt(0).toUpperCase() + rolesArr[0].role.substr(1)
        )
      }
    }
    // default role if none exists
    return "User"
  }

  // checks if user can overwrite current content
  canOverwrite = (id: string) => {
    if (id === this.json.user.id || this.getRoles() === "Superuser") {
      return true
    }
    return false
  }
}

interface PermItem {
  permission: string
  resource: string
}

class RolesPermissionsAPI extends JsonAPI {
  // get full list of user's roles
  getRoles() {
    if (this.json.user.roles) {
      const roles = this.json.user.roles.map(item => item.role)
      return roles
    }
    return null
  }

  // checks if user has specified role
  checkRoles = (role: string) => {
    if (this.json.user.roles) {
      const filteredRoles = this.json.user.roles.filter(
        item => item.role === role,
      )

      // check if array is empty
      if (!Array.isArray(filteredRoles) || !filteredRoles.length) {
        return false
      }
      return true
    }
  }

  // gets lists of all resources from user's permissions
  getResources() {
    if (this.json.user.roles[0].permissions) {
      const resources = this.json.user.roles[0].permissions.map(
        item => item.resource,
      )
      return resources
    }
    return null
  }

  // gets full list of user's permissions
  getPermissions() {
    if (this.json.user.roles[0].permissions) {
      const permissions = this.json.user.roles[0].permissions.map(
        item => item.permission,
      )
      return permissions
    }
    return null
  }

  // this verifies that the user has the right resource
  // and permission to edit content
  verifyPermissions = (perm: string, resource: string) => {
    if (this.json.user.roles[0].permissions) {
      // immediately return true if superuser
      if (this.checkRoles("superuser")) {
        return true
      }

      const validPermissions = (item: PermItem) =>
        item.permission === "admin" ||
        (item.permission === perm && item.resource === resource) ||
        (item.permission === perm && item.resource === MAIN_RESOURCE)
      const filteredPerms = this.json.user.roles[0].permissions.filter(
        validPermissions,
      )

      // check if array is empty
      if (!Array.isArray(filteredPerms) || !filteredPerms.length) {
        return false
      }
      // valid permission found, return true
      return true
    }
    // if no permissions, just return false
    return false
  }
}

class ContentAPI extends AuthenticatedUser {
  // gets the user ID for person who last updated this content
  getUser() {
    if (this.json.user) {
      return this.json.user.updated_by
    }
    return null
  }
}

export { JsonAPI, AuthAPI, AuthenticatedUser, RolesPermissionsAPI, ContentAPI }
