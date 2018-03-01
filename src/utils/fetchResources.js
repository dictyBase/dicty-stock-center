let fetchBySlugResource, fetchByIdResource, oauthEndpointResource

if (process.env.REACT_APP_API_SERVER) {
  // set URL base for fetching by slug
  const fetchBySlugBase = "/contents/slug"
  fetchBySlugResource = `${process.env.REACT_APP_API_SERVER}${fetchBySlugBase}`
  // set URL base for fetching by ID
  const fetchByIdBase = "/contents"
  fetchByIdResource = `${process.env.REACT_APP_API_SERVER}${fetchByIdBase}`
} else {
  fetchBySlugResource = "http://localhost:8080/contents/slug"
  fetchByIdResource = "http://localhost:8080/contents"
}

if (process.env.REACT_APP_AUTH_SERVER) {
  const oauthEndpointBase = "/tokens"
  oauthEndpointResource = `${
    process.env.REACT_APP_AUTH_SERVER
  }${oauthEndpointBase}`
} else {
  oauthEndpointResource = "http://localhost:9999/tokens"
}

export { fetchBySlugResource, fetchByIdResource, oauthEndpointResource }
