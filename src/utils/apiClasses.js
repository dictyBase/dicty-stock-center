// @flow
export class JsonAPI {
  json: Object
  links: Object
  relationships: Object
  constructor(json: Object) {
    this.json = json
  }
  getAttributes() {
    return this.json.attributes
  }
  getType() {
    return this.json.type
  }
  getId() {
    return this.json.id
  }
  getFetchURL() {
    return this.links.self
  }
  getRelationships() {
    return this.relationships
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
    return this.json.attributes.first_name + this.json.attributes.last_name
  }
}

export class PermissionAPI extends JsonAPI {
  json: Object

  getResource() {
    return this.json.attributes.resource
  }

  // needs to go through array
  getPermissions() {
    return this.json.attributes.permission
  }
}

export class RoleAPI extends JsonAPI {
  json: Object

  getRole() {
    return this.json.attributes.role
  }
}
