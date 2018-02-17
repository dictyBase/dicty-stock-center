import storage from "constants/auth"

const { USER_STORAGE, TOKEN_STORAGE } = storage

const tokenStorageMiddleware = ({ save, remove }) => {
  return store => {
    return next => {
      return action => {
        switch (action.type) {
          case save:
            window.localStorage.setItem(TOKEN_STORAGE, action.token)
            break
          case remove:
            window.localStorage.removeItem(TOKEN_STORAGE)
            break
          default:
            break
        }
        return next(action)
      }
    }
  }
}

const userStorageMiddleware = ({ save, remove }) => {
  return store => {
    return next => {
      return action => {
        switch (action.type) {
          case save:
            window.localStorage.setItem(
              USER_STORAGE,
              JSON.stringify(action.user),
            )
            break
          case remove:
            window.localStorage.removeItem(USER_STORAGE)
            break
          default:
            break
        }
        return next(action)
      }
    }
  }
}

export { userStorageMiddleware, tokenStorageMiddleware }
