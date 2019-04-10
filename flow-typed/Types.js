// components
declare module "utils/oauthConfig" {
  declare module.exports: any
}
declare module "utils/clientConfig" {
  declare module.exports: any
}
declare module "utils/fetchResources" {
  declare module.exports: any
}
declare module "utils/headerItems" {
  declare module.exports: any
}
declare module "utils/routerHistory" {
  declare module.exports: any
}
declare module "utils/fetch" {
  declare module.exports: any
}
declare module "utils/api" {
  declare module.exports: any
}
declare module "utils/apiClasses" {
  declare module.exports: any
}
declare module "utils/timeSince" {
  declare module.exports: any
}
declare module "utils/findLinkEntities" {
  declare module.exports: any
}
declare module "middlewares/storage" {
  declare module.exports: any
}
declare module "middlewares/callAPI" {
  declare module.exports: any
}
declare module "validator/lib/isEmail" {
  declare module.exports: any
}
declare module "history/createBrowserHistory" {
  declare module.exports: any
}

// styles
declare module "react-virtualized/styles.css" {
  declare module.exports: any
}
declare module "react-responsive-carousel/lib/styles/carousel.min.css" {
  declare module.exports: any
}

// declaration for hot reloading
declare var module: {
  hot: {
    accept(path: string, callback: () => void): void,
  },
}

class process {
  static env: {
    REACT_APP_API_SERVER: string,
    REACT_APP_AUTH_SERVER: string,
    REACT_APP_BASENAME: string,
    REACT_APP_DEBUG: boolean,
    REACT_APP_FOOTER_JSON: string,
    REACT_APP_GA_TRACKING_ID: string,
    REACT_APP_GRAPHQL_SERVER: string,
    REACT_APP_NAVBAR_JSON: string,
  }
}
