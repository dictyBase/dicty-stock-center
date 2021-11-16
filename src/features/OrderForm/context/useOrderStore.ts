import React from "react"
import { OrderContext } from "./OrderContext"

const useOrderStore = () => {
  const context = React.useContext(OrderContext)
  if (!context) {
    throw new Error(
      "useOrderStore must only be used inside an OrderProvider component",
    )
  }
  return context
}

export default useOrderStore
