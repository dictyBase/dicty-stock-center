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

export class authAPI extends JsonAPI {
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

export class permissionAPI extends JsonAPI {
  json: Object

  getResource() {
    return this.json.attributes.resource
  }

  getPermission() {
    return this.json.attributes.permission
  }
}

export class roleAPI extends JsonAPI {
  json: Object

  getRole() {
    return this.json.attributes.role
  }
}
