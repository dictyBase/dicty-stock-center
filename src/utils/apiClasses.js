export class Response {
  constructor(res, json) {
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
  constructor(res, json) {
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
  constructor(res, json) {
    this.res = res
    this.json = json.data
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
