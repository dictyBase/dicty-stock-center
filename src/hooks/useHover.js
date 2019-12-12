// @flow
import React from "react"

/**
 * useHover is used to track if the mouse is hovering an element
 */

const useHover = () => {
  const [hover, setHover] = React.useState(false)

  const bind = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  }

  return { hover, setHover, bind }
}

export default useHover
