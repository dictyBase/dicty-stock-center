// @flow
type middlewareArg = {
  save_action: string,
  remove_action: string,
  key: string,
  namespace: string,
}

const manageStateStorage = ({
  save_action,
  remove_action,
  key,
  namespace,
}: middlewareArg) => {
  return store => {
    return next => {
      return action => {
        next(action)
        const state = store.getState()
        switch (action.type) {
          case save_action:
            window.localStorage.setItem(namespace, state[key])
            break
          case remove:
            window.localStorage.removeItem(namespace)
            break
          default:
            break
        }
        return next(action)
      }
    }
  }
}

export default manageStateStorage
