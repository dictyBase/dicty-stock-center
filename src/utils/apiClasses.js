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

  getRoles() {
    if (this.json.roles) {
      // return the role and capitalize the first letter
      const role = this.json.roles[0].attributes.role
      return role.charAt(0).toUpperCase() + role.substr(1)
    } else {
      return "..."
    }
  }

  canOverwrite = id => {
    if (id === this.json.data.id || this.getRoles() === "Superuser") {
      return true
    } else {
      return null
    }
  }
}

export class PermissionAPI extends JsonAPI {
  json: Object

  getResources() {
    if (this.json.permissions) {
      this.json.permissions.forEach(item => {
        return item.attributes.resource
      })
    } else {
      return
    }
  }

  getPermissions() {
    if (this.json.permissions) {
      this.json.permissions.forEach(item => {
        return item.attributes.permission
      })
    } else {
      return
    }
  }
}

export class RoleAPI extends JsonAPI {
  json: Object

  getRoles() {
    if (this.json.roles) {
      this.json.roles.forEach(item => {
        return item.attributes.role
      })
    } else {
      return
    }
  }
}

export class ContentAPI extends AuthenticatedUser {
  json: Object

  getUser() {
    return this.json.data.attributes.updated_by
  }
}
