import React from "react"
import { OrderContext } from "./OrderContext"

const useOrderStore = () => {
  const orderContext = React.useContext(OrderContext)
  if (!orderContext) {
    throw new Error(
      "useOrderStore must only be used inside an OrderProvider component",
    )
  }
  return orderContext
}

export default useOrderStore
