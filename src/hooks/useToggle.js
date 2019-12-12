// @flow
import React from "react"

/**
 * useToggle stores a boolean and offers methods to update it.
 */

const useToggle = (initialValue: boolean) => {
  const [value, setValue] = React.useState(initialValue)

  return {
    value,
    setValue,
    toggle: () => setValue(!value),
    setTrue: () => setValue(true),
    setFalse: () => setValue(false),
  }
}

export default useToggle
