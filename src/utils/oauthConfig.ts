import clientConfig from "utils/clientConfig"
import redirectUrlGenerator from "utils/redirectUrlGenerator"

const oauthConfig = {
  google: {
    name: "Google",
    url: "/auth/google",
    authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
    clientId: clientConfig.google.clientId,
    redirectUrl: redirectUrlGenerator("google"),
    requiredUrlParams: [["response_type", "code"]],
    scopes: ["email"],
    scopeDelimiter: " ",
    optionalUrlParams: [["state", "google"]],
    popupOptions: { width: 1020, height: 633 },
  },
  linkedin: {
    name: "LinkedIn",
    url: "/auth/linkedin",
    authorizationEndpoint: "https://www.linkedin.com/oauth/v2/authorization",
    clientId: clientConfig.linkedin.clientId,
    redirectUrl: redirectUrlGenerator("linkedin"),
    scopes: ["r_emailaddress"],
    scopeDelimiter: " ",
    requiredUrlParams: [
      ["state", "linkedin"],
      ["response_type", "code"],
    ],
    popupOptions: { width: 1028, height: 640 },
  },
  orcid: {
    name: "ORCID",
    url: "/auth/orcid",
    authorizationEndpoint: "https://orcid.org/oauth/authorize",
    clientId: clientConfig.orcid.clientId,
    redirectUrl: redirectUrlGenerator("orcid"),
    scopes: ["/authenticate"],
    scopeDelimiter: " ",
    requiredUrlParams: [["response_type", "code"]],
    popupOptions: { width: 1028, height: 640 },
  },
}

export default oauthConfig
