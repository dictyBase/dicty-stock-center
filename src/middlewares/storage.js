// @flow
type middlewareArg = {
  /** Action type for saving the state */
  save_action: string,
  /** Action type for removing the state */
  remove_action: string,
  /** Key that will be used to save part of store's state*/
  /** leaving it blank will let entire state to be saved */
  key?: string,
  /** Key that will be used to save to localStorage */
  namespace: string,
}

/**
 * Save or remove part or entire redux state tree from localStorage by matching to a particular dispatched action
 */
let manageStateStorage = ({
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
        try {
          switch (action.type) {
            case save_action:
              if (state[key]) {
                window.localStorage.setItem(
                  namespace,
                  JSON.stringify(state[key]),
                )
              } else {
                window.localStorage.setItem(namespace, JSON.stringify(state))
              }
              break
            case remove_action:
              window.localStorage.removeItem(namespace)
              break
            default:
              break
          }
          return next(action)
        } catch (e) {
          console.error("error in saving to localStorage %s", JSON.stringify(e))
        }
      }
    }
  }
}

export default manageStateStorage
