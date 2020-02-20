/// <reference types="react-scripts" />
import "typescript"

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production"
      REACT_APP_BASENAME: string
      REACT_APP_GA_TRACKING_ID: string
      REACT_APP_NAVBAR_JSON: string
      REACT_APP_FOOTER_JSON: string
      REACT_APP_GRAPHQL_SERVER: string
    }
  }
}
