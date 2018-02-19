// @flow
type hydrateArg = {
  /** Part of the state tree to be loaded */
  key?: string,
  /** Key to retrieve from localStorage */
  namespace: string,
}

type hydrateStoreFunc = hydrateArg

type hydrateLoadArg = Array<hydrateStoreFunc>

/**
 * Load states from localstorage to use in Redux's createStore method
 */
let hydrateStore = ({ key, namespace }: hydrateArg) => {
  try {
    let data = {}
    if (window.localStorage.getItem(namespace) !== null) {
      data = JSON.parse(window.localStorage.getItem(namespace))
    }
    let loadedState = {}
    if (key) {
      loadedState[key] = data
    } else {
      loadedState = data
    }
    return loadedState
  } catch (e) {
    console.error("unable to load state from localStoage %s", JSON.stringify(e))
  }
}

/**
 * Combine multiple load methods to return a single state to use in Redux's createStore method
 */
let hydrateAll = (...loaderFuncs: hydrateLoadArg) => {
  let combinedStates = loaderFuncs.reduce((merged, loader) => {
    let state = loader
    return { ...merged, ...state }
  })
  return combinedStates
}

export { hydrateStore, hydrateAll }
