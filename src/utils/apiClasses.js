// @flow
export class JsonAPI {
  json: Object
  links: Object
  relationships: Object
  constructor(json: Object) {
    this.json = json
  }
  getAttributes() {
    return this.json.data.attributes
  }
  getType() {
    return this.json.data.type
  }
  getId() {
    return this.json.data.id
  }
  getFetchURL() {
    return this.json.links.self
  }
  getRelationships() {
    return this.json.data.relationships
  }
}

export class AuthAPI extends JsonAPI {
  json: Object

  isAuthenticated() {
    if (this.json.isAuthenticated === true) {
      return true
    }
    return false
  }

  getToken() {
    return this.json.token
  }

  getProvider() {
    return this.json.provider
  }

  getUser() {
    return this.json.user
  }
}

export class AuthenticatedUser extends JsonAPI {
  json: Object

  getFullName() {
    return `${this.json.data.attributes.first_name} ${
      this.json.data.attributes.last_name
    }`
  }

  getRole() {
    if (this.json.roles) {
      // return the role and capitalize the first letter
      const role = this.json.roles[0].attributes.role
      return role.charAt(0).toUpperCase() + role.substr(1)
    } else {
      return "..."
    }
  }
}

export class PermissionAPI extends JsonAPI {
  json: Object

  getResource() {
    return this.json.data.attributes.resource
  }

  // needs to go through array
  getPermissions() {
    return this.json.data.attributes.permission
  }
}

export class RoleAPI extends JsonAPI {
  json: Object

  getRole() {
    return this.json.data.attributes.role
  }
}

export class ContentAPI extends AuthenticatedUser {
  json: Object

  getUser() {
    return this.json.data.attributes.updated_by
  }
}
