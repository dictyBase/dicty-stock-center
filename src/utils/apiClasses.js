// @flow
export class Response {
  res: Object
  json: Object
  constructor(res: Object, json: Object) {
    this.res = res
    this.json = json
  }
  isError() {
    if (this.res.ok) {
      return false
    }
    return true
  }
  isSuccess() {
    return this.res.ok
  }
  getResponse() {
    return this.res
  }
  getStatus() {
    return this.res.status
  }
}

export class ErrorAPI extends Response {
  res: Object
  json: Object
  constructor(res: Object, json: Object) {
    super(res, json)
  }
  notFound() {
    if (this.res.status == 404) {
      return true
    }
    return false
  }
  message() {
    return this.json.errors[0].title
  }
  description() {
    return this.json.errors[0].detail
  }
}

export class JsonAPI extends Response {
  res: Object
  json: Object
  links: Object
  relationships: Object
  constructor(res: Object, json: Object) {
    super(res, json)
  }
  getAttributes() {
    this.json.attributes
  }
  getType() {
    this.json.type
  }
  getId() {
    this.json.id
  }
  getFetchURL() {
    this.links.self
  }
  getRelationships() {
    this.relationships
  }
}

export class authApi extends Response {
  res: Object
  json: Object
  constructor(res: Object, json: Object) {
    super(res, json)
  }

  isAuthenticated() {
    if (this.json.isAuthenticated === true) {
      return true
    }
    return false
  }

  getToken() {
    this.json.token
  }

  getProvider() {
    this.json.provider
  }

  getUser() {
    this.json.user
  }
}
